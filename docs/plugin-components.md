# What a Claude plugin can contain — and what this plugin uses

Researched by a subagent against the official Claude Code docs (code.claude.com/docs/en: plugins overview,
manifest-reference, components, dependencies, sub-agents), then checked locally with `claude plugin validate .`
(passes, Claude Code 2.1.330). Pages **not** fetched: channels, workflows, plugin-evals, output-styles — those rows are
marked *unverified*.

| Component | Lives in | Used here? | Why / why not |
|---|---|---|---|
| **Skills** | `skills/<name>/SKILL.md` | ✅ 32 | the core of this plugin |
| **MCP servers** | `.mcp.json` | ✅ 2 | live (Python) + advanced/offline (Node) Resolve servers |
| **Subagents** | `agents/*.md` | ✅ 3 | cut/grade/drift reviewers. Plugin agents **cannot** carry `hooks`, `mcpServers` or `permissionMode` — those stay at plugin level |
| **Hooks** | `hooks/hooks.json` | ✅ | source-media and frame-evidence guards; match plugin-scoped tool names `mcp__plugin_<plugin>_<server>__<tool>` |
| **Executables** | `bin/` (chmod +x, added to Bash PATH) | ✅ `resolve-doctor` | setup diagnosis; claude.ai/Cowork will not install a plugin with a top-level `bin/` |
| **Slash commands** | `commands/*.md` | ❌ | legacy form; every skill is already `/davinci-resolve:<skill>` |
| **Output styles** | `output-styles/*.md` | ❌ (maybe later) | e.g. a terse "edit log" style; marginal, page unfetched |
| **Themes** | `themes/*.json` (`experimental`) | ❌ | affect Claude Code's UI, not Resolve's |
| **Monitors** | `monitors/monitors.json` (`experimental`) | ❌ (candidate) | could watch a render folder/log and announce "render finished"; experimental, interactive sessions only |
| **LSP servers** | `.lsp.json` | ❌ | no language server relevant here |
| **Channels / Workflows / Evals** | manifest keys | ❌ *unverified* | workflows could batch renders/conforms with several agents; evals = `claude plugin eval` cases (we have `evals/` stubs) |
| **userConfig** | `plugin.json` | ❌ (candidate) | ask once for the Resolve scripting path (`directory` type) → `${user_config.KEY}`; not added because an empty value could override the server's own auto-detection and there is no live Resolve to test against |
| **dependencies / engines / network.hosts** | `plugin.json` | ❌ | `claude plugin validate` advises declaring `network.hosts` (the server checks GitHub for updates) and a square 512–2048 px `icon.png`; both are owner decisions |
| **Statusline** | — | n/a | not a plugin component; a user/project setting |

Useful facts: `${CLAUDE_PLUGIN_ROOT}` changes on update (no state there); `${CLAUDE_PLUGIN_DATA}` persists; root `CLAUDE.md`
is not loaded by plugins (put guidance in a skill); `claude-`/`anthropic-` name prefixes are reserved; unknown manifest
keys inside strict objects fail validation.
