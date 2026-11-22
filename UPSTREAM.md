# Upstream

`mcp-server/` is a verbatim copy (no `.git`) of
https://github.com/samuelgursky/davinci-resolve-mcp (MIT, see `mcp-server/LICENSE`)
at commit `d7dcfc7eca0d0d131ac4a7433484724ec864e276` (package version 5.4.0), copied 2026-11-22.

**Rule:** don't edit `mcp-server/`. Plugin-side changes (skills, agents, hooks, manifests) live outside it,
so an upstream sync is a straight replace.

Plugin skills/agents/hooks were seeded from upstream's `.claude/skills`, `.claude/agents` and
`.agents/hooks` with these deliberate changes:
- doc paths rewritten to `mcp-server/...`;
- agent `tools:` use plugin-scoped MCP names (`mcp__plugin_davinci-resolve_<server>__…`);
- `hooks/frame_verification_guard.py` normalises plugin-scoped tool names (see `norm()`);
- upstream's dev-only `release-check` skill and drift/test hooks were not ported.
Upstream's own `mcp-server/.claude`, `.agents`, `.codex` trees are left untouched.

## Sync
```bash
git clone --depth 1 https://github.com/samuelgursky/davinci-resolve-mcp /tmp/upstream
rm -rf mcp-server && mkdir mcp-server && (cd /tmp/upstream && tar --exclude=.git -cf - .) | tar -xf - -C mcp-server
git -C /tmp/upstream rev-parse HEAD   # record above
diff -r mcp-server/.claude/skills skills   # port skill changes by hand
```
