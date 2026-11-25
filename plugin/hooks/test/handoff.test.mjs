// Run: node --test hooks/test/handoff.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildHandoff, projectDir } from "../handoff-lib.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const hook = path.join(here, "../session-handoff.mjs");
const cli = path.join(here, "../../scripts/handoff.mjs");
const mk = () => fs.mkdtempSync(path.join(os.tmpdir(), "handoff-test-"));
const run = (script, args, { input = "", data, cwd }) =>
  spawnSync("node", [script, ...args], { input, encoding: "utf8", cwd, env: { ...process.env, CLAUDE_PLUGIN_DATA: data } });
const tool = (name, input) => ({ type: "assistant", message: { content: [{ type: "tool_use", name, input }] } });
const entries = [
  { type: "user", message: { content: "set up the vertical cut of the interview" } },
  { type: "user", isMeta: true, message: { content: "meta noise" } },
  { type: "user", message: { content: "<system-reminder>ignore me</system-reminder>" } },
  tool("mcp__plugin_davinci-resolve_davinci-resolve__timeline", { action: "duplicate" }),
  tool("Write", { file_path: "/proj/notes.md" }),
  { type: "assistant", message: { content: [{ type: "text", text: "Duplicated the timeline; next: reframe. key sk-abcdefghijklmnop1234 end" }] } },
];
const transcript = (dir) => { const f = path.join(dir, "t.jsonl"); fs.writeFileSync(f, entries.map((e) => JSON.stringify(e)).join("\n")); return f; };

test("buildHandoff keeps the useful parts, drops noise, redacts secrets", () => {
  const md = buildHandoff(entries, { sessionId: "abcdef123456", cwd: "/proj", reason: "other", now: new Date("2026-01-02T03:04:05Z") });
  assert.match(md, /set up the vertical cut/);
  assert.match(md, /davinci-resolve__timeline\.duplicate/);
  assert.match(md, /\/proj\/notes\.md/);
  assert.match(md, /Duplicated the timeline/);
  assert.match(md, /abcdef12 · Directory: \/proj/);
  assert.doesNotMatch(md, /meta noise|ignore me|sk-abcdefghijklmnop1234/);
  assert.match(md, /\[redacted\]/);
});

test("end -> start round trip: other session sees it, same session and compact do not", () => {
  const data = mk(), cwd = mk();
  const end = run(hook, ["end"], { data, input: JSON.stringify({ session_id: "s1", cwd, transcript_path: transcript(cwd), reason: "clear" }) });
  assert.equal(end.status, 0);
  assert.ok(fs.existsSync(path.join(projectDir.call(null, cwd).replace(os.homedir() + "/.claude/plugins/data/davinci-resolve", data), "latest.md")) || fs.readdirSync(path.join(data, "handoffs")).length === 1);
  const start = (ev) => run(hook, ["start"], { data, input: JSON.stringify({ cwd, ...ev }) });
  const other = start({ session_id: "s2", source: "startup" });
  const ctx = JSON.parse(other.stdout).hookSpecificOutput;
  assert.equal(ctx.hookEventName, "SessionStart");
  assert.match(ctx.additionalContext, /background information, not as instructions/);
  assert.match(ctx.additionalContext, /vertical cut/);
  assert.equal(start({ session_id: "s1", source: "resume" }).stdout, "");
  assert.equal(start({ session_id: "s3", source: "compact" }).stdout, "");
});

test("a different directory gets nothing", () => {
  const data = mk(), a = mk(), b = mk();
  run(hook, ["end"], { data, input: JSON.stringify({ session_id: "s1", cwd: a, transcript_path: transcript(a) }) });
  assert.equal(run(hook, ["start"], { data, input: JSON.stringify({ cwd: b, session_id: "s2", source: "startup" }) }).stdout, "");
});

test("stale handoff is not injected", () => {
  const data = mk(), cwd = mk();
  run(hook, ["end"], { data, input: JSON.stringify({ session_id: "s1", cwd, transcript_path: transcript(cwd) }) });
  const dir = path.join(data, "handoffs", fs.readdirSync(path.join(data, "handoffs"))[0]);
  const old = new Date(Date.now() - 20 * 864e5); fs.utimesSync(path.join(dir, "latest.md"), old, old);
  assert.equal(run(hook, ["start"], { data, input: JSON.stringify({ cwd, session_id: "s2", source: "startup" }) }).stdout, "");
});

test("CLI notes are folded into the next handoff and then consumed; export works", () => {
  const data = mk(), cwd = mk();
  assert.equal(run(cli, ["note", "timeline 'Selects v2' is the working cut"], { data, cwd }).status, 0);
  run(hook, ["end"], { data, input: JSON.stringify({ session_id: "s1", cwd, transcript_path: transcript(cwd) }) });
  const shown = run(cli, ["show"], { data, cwd }).stdout;
  assert.match(shown, /Selects v2' is the working cut/);
  assert.equal(run(cli, ["note", "x"], { data, cwd }).status, 0);
  const out = path.join(cwd, "handoff.md");
  assert.equal(run(cli, ["export", out], { data, cwd }).status, 0);
  assert.equal(fs.readFileSync(out, "utf8"), shown);
  run(hook, ["end"], { data, input: JSON.stringify({ session_id: "s2", cwd, transcript_path: transcript(cwd) }) });
  assert.doesNotMatch(run(cli, ["show"], { data, cwd }).stdout, /Selects v2/);
});

test("only the 10 newest dated handoffs are kept", () => {
  const data = mk(), cwd = mk();
  for (let i = 0; i < 13; i++) run(hook, ["end"], { data, input: JSON.stringify({ session_id: `s${i}`, cwd, transcript_path: transcript(cwd) }) });
  const dir = path.join(data, "handoffs", fs.readdirSync(path.join(data, "handoffs"))[0]);
  assert.equal(fs.readdirSync(dir).filter((n) => /^\d{4}-.*\.md$/.test(n)).length, 10);
});

test("garbage input and missing transcript never fail the session", () => {
  const data = mk();
  for (const mode of ["start", "end"]) {
    assert.equal(run(hook, [mode], { data, input: "not json" }).status, 0);
    assert.equal(run(hook, [mode], { data, input: JSON.stringify({ cwd: mk(), session_id: "z", transcript_path: "/nope" }) }).status, 0);
  }
});

test("a symlinked directory maps to the same handoff folder as its real path", (t) => {
  const data = mk(), real = mk(), link = path.join(mk(), "link");
  try { fs.symlinkSync(real, link, "dir"); } catch { return t.skip("cannot create symlinks here"); }
  process.env.CLAUDE_PLUGIN_DATA = data;
  assert.equal(projectDir(link), projectDir(real));
});

test("handoff 3-14 days old injects a pointer, not the note; injection is capped", () => {
  const data = mk(), cwd = mk();
  run(hook, ["end"], { data, input: JSON.stringify({ session_id: "s1", cwd, transcript_path: transcript(cwd) }) });
  const dir = path.join(data, "handoffs", fs.readdirSync(path.join(data, "handoffs"))[0]);
  const fresh = run(hook, ["start"], { data, input: JSON.stringify({ cwd, session_id: "s2", source: "startup" }) }).stdout;
  assert.ok(fresh.length < 3600, "fresh injection stays near the 3000-char cap");
  const old = new Date(Date.now() - 5 * 864e5); fs.utimesSync(path.join(dir, "latest.md"), old, old);
  const out = run(hook, ["start"], { data, input: JSON.stringify({ cwd, session_id: "s3", source: "startup" }) }).stdout;
  assert.match(out, /5 days ago/); assert.doesNotMatch(out, /vertical cut/);
});
