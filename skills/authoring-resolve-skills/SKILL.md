---
name: authoring-resolve-skills
description: How to add or revise skills, agents and hooks in this DaVinci Resolve plugin — SKILL.md frontmatter and trigger-description writing, progressive disclosure with references/, scoped MCP tool names, safety hooks, eval cases, and versioning. Use when the user wants to create a new Resolve skill, fix a skill that does not trigger, extend the skill library, or package/release the plugin. Pairs with the skill-creator skill for the draft→test→iterate loop.
---

# Authoring skills for this plugin

Use `skill-creator` for the draft → test → review → iterate loop; this skill adds
what is specific to this repo. Rationale for each rule is in
`docs/research/claude-plugin-authoring.md`.

## Where things go
- `skills/<name>/SKILL.md` (+ `references/`, `scripts/`) — one skill per task family.
- `agents/` — isolated reviewers/verifiers; give read-only tools, never mutation tools.
- `hooks/hooks.json` — deterministic policy (source-media and frame-evidence guards).
- `mcp-server/` — **vendored upstream, verbatim.** Never edit it here; see `UPSTREAM.md`.
- Index of every skill: `docs/skill-library.md` (update it when you add one).

## Writing a skill
1. **Description does the triggering.** State what it does, the user phrasings and
   domain terms that should fire it, and the neighbours it must *not* fire for.
   Be a little pushy — skills under-trigger. Keep the key use case first (the
   listing truncates at ~1,536 chars).
2. **Body is the operating procedure** (<500 lines): preconditions → act → verify →
   report. Explain *why* a gate exists; avoid shouting MUSTs.
3. **Progressive disclosure**: heavy tables/specs go in `references/` with a note
   saying when to read them; deterministic checks go in `scripts/`.
4. **Route, don't duplicate**: point at `mcp-server/docs/kernels/*` and sibling skills.
5. **Read → preview → mutate → verify.** Prefer `dry_run`, and re-read state after.

## MCP tool names
Plugin servers are exposed as `mcp__plugin_davinci-resolve_<server>__<tool>`
(`<server>` = `davinci-resolve` or `davinci-resolve-advanced`). Use the full name in
agent `tools:` lists and hook matchers; a bare `mcp__davinci-resolve__x` will not
match. In prose, refer to tools by their short name (`timeline_item_color`).

## Test it
- `python scripts/validate_plugin.py` (frontmatter, size, link checks) and
  `claude plugin validate .` if the CLI is available.
- Add realistic should-trigger and near-miss should-not-trigger prompts under
  `evals/` (see `evals/README.md`); pair a result check with a process check
  (e.g. dry-run tool used before the mutating tool).
- Never mix `skill-creator`'s `evals.json` format with `claude plugin eval` cases.

## Release
Bump `version` in `.claude-plugin/plugin.json` (and the marketplace entry, same
value) — cached installs only update when the version changes. Sync upstream with
the steps in `UPSTREAM.md` and record the new commit.
