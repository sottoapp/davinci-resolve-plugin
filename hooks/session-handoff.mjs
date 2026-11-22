#!/usr/bin/env node
// SessionEnd: write a handoff digest for this directory.  SessionStart: surface the latest one.  (Informational: always exits 0.)
//   node session-handoff.mjs end | start
import fs from "node:fs";
import { loadEvent } from "./hook-runtime.mjs";
import { addNote, buildHandoff, notesFile, readForStart, readTranscript, saveHandoff } from "./handoff-lib.mjs";

const mode = process.argv[2];
try {
  const ev = loadEvent();
  const cwd = ev.cwd || process.cwd();
  if (mode === "end") {
    const nf = notesFile(cwd); const notes = fs.existsSync(nf) ? fs.readFileSync(nf, "utf8") : "";
    const md = buildHandoff(readTranscript(ev.transcript_path), { sessionId: ev.session_id, cwd, reason: ev.reason, notes });
    saveHandoff(cwd, md, ev.session_id);
    if (notes) fs.rmSync(nf, { force: true }); // notes are consumed by the handoff they were folded into
  } else if (mode === "start" && ev.source !== "compact") {
    const text = readForStart(cwd, ev.session_id);
    if (text) process.stdout.write(JSON.stringify({ hookSpecificOutput: { hookEventName: "SessionStart", additionalContext: text } }) + "\n");
  }
} catch { /* a handoff failure must never disturb the session */ }
