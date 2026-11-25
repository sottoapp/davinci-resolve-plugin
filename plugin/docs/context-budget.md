# Context budget log

Estimated tokens = characters / 4. Rule and thresholds: `plugin/docs/ARCHITECTURE.md` rule 5, enforced by `scripts/validate_plugin.py`.

## 2026-11-25 — trim of the 8 heaviest ported skills (issue #2)
| Skill | Body before (tokens) | Body after (tokens) |
|---|---|---|
| resolve-rough-cut | 2,814 | about 770 |
| resolve-edit | 2,310 | about 570 |
| resolve-tighten-recording | 2,051 | about 650 |
| resolve-conform | 2,001 | about 630 |
| resolve-delivery | 1,927 | about 600 |
| resolve-mcp | 1,930 | about 780 |
| resolve-color | 1,825 | about 820 |
| resolve-audio | 1,480 | about 490 |
| **Total** | **about 16,300** | **about 5,900** |

The detail did not disappear: it sits in `references/` and loads only when the skill points to it. Skill listings (all 49 names and descriptions) stay about 3,000 tokens. The heaviest body is now about 1,240 tokens (`event-delivery-compliance`); `BODY_ALLOW` in the validator is empty.
