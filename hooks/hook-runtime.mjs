// Shared helpers for the plugin's PreToolUse/PostToolUse guards (Node port of hook_runtime.py).
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

export function loadEvent() {
  try {
    const value = JSON.parse(fs.readFileSync(0, "utf8"));
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
  } catch {
    return {};
  }
}

const write = (payload) => process.stdout.write(JSON.stringify(payload) + "\n");

export function pretoolDecision(decision, reason) {
  write({ hookSpecificOutput: { hookEventName: "PreToolUse", permissionDecision: decision, permissionDecisionReason: reason } });
}

// POSIX-style expansion matching Python's os.path.expanduser/expandvars (plus %VAR% on Windows).
export function expand(p) {
  let s = p;
  if (s === "~" || s.startsWith("~/") || s.startsWith("~\\")) s = os.homedir() + s.slice(1);
  s = s.replace(/\$(?:(\w+)|\{([^}]*)\})/g, (m, a, b) => process.env[a ?? b] ?? m);
  if (process.platform === "win32") s = s.replace(/%([^%]+)%/g, (m, n) => process.env[n] ?? m);
  return s;
}

export const normalize = (p) => path.resolve(expand(p));
