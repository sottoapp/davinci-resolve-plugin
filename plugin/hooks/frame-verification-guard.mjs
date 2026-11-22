#!/usr/bin/env node
// PreToolUse guard: no grade lands without a frame reference behind it. Node port of frame_verification_guard.py.
// PostToolUse records that frames were looked at; PreToolUse refuses grade-writing actions until they were.
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadEvent, pretoolDecision } from "./hook-runtime.mjs";

// Plugin-bundled servers are exposed as mcp__plugin_<plugin>_<server>__tool; fold to mcp__<server>__tool.
export const norm = (name) => String(name || "").replace(/^mcp__plugin_[^_]+_/, "mcp__");

const GRADE_APPLY_ACTIONS = new Set(["safe_set_cdl", "safe_copy_grade", "safe_apply_drx", "bulk_match_to_hero", "propose_grade"]);
const BULK_APPLY_ACTIONS = new Set(["safe_copy_grade", "bulk_match_to_hero"]);
const EVIDENCE_TOOLS = new Set(["mcp__davinci-resolve__media_analysis", "mcp__davinci-resolve__gallery", "mcp__davinci-resolve__gallery_stills"]);
const EVIDENCE_ACTIONS = new Set(["grade_evidence_base", "grade_boundary_report", "probe_grade_item", "probe_node_graph", "grade_version_snapshot"]);
const IMAGE_SUFFIXES = [".png", ".jpg", ".jpeg", ".tif", ".tiff", ".dpx", ".exr"];
const isImage = (t) => IMAGE_SUFFIXES.some((s) => String(t).toLowerCase().endsWith(s));
const obj = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v : {});

export function statePath(sessionId) {
  if (!sessionId) return null;
  const digest = crypto.createHash("sha256").update(sessionId).digest("hex");
  return path.join(os.tmpdir(), "davinci-resolve-agent-hooks", `${digest}.frame-evidence`);
}

// Does a tool call (live event or transcript entry) count as having looked at frames?
export function isEvidence(name, payload) {
  const n = norm(name); const p = obj(payload);
  if (EVIDENCE_TOOLS.has(n)) return true;
  if (n === "mcp__davinci-resolve__timeline_item_color") return EVIDENCE_ACTIONS.has(p.action);
  if (n === "Read" || n === "view_image") return isImage(p.file_path || p.path || "");
  if (n === "Bash") return String(p.command || "").includes("contact_sheet.py");
  return false;
}

function transcriptHasEvidence(file) {
  if (!file || !fs.existsSync(file)) return false;
  for (const line of fs.readFileSync(file, "utf8").split("\n")) {
    let entry; try { entry = JSON.parse(line.trim()); } catch { continue; }
    const content = obj(entry?.message).content;
    if (!Array.isArray(content)) continue;
    if (content.some((b) => b && b.type === "tool_use" && isEvidence(b.name, b.input))) return true;
  }
  return false;
}

export function evaluate(event) {
  if (event.hook_event_name === "PostToolUse") {
    if (isEvidence(event.tool_name, event.tool_input)) {
      const p = statePath(String(event.session_id || ""));
      if (p) { try { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, "frame evidence observed\n"); } catch {} }
    }
    return null;
  }
  const input = obj(event.tool_input);
  const action = input.action;
  if (!GRADE_APPLY_ACTIONS.has(action)) return null;
  if (obj(input.params).dry_run) return null; // a preview writes nothing
  const recorded = statePath(String(event.session_id || ""));
  const evidence = (recorded && fs.existsSync(recorded) && fs.statSync(recorded).isFile()) || transcriptHasEvidence(event.transcript_path || "");
  if (!evidence) {
    return ["deny", `A grade needs frame references before '${action}' applies it. Nothing in this session has looked at a Resolve-rendered frame yet.\n\n` +
      "Gather evidence first, then retry:\n" +
      "  - timeline_item_color(action='grade_evidence_base') for the trust-scored base\n" +
      "  - timeline_item_color(action='probe_node_graph') to see the existing grade\n" +
      "  - gallery_stills / media_analysis to pull frames, then Read them as images\n\n" +
      "Grading from metadata, graph availability, or a style label alone is the failure mode this guard exists to catch. " +
      "If the user explicitly asked for a blind/global pass, say so and re-run with dry_run first."];
  }
  if (BULK_APPLY_ACTIONS.has(action)) {
    return ["ask", `'${action}' applies a whole-grade artifact across clips and can overwrite hand-graded work with no recovery path. ` +
      "Frame evidence is present, so this is a confirmation, not a block.\n\n" +
      "Before confirming, be sure you have: verified the target clips are uniform, and taken a grade_version_snapshot so the previous grade is recoverable."];
  }
  return null;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const event = loadEvent();
  if (Object.keys(event).length) { const d = evaluate(event); if (d) pretoolDecision(d[0], d[1]); }
}
