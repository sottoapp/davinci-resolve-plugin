#!/usr/bin/env node
// Diagnose the vendored Resolve MCP install (Python venv, Resolve paths, Node deps for the advanced server).
// Usage: node scripts/resolve-doctor.mjs [install.py options]
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const r = spawnSync(process.execPath, [path.join(root, "mcp-server/bin/davinci-resolve-mcp.mjs"), "doctor", ...process.argv.slice(2)], { stdio: "inherit" });
process.exit(r.status ?? 1);
