# Session handoff

Lets one Claude session pass work to the next — a later session, another machine, or another person.

| Piece | File | Does |
|---|---|---|
| SessionEnd hook | `hooks/session-handoff.mjs end` | Builds a digest from the session transcript and saves it for the working directory |
| SessionStart hook | `hooks/session-handoff.mjs start` | Injects the latest handoff (as background notes, not instructions) into the new session |
| Core | `hooks/handoff-lib.mjs` | Digest builder, per-project storage, redaction, pruning |
| CLI | `scripts/handoff.mjs` | `show`, `note "<text>"`, `export <file>`, `path`, `clear` |
| Skill | `skills/resolve-session-handoff` | Tells Claude what to record at the end and how to resume safely |
| Tests | `hooks/test/handoff.test.mjs` | `node --test hooks/test/handoff.test.mjs` |

## What the digest contains
Session id, end time and reason · the assistant's last message · the last 5 user requests · the last 25 Resolve MCP calls
(`tool.action`) · files written or edited · any notes added with the CLI · a reminder to re-check live Resolve state.

## Behaviour and limits
- Stored per working directory under `${CLAUDE_PLUGIN_DATA}/handoffs/<hash>/` (fallback `~/.claude/plugins/data/davinci-resolve/`);
  `latest.md` plus the 10 newest dated copies. **Nothing is sent anywhere.**
- Injected at `startup`, `resume` and `clear`; skipped after `compact`, for the session that wrote it, and when older than 14 days.
  Injection is capped at 6,000 characters.
- Prompts and messages are quoted from the transcript, so they can contain whatever was typed. Obvious API keys and bearer tokens
  are redacted, but treat `show` output as sensitive before sharing it. Injected text is framed as notes, not instructions.
- The hooks are informational: any failure is swallowed and the session continues. (Contrast with the PreToolUse guards, which fail closed.)
- The digest is deterministic — no model summarizes. Curated notes (`note`) are what carry judgment.

## Typical use
```
# end of a session
node scripts/handoff.mjs note "Working cut is timeline 'Selects v3'; renders for v2 verified, v3 not yet rendered"
# next session in the same directory: the handoff appears automatically
# hand to someone else
node scripts/handoff.mjs export handoff.md
```
