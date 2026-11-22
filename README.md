# DaVinci Resolve plugin for Claude

A Claude Code plugin that drives DaVinci Resolve Studio through the vendored
[davinci-resolve-mcp](https://github.com/samuelgursky/davinci-resolve-mcp) server,
with a research-backed library of workflow skills, review agents and safety hooks.

```
.claude-plugin/   plugin.json, marketplace.json
.mcp.json         live (Python) + advanced/offline (Node) MCP servers
skills/           32 skills in three layers — index in docs/skill-library.md
                    resolve-guide-*  Resolve itself (manual-based app guides)
                    editing-*        editing craft mapped to Resolve actions
                    resolve-*, …     driving Resolve through the MCP server
agents/           cut-reviewer, grade-match-verifier, drift-guard-reviewer
hooks/            source-media guard + frame-evidence guard
bin/              resolve-doctor (install diagnosis; added to PATH)
mcp-server/       vendored upstream, verbatim (see UPSTREAM.md)
docs/             README index → ARCHITECTURE, skill-library, plugin-components,
                  skill-backlog, research/ (sourced digests, Gemini analyses, baseline tests)
scripts/          validate_plugin.py, gen_skill_library.py
evals/            trigger/behavior cases (to be written)
```

## Setup
1. Resolve Studio: **Preferences ▸ General ▸ External scripting using ▸ Local**.
2. One-time server setup: `node mcp-server/bin/davinci-resolve-mcp.mjs setup` (creates the
   Python venv; for the advanced server also `npm install --omit=dev --omit=optional --prefix mcp-server/resolve-advanced`).
3. Install the plugin: `claude --plugin-dir .` to try it, or add this repo as a marketplace.
4. Start Resolve with a project open, then ask Claude to start a session (`resolve-session`).

## Status
`python3 scripts/validate_plugin.py` and `claude plugin validate .` both pass; the guard hooks were unit-tested by hand;
three skills were baseline-tested with subagents (`docs/research/skill-baseline-tests.md`).
**Not yet run against a live Resolve**, and `claude plugin eval` has not been run.
