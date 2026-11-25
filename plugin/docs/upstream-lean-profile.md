# Upstream request: lean tool profile for the live server

Status: not filed (this repository's tooling cannot post to other repositories). The repository owner can file it at https://github.com/samuelgursky/davinci-resolve-mcp/issues using the text below. Tracking issue: sottoapp/davinci-resolve-plugin#8.

## What was checked (2026-11-25, upstream 5.4.0)
- `vendor/davinci-resolve-mcp/src/server.py` registers 49 tools. The environment variables it reads are `DRP_MEDIA_TEMPLATE_DIR`, `PATH`, `PYTHONHOME` and `RESOLVE_MCP_RESULT_ENVELOPE`; none selects a subset of tools. No tool-profile, allow-list or "compact" setting was found in `server.py`, `README.md` or `docs/`.
- Tool docstrings plus signatures total about 123k characters, about 31k tokens if every schema is loaded. Largest: `timeline` (about 20k chars, about 5k tokens), `resolve_control` (about 11k), `media_analysis` (about 10k), `media_pool` (about 8k), `timeline_item_color` (about 7k), `fusion_comp` (about 6k), `render` (about 6k), `timeline_frame` (about 5k).
- Claude Code defers MCP tool schemas until a tool is used (as understood by this project; verify on your version), so the cost lands per tool, but one `timeline` call still pays about 5k tokens.

## Draft issue text
**Title:** Optional lean tool profile / shorter tool descriptions

Agents pay for each tool's description when its schema loads. The `timeline` tool's description alone is about 20,000 characters, and the 49 tools total about 123,000 characters. Could the server offer one or both of:
1. an environment variable or flag to expose a subset of tools (for example `RESOLVE_MCP_TOOLS=timeline,media_pool,render`), and
2. a short default description per tool with the long per-action detail returned on demand (for example from `resolve_control(action='help', tool=...)` or from the existing kernel docs).
Happy to test a branch. Measurements and method: chars of docstring plus signature per `@mcp.tool` function in `src/server.py` at 5.4.0.

## Until it is available
Skills should prefer the narrowest tool for a task and avoid loading `timeline` when a smaller tool will do. No setting is applied in `plugin/.mcp.json` because none exists upstream.
