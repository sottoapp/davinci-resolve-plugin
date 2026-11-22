#!/usr/bin/env node
// Manage session handoffs for the current directory.
//   node scripts/handoff.mjs show              print the latest handoff
//   node scripts/handoff.mjs note "<text>"     add a curated note (folded into the next handoff when the session ends)
//   node scripts/handoff.mjs export <file>     write the latest handoff to a portable markdown file
//   node scripts/handoff.mjs path              print the handoff folder
//   node scripts/handoff.mjs clear             delete this directory's handoffs and notes
import fs from "node:fs";
import path from "node:path";
import { addNote, projectDir } from "../hooks/handoff-lib.mjs";

const [cmd, ...rest] = process.argv.slice(2);
const dir = projectDir(process.cwd());
const latest = path.join(dir, "latest.md");
const need = () => { if (!fs.existsSync(latest)) { console.error("No handoff yet for this directory (one is written when a session ends)."); process.exit(1); } };
switch (cmd) {
  case "show": need(); process.stdout.write(fs.readFileSync(latest, "utf8")); break;
  case "note": if (!rest.length) { console.error('usage: note "<text>"'); process.exit(2); } console.log(`noted -> ${addNote(process.cwd(), rest.join(" "))}`); break;
  case "export": need(); if (!rest[0]) { console.error("usage: export <file>"); process.exit(2); } fs.copyFileSync(latest, rest[0]); console.log(`exported -> ${rest[0]}`); break;
  case "path": console.log(dir); break;
  case "clear": fs.rmSync(dir, { recursive: true, force: true }); console.log("cleared"); break;
  default: console.error("usage: show | note <text> | export <file> | path | clear"); process.exit(2);
}
