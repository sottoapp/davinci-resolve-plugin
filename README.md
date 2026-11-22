# DaVinci Resolve plugin for Claude

A Claude Code plugin that drives DaVinci Resolve Studio through the vendored
[davinci-resolve-mcp](https://github.com/samuelgursky/davinci-resolve-mcp) server,
with a research-backed library of workflow skills, review agents and safety hooks.

```
.claude-plugin/marketplace.json   marketplace entry (source ./plugin)
plugin/                           the shipped plugin (144 files; limits and layout: plugin/docs/ARCHITECTURE.md)
  .claude-plugin/plugin.json  .mcp.json   manifest; MCP servers started via scripts/launch-mcp.mjs (pinned upstream npm 5.4.0)
  skills/                         49 skills in four layers — index in plugin/docs/skill-library.md
                                    realestate-*, wedding-*, event-*   vertical know-how (editing, colour/audio, effects/titles, delivery/compliance)
                                    resolve-guide-*  Resolve itself (manual-based app guides)
                                    editing-*        editing craft mapped to Resolve actions
                                    resolve-*, ...   driving Resolve through the MCP server
  agents/  hooks/  scripts/  docs/  review agents; source-media and frame-evidence guards (Node, fail-closed) and session handoff; launcher, doctor, handoff CLI; sourced research
vendor/davinci-resolve-mcp/       upstream source, verbatim, NOT shipped (vendor/UPSTREAM.md)
evals/                            behaviour cases per skill area
scripts/                          validate_plugin.py, gen_skill_library.py (maintenance, repo root)
```

## Setup
0. Requires Node 20+ with `npx` (hooks and the MCP launcher), Python 3.10+ (live server) and Resolve Studio on macOS or Windows.
1. Resolve Studio: **Preferences ▸ General ▸ External scripting using ▸ Local**.
2. Install: `/plugin install davinci-resolve --marketplace sottoapp/davinci-resolve-plugin`, or try locally with `claude --plugin-dir plugin`.
3. One-time server setup (explicit, nothing installs automatically): `node scripts/launch-mcp.mjs setup` from the plugin folder; this fetches the pinned
   upstream package `davinci-resolve-mcp@5.4.0` through `npx` and builds its Python venv. Check any time with `node scripts/resolve-doctor.mjs`.
4. Start Resolve with a project open, then ask Claude to start a session (`resolve-session`).

## What runs on your machine
- **MCP servers** (`plugin/.mcp.json`): the upstream Python and Node servers, started by `plugin/scripts/launch-mcp.mjs`, which runs `npx` on **one pinned npm version**
  (the plugin ships no server code; the same source is vendored in `vendor/` for review). They drive Resolve through its local scripting API with your user permissions,
  and the first start downloads the pinned package from npm.
- **Hooks** (`plugin/hooks/`): Node scripts. *Guards* block shell commands that would rewrite source media and block grade writes made without looking
  at frames. *Session handoff* saves a local digest when a session ends and shows it in the next one (`plugin/docs/session-handoff.md`).
- **Network:** the upstream GitHub update check is disabled and handoffs stay on disk; the only network use is `npx` fetching the pinned package.
- Setup is manual and explicit; `node scripts/resolve-doctor.mjs` tells you what is missing.

## Status
`python3 scripts/validate_plugin.py`, `claude plugin validate plugin` and `claude plugin validate .` pass (the validator also enforces the directory limits on `plugin/`); the Node hooks pass 55 tests (`node --test plugin/hooks/test/*.mjs` files, guards parity-checked against the original Python);
three skills were baseline-tested with subagents (`plugin/docs/research/skill-baseline-tests.md`).
**Not yet run against a live Resolve**, and `claude plugin eval` has not been run.
**The `npx` launcher path has not been run end to end** (the first attempt was blocked in this environment), so verify `node scripts/launch-mcp.mjs setup` and a live connection on macOS and Windows before publishing.
