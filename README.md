# DaVinci Resolve plugin for Claude

A Claude Code plugin that drives DaVinci Resolve Studio through the vendored
[davinci-resolve-mcp](https://github.com/samuelgursky/davinci-resolve-mcp) server,
with a research-backed library of workflow skills, review agents and safety hooks.

```
.claude-plugin/   plugin.json, marketplace.json
.mcp.json         live (Python) + advanced/offline (Node) MCP servers
skills/           40 skills in four layers — index in docs/skill-library.md
                    realestate-*     vertical know-how (editing, colour, delivery/compliance)
                    resolve-guide-*  Resolve itself (manual-based app guides)
                    editing-*        editing craft mapped to Resolve actions
                    resolve-*, …     driving Resolve through the MCP server
agents/           cut-reviewer, grade-match-verifier, drift-guard-reviewer
hooks/            source-media + frame-evidence guards (Node, fail-closed), session handoff hooks, tests
mcp-server/       vendored upstream, verbatim (see UPSTREAM.md)
docs/             README index → ARCHITECTURE, skill-library, plugin-components,
                  skill-backlog, research/ (sourced digests, Gemini analyses, baseline tests)
scripts/          validate_plugin.py, gen_skill_library.py, resolve-doctor.mjs, handoff.mjs
evals/            trigger/behavior cases (to be written)
```

## Setup
0. Requires Node 20+ (hooks and MCP launchers), Python 3.10+ (live server) and Resolve Studio on macOS or Windows.
1. Resolve Studio: **Preferences ▸ General ▸ External scripting using ▸ Local**.
2. Check your setup any time with `node scripts/resolve-doctor.mjs`. One-time server setup: `node mcp-server/bin/davinci-resolve-mcp.mjs setup` (creates the
   Python venv; for the advanced server also `npm install --omit=dev --omit=optional --prefix mcp-server/resolve-advanced`).
3. Install the plugin: `claude --plugin-dir .` to try it, or add this repo as a marketplace.
4. Start Resolve with a project open, then ask Claude to start a session (`resolve-session`).

## What runs on your machine
- **MCP servers** (`.mcp.json`): a Python server and a Node server that drive Resolve through its local scripting API. They run with your user permissions.
- **Hooks** (`hooks/`): Node scripts. *Guards* block shell commands that would rewrite source media and block grade writes made without looking
  at frames. *Session handoff* saves a local digest when a session ends and shows it in the next one (`docs/session-handoff.md`).
- **No network calls of its own:** the upstream GitHub update check is disabled, nothing installs automatically, and handoffs stay on disk.
- Setup is manual and explicit; `node scripts/resolve-doctor.mjs` tells you what is missing.

## Status
`python3 scripts/validate_plugin.py` and `claude plugin validate .` both pass; the Node guard hooks pass `node --test hooks/test/guards.test.mjs` (48 tests, parity-checked against the original Python);
three skills were baseline-tested with subagents (`docs/research/skill-baseline-tests.md`).
**Not yet run against a live Resolve**, and `claude plugin eval` has not been run.
