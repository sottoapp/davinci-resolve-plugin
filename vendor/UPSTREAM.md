# Upstream

`vendor/davinci-resolve-mcp/` is a verbatim copy (no `.git`) of
https://github.com/samuelgursky/davinci-resolve-mcp (MIT, see `vendor/davinci-resolve-mcp/LICENSE`)
at commit `d7dcfc7eca0d0d131ac4a7433484724ec864e276` (package version 5.4.0), copied 2026-11-22.

**Rule:** don't edit `vendor/davinci-resolve-mcp/`. It is **not shipped**: the plugin (`plugin/`) starts the same version from npm through `plugin/scripts/launch-mcp.mjs`, and the validator
fails if the launcher's pinned version differs from `vendor/davinci-resolve-mcp/package.json`. Plugin-side changes live in `plugin/`, so an upstream sync is a straight replace plus a pin bump.

Plugin skills/agents/hooks were seeded from upstream's `.claude/skills`, `.claude/agents` and
`.agents/hooks` with these deliberate changes:
- doc paths written `upstream/...` (resolved against `vendor/davinci-resolve-mcp/` by the validator; the upstream docs are not shipped);
- agent `tools:` use plugin-scoped MCP names (`mcp__plugin_davinci-resolve_<server>__…`);
- the two guard hooks were ported from Python to Node (`plugin/hooks/*.mjs`), parity-tested against the originals on 53 cases (`plugin/hooks/test/`), and normalise plugin-scoped tool names (see `norm()`); `plugin/.mcp.json` disables the upstream GitHub update check;
- upstream's dev-only `release-check` skill and drift/test hooks were not ported.
Upstream's own `vendor/davinci-resolve-mcp/.claude`, `.agents`, `.codex` trees are left untouched.

## Sync
```bash
git clone --depth 1 https://github.com/samuelgursky/davinci-resolve-mcp /tmp/upstream
rm -rf vendor/davinci-resolve-mcp && mkdir -p vendor/davinci-resolve-mcp && (cd /tmp/upstream && tar --exclude=.git -cf - .) | tar -xf - -C vendor/davinci-resolve-mcp
git -C /tmp/upstream rev-parse HEAD   # record above
diff -r vendor/davinci-resolve-mcp/.claude/skills plugin/skills   # port skill changes by hand
# then bump VERSION in plugin/scripts/launch-mcp.mjs to the new package version and re-test
```

## Deliberate divergence: trimmed skills (issue #2, 2026-11-25)
These ported skills were cut to 500 words or fewer; the per-action tables, parameter lists and worked examples moved into `plugin/skills/<name>/references/` (`actions.md`, or `tool-maps.md` for `resolve-mcp`). Some SKILL.md wording was condensed, so a straight upstream sync of these eight needs a manual merge: `resolve-rough-cut`, `resolve-edit`, `resolve-tighten-recording`, `resolve-conform`, `resolve-delivery`, `resolve-mcp`, `resolve-color`, `resolve-audio`. Check method used: every backticked action/tool name and every number from the pre-trim text (commit `a1ba277`) was confirmed present in the new SKILL.md or references; safety rules were confirmed present but not compared line by line.
