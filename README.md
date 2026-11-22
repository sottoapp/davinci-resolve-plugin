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
mcp-server/       vendored upstream, verbatim (see UPSTREAM.md)
docs/             skill-library.md, research/ (sourced digests, Gemini video analyses)
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
Validated statically only (`python3 scripts/validate_plugin.py`; hooks unit-tested by hand).
**Not yet run against a live Resolve**, and `claude plugin validate`/`eval` have not been run.
