#!/usr/bin/env node
// Diagnose the Resolve MCP install (Python venv, Resolve paths, scripting access). Runs the pinned upstream `doctor`.
// Usage: node scripts/resolve-doctor.mjs [install.py options]      First-time setup: node scripts/launch-mcp.mjs setup
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const r = spawnSync(process.execPath, [path.join(here, "launch-mcp.mjs"), "doctor", ...process.argv.slice(2)], { stdio: "inherit" });
process.exit(r.status ?? 1);
