#!/usr/bin/env node
// Starts the upstream davinci-resolve-mcp servers at ONE pinned npm version, the same way on macOS and Windows.
// Usage: node launch-mcp.mjs live | advanced | doctor [args] | setup [args]
// This plugin ships no server code; the pinned package is fetched by npx on first use (see the Publishing section of the DaVinci Resolve Context page, Notion).
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
// Quiet, cache-first npx: no update notifier, audit or fund calls; use the local cache when the pinned version is already there.
const env = { npm_config_prefer_offline: "true", npm_config_update_notifier: "false", npm_config_audit: "false", npm_config_fund: "false", ...process.env };
// stderr only (stdout carries MCP traffic): say what is starting, since the first run downloads the package (~13 MB).
console.error(`[davinci-resolve] starting ${PKG} (${mode}) via npx; the first run downloads the package, later runs use the npm cache`);
const child = spawn(win ? "npx.cmd" : "npx", [...table[mode], ...rest], { stdio: "inherit", shell: win, env });
child.on("error", (e) => { console.error(`could not start npx (is Node 20+ installed and on PATH?): ${e.message}`); process.exit(1); });
child.on("exit", (code, signal) => process.exit(code ?? (signal ? 1 : 0)));
