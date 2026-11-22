# Architecture and conventions

## Layout (one purpose per directory)
```
.claude-plugin/   plugin.json, marketplace.json          ← manifests only
.mcp.json         MCP server declarations
skills/           one directory per skill (flat — Claude Code does not nest)
agents/           subagent definitions
hooks/            hooks.json + the guard scripts it calls
bin/              executables added to PATH (resolve-doctor)
mcp-server/       VENDORED upstream, verbatim — never edit (see UPSTREAM.md)
scripts/          maintenance tooling (validate_plugin.py, gen_skill_library.py)
evals/            trigger/behavior cases
docs/             human docs: skill-library.md, plugin-components.md, research/
```

## Skill naming = three layers (skills must be flat, so the prefix does the grouping)
| Prefix | Layer | Teaches |
|---|---|---|
| `resolve-guide-*` | Resolve itself | how the application works (manual-based), plus what the API can't do |
| `editing-*` | craft | editing principles mapped to Resolve actions |
| `resolve-*` (other) / `house-style` | driving it | how to operate Resolve through the MCP servers |
| `authoring-resolve-skills` | meta | how to extend this plugin |

## Rules
1. Skill `description` = **"Use when…" triggers only**, third person, ≤500 chars (≤1024 hard). Never summarize the workflow in it
   (agents follow the summary instead of reading the skill). Enforced by `scripts/validate_plugin.py`.
2. SKILL.md is the entry point (aim <500 words); heavy tables go in `references/`; deterministic checks in `scripts/`.
3. Behavior-shaping (discipline) skills are baseline-tested without the skill first; if the control doesn't fail, don't add rules.
4. Facts come from `docs/research/` with sources; unverified claims stay out of skills or are labeled.
5. MCP tool names in agents/hooks use the plugin-scoped form `mcp__plugin_davinci-resolve_<server>__<tool>`.
6. `docs/skill-library.md` is generated: `python3 scripts/gen_skill_library.py`. Before committing:
   `python3 scripts/validate_plugin.py && claude plugin validate .`.
