#!/usr/bin/env node
// PreToolUse guard: shell commands may read source media, never rewrite it.
// Node port of source_media_guard.py (same rules, same decisions). A lexical tripwire for the common
// direct mistake, not a sandbox: it cannot see `find -delete`, `| xargs rm`, directory deletes with no
// media extension, or scripts that write media on their own.
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadEvent, pretoolDecision, normalize } from "./hook-runtime.mjs";

const MEDIA_SUFFIXES = [
  ".mov", ".mp4", ".mxf", ".avi", ".mkv", ".m4v", ".mts", ".m2ts", ".webm",
  ".braw", ".r3d", ".ari", ".arx", ".arriraw", ".crm", ".cine", ".dng",
  ".exr", ".dpx", ".tif", ".tiff", ".cr2", ".cr3", ".nef", ".arw",
  ".wav", ".aif", ".aiff", ".caf", ".flac", ".mp3", ".m4a",
  ".drp", ".drt", ".drx",
];
const MUTATING = new Set(["rm", "mv", "cp", "dd", "truncate", "shred", "unlink", "install", "ffmpeg", "avconv",
  "HandBrakeCLI", "handbrakecli", "convert", "magick", "sips", "qt-faststart", "exiftool", "touch", "chmod", "chown"]);
const DESTRUCTIVE = new Set(["rm", "mv", "dd", "truncate", "shred", "unlink"]);
const SCRATCH_ROOTS = ["/tmp", "/private/tmp", "/var/folders"];
const SCRATCH_COMPONENTS = ["scratch", "davinci-resolve-mcp-analysis", ".cache"];
const SCRATCH_COMPONENT_PREFIXES = ["claude-", "codex-"]; // deliberately narrow: these EXEMPT a path from the deny
const SCRATCH_RUNS = [["tests", "fixtures"], ["tests", "tmp"]];
const WRITE_ONLY_COMPONENTS = ["proxies", "renders", "exports"]; // exempt a write, never a delete or move

const components = (p) => normalize(p).toLowerCase().split(path.sep).filter(Boolean);
const hasRun = (parts, marker) => parts.some((_, i) => marker.every((m, j) => parts[i + j] === m));

export function platformTempRoot() {
  if (process.platform !== "win32") return null;
  const root = normalize(os.tmpdir()).toLowerCase();
  if (path.dirname(root) === root) return null;
  const profile = normalize(os.homedir()).toLowerCase();
  if (profile === root || profile.startsWith(root.replace(/[\\/]+$/, "") + path.sep)) return null;
  if (root === path.resolve(process.cwd()).toLowerCase()) return null;
  return root;
}

export function isScratch(p, destructive = false) {
  const resolved = normalize(p).toLowerCase();
  const parts = components(p);
  const configured = process.env.RESOLVE_MCP_SCRATCH || "";
  let roots = [...SCRATCH_ROOTS, ...(configured ? [configured] : [])].map((r) => normalize(r).toLowerCase());
  const temp = platformTempRoot();
  if (temp) roots.push(temp);
  if (roots.some((r) => resolved === r || resolved.startsWith(r.replace(/[\\/]+$/, "") + path.sep))) return true;
  if (parts.some((x) => SCRATCH_COMPONENTS.includes(x))) return true;
  if (parts.some((x) => SCRATCH_COMPONENT_PREFIXES.some((pre) => x.startsWith(pre)))) return true;
  if (SCRATCH_RUNS.some((m) => hasRun(parts, m))) return true;
  return !destructive && parts.some((x) => WRITE_ONLY_COMPONENTS.includes(x));
}

const isMedia = (t) => MEDIA_SUFFIXES.some((s) => t.toLowerCase().endsWith(s));

// Split on shell separators (newlines included) so `ffprobe x && rm y` is checked as two commands.
export const splitCommands = (command) => command.split(/&&|\|\||;|\||\n/).filter((s) => s.trim());

// POSIX shlex.split equivalent; throws on an unterminated quote like Python's ValueError.
export function shlexSplit(s) {
  const out = []; let cur = ""; let inTok = false; let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (c === " " || c === "\t" || c === "\r" || c === "\n") { if (inTok) { out.push(cur); cur = ""; inTok = false; } i++; continue; }
    inTok = true;
    if (c === "'") { const j = s.indexOf("'", i + 1); if (j < 0) throw new Error("unterminated quote"); cur += s.slice(i + 1, j); i = j + 1; continue; }
    if (c === '"') {
      i++; let closed = false;
      while (i < s.length) {
        const d = s[i];
        if (d === '"') { closed = true; i++; break; }
        if (d === "\\" && i + 1 < s.length && (s[i + 1] === '"' || s[i + 1] === "\\")) { cur += s[i + 1]; i += 2; continue; }
        cur += d; i++;
      }
      if (!closed) throw new Error("unterminated quote");
      continue;
    }
    if (c === "\\") { if (i + 1 >= s.length) throw new Error("trailing backslash"); cur += s[i + 1]; i += 2; continue; }
    cur += c; i++;
  }
  if (inTok) out.push(cur);
  return out;
}

export function endangeredTargets(segment) {
  let tokens;
  try { tokens = shlexSplit(segment); } catch { tokens = segment.split(/\s+/).filter(Boolean); }
  if (!tokens.length) return [];
  let argv0 = path.basename(tokens[0]);
  let index = 0;
  while (index < tokens.length && tokens[index].includes("=") && !tokens[index].startsWith("-")) {
    index++;
    argv0 = index < tokens.length ? path.basename(tokens[index]) : argv0;
  }
  const args = tokens.slice(index + 1);
  if (!MUTATING.has(argv0)) return [...segment.matchAll(/>>?\s*(\S+)/g)].map((m) => m[1]).filter(isMedia);
  const destructive = DESTRUCTIVE.has(argv0);
  if (argv0 === "ffmpeg" || argv0 === "avconv") {
    // The trailing operand is the output even if it also appears as an input (in-place overwrite);
    // the only exception is the value of a `-i` right before it, which is a read.
    let trailing = args.length && !args[args.length - 1].startsWith("-") ? [args[args.length - 1]] : [];
    if (args.length >= 2 && args[args.length - 2] === "-i") trailing = [];
    return trailing.filter((t) => isMedia(t) && !isScratch(t));
  }
  if (argv0 === "cp") {
    const operands = args.filter((a) => !a.startsWith("-"));
    return operands.slice(-1).filter((t) => isMedia(t) && !isScratch(t));
  }
  return args.filter((a) => !a.startsWith("-") && isMedia(a) && !isScratch(a, destructive));
}

export function evaluate(event) {
  const command = String((event.tool_input || {}).command ?? "");
  if (!command.trim()) return null;
  const hits = splitCommands(command).flatMap(endangeredTargets);
  if (!hits.length) return null;
  const listed = [...new Set(hits)].map((p) => `  - ${p}`).join("\n");
  return "Blocked: this command writes to, moves, or deletes source media outside a scratch root.\n\n" + listed +
    "\n\nRule: never modify, transcode, convert, proxy, relink, replace, or create derivatives of source media unless the user " +
    "asked for that exact operation. Reading is fine — ffprobe, and ffmpeg that writes into scratch, both pass.\n\n" +
    "Send derivatives to the session scratch directory or the davinci-resolve-mcp-analysis project root instead. If the user did " +
    "explicitly ask for this exact operation on this exact file, say so and let them approve it.";
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const reason = evaluate(loadEvent());
  if (reason) pretoolDecision("deny", reason);
}
