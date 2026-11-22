# Claude plugin + MCP + skills authoring — digest

**Used by:** `skills/authoring-resolve-skills`, root layout, `hooks/`, marketplace.

- Only `plugin.json` lives in `.claude-plugin/`; `skills/ agents/ hooks/ .mcp.json` sit at the plugin root. Use `${CLAUDE_PLUGIN_ROOT}` (code) and `${CLAUDE_PLUGIN_DATA}` (persistent state).
- **Plugin-bundled MCP tools are named `mcp__plugin_<plugin>_<server>__<tool>`**; hook matchers, agent `tools`, `allowed-tools` must use that full name. (Found to break this repo's vendored hooks, which hard-code `mcp__davinci-resolve__…` — patched in `hooks/frame_verification_guard.py`.)
- MCP server = connection, schemas, validation. Skill = when/how/sequence/confirmation. Hooks = deterministic policy. Agents = isolation with minimal tools; plugin agents can't carry their own hooks/mcpServers/permissionMode.
- Descriptions trigger skills: what + when + synonyms + exclusions; combined `description`+`when_to_use` truncates at 1,536 chars. Body <500 lines; `references/` for conditional depth; `scripts/` for deterministic checks.
- Destructive operations: preview → confirm → mutate → re-read, with server-side enforcement plus a `PreToolUse` hook.
- Validate with `claude plugin validate .`; test with `claude plugin eval` (`tool_used`, `tool_order`, `regex`, `llm`, baseline). `skill-creator`'s `evals.json` is a separate format. Parallel trigger probes have given false results — isolate runs.
- Versioning: explicit `version` (bump per release; cached installs update only on change) **or** commit-based (omit it) — don't mix; `plugin.json` wins on conflict. `marketplace.json` entries need `name`+`source`; prefer `strict: true`.

## Sources
https://code.claude.com/docs/en/plugins/create · /plugins/components · /plugins-reference · /plugins/manifest-reference ·
/features-overview · /mcp · /agent-sdk/mcp · /skills · /hooks · /hooks-guide · /sub-agents ·
/plugins/troubleshooting · /plugins/cli-reference · /plugin-evals · /plugins/marketplace-reference ·
/plugins/host-marketplace · /plugins/loading · /plugins/dependencies · /plugin-dependencies ·
https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md ·
https://github.com/anthropics/skills/pull/1755
