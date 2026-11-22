// Run: node --test hooks/test/guards.test.mjs   (end-to-end: each case pipes an event into the real guard script)
import { test } from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const guards = { "source-media": "../source-media-guard.mjs", frame: "../frame-verification-guard.mjs" };
const cases = JSON.parse(fs.readFileSync(path.join(dir, "cases.json"), "utf8"));
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "guard-test-"));
const decision = (out) => (out.trim() ? JSON.parse(out).hookSpecificOutput.permissionDecision ?? "context" : "none");

for (const c of cases) {
  test(`${c.guard}: ${c.name}`, () => {
    const sid = `t-${process.pid}-${c.name}`; // unique per run: frame-evidence state is keyed by session id
    c.steps.forEach((step, i) => {
      const ev = structuredClone(step.event);
      if (Object.keys(ev).length) ev.session_id = sid;
      if (ev.transcript_entries) {
        const f = path.join(tmp, `${c.name}.jsonl`);
        fs.writeFileSync(f, ev.transcript_entries.map((e) => JSON.stringify(e)).join("\n"));
        ev.transcript_path = f; delete ev.transcript_entries;
      }
      const r = spawnSync("node", [path.join(dir, guards[c.guard])], { input: JSON.stringify(ev), encoding: "utf8" });
      assert.equal(r.status, 0, r.stderr);
      assert.equal(decision(r.stdout), step.expect, `step ${i}`);
    });
  });
}

test("garbage stdin fails open with no output (guards decide only on a parseable event)", () => {
  for (const g of Object.values(guards)) {
    const r = spawnSync("node", [path.join(dir, g)], { input: "not json", encoding: "utf8" });
    assert.equal(r.status, 0); assert.equal(r.stdout.trim(), "");
  }
});
