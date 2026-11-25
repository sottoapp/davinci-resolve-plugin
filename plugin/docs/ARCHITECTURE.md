# Architecture and conventions

## Layout (one purpose per directory)
```
.claude-plugin/marketplace.json   marketplace entry, source ./plugin
plugin/                           THE SHIPPED PLUGIN (≤512 files, each ≤256 KiB; enforced by the validator)
  .claude-plugin/plugin.json      manifest (the only place the version lives)
  .mcp.json                       MCP servers, started through scripts/launch-mcp.mjs (one pinned upstream npm version)
  skills/                         one directory per skill (flat — Claude Code does not nest)
  agents/  hooks/                 subagents; hooks.json + the Node guard scripts it calls + test/ (node --test)
  scripts/                        launch-mcp.mjs, resolve-doctor.mjs, handoff.mjs
  docs/                           skill-library.md, plugin-components.md, research/ (cited by skills)
plugin-advanced/                  OPTIONAL add-on plugin (offline MCP server only; its own copy of launch-mcp.mjs, kept identical by the validator)
vendor/davinci-resolve-mcp/       VENDORED upstream source, verbatim, NOT shipped — for review and sync (vendor/UPSTREAM.md)
evals/                            flat test cases, prefixed by skill area (see evals/README.md)
scripts/                          maintenance tooling: validate_plugin.py, gen_skill_library.py
```
Skills and agents cite upstream docs as `upstream/...`; the validator resolves them against `vendor/davinci-resolve-mcp/`.

## Skill naming = three layers (skills must be flat, so the prefix does the grouping)
| Prefix | Layer | Teaches |
|---|---|---|
| `resolve-guide-*` | Resolve itself | how the application works (manual-based), plus what the API can't do |
| `editing-*` | craft | editing principles mapped to Resolve actions |
| `resolve-*` (other) / `house-style` | driving it | how to operate Resolve through the MCP servers |
| `realestate-*`, `wedding-*`, `event-*` | vertical | how to edit one kind of video; each vertical = editing + colour/audio + delivery/compliance skills, research in `docs/research/<vertical>/`; new verticals follow as `<vertical>-*` |
| `authoring-resolve-skills` | meta | how to extend this plugin |

## Rules
1. Skill `description` = **"Use when…" triggers only**, third person, ≤500 chars (≤1024 hard). Never summarize the workflow in it
   (agents follow the summary instead of reading the skill). Enforced by `scripts/validate_plugin.py`.
2. SKILL.md is the entry point (aim <500 words); heavy tables go in `references/`; deterministic checks in `scripts/`.
3. Behavior-shaping (discipline) skills are baseline-tested without the skill first; if the control doesn't fail, don't add rules.
4. Facts come from `docs/research/` with sources; unverified claims stay out of skills or are labeled.
5. MCP tool names in agents/hooks use the plugin-scoped form `mcp__plugin_davinci-resolve_<server>__<tool>`.
6. Hooks are plain `node` commands (no inline env, no Python), PreToolUse guards are fail-closed (`onFailure: block`), and every guard change
   must pass `node --test hooks/test/guards.test.mjs`. No `bin/` (it blocks claude.ai/Cowork installs) and no tracked binaries.
7. `docs/skill-library.md` is generated: `python3 scripts/gen_skill_library.py`. Before committing:
   `python3 scripts/validate_plugin.py && node --test plugin/hooks/test/guards.test.mjs plugin/hooks/test/handoff.test.mjs && claude plugin validate plugin && claude plugin validate .` (run from the repo root).
5. **Context budget** (enforced by `scripts/validate_plugin.py`, estimated tokens = chars / 4): all skill listings (name + description) at most 4,500; a `SKILL.md` body warns above 1,000 and fails above 1,500 (the validator prints the five heaviest). Put per-action tables in `references/`. Skills still over 1,500 are listed in `BODY_ALLOW` in the validator, each with an issue link; remove them as they are trimmed.
