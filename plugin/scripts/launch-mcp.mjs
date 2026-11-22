#!/usr/bin/env node
// Starts the upstream davinci-resolve-mcp servers at ONE pinned npm version, the same way on macOS and Windows.
// Usage: node launch-mcp.mjs live | advanced | doctor [args] | setup [args]
// This plugin ships no server code; the pinned package is fetched by npx on first use (see docs/PUBLISHING.md).
// Bump VERSION only after re-testing: the source of that version is vendored for review in vendor/davinci-resolve-mcp.
import { spawn } from "node:child_process";

const VERSION = "5.4.0";
const PKG = `davinci-resolve-mcp@${VERSION}`;
const [mode, ...rest] = process.argv.slice(2);
const table = {
  live: ["-y", PKG, "server"],
  advanced: ["-y", "-p", PKG, "davinci-resolve-advanced-mcp"],
  doctor: ["-y", PKG, "doctor"],
  setup: ["-y", PKG, "setup"],
};
if (!table[mode]) {
  console.error("usage: node launch-mcp.mjs live|advanced|doctor|setup [args]");
  process.exit(2);
}
const win = process.platform === "win32";
const child = spawn(win ? "npx.cmd" : "npx", [...table[mode], ...rest], { stdio: "inherit", shell: win, env: process.env });
child.on("error", (e) => { console.error(`could not start npx (is Node 20+ installed and on PATH?): ${e.message}`); process.exit(1); });
child.on("exit", (code, signal) => process.exit(code ?? (signal ? 1 : 0)));
