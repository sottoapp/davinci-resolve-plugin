# Titles, effects and graphics skills — RED/GREEN tests

Date: 2026-11-22. Same method and caveats as `docs/research/wedding/skill-tests.md`: three eval cases (`evals/wedding-effects-*`, `evals/event-graphics-*`, `evals/titles-*`), one run each, with and without the skill, graded by the author against the assertions, not by blind graders.

| Case | Skill | Without | With | What the skill added |
|---|---|---|---|---|
| wedding-effects-over-effected | wedding-effects-transitions-titles | 4/5 | 5/5 | the control already pushed back on effects on every cut, shake on vows and heavy grain, and flagged the font licence; it let the script font stand for the date and did not flag the Studio-only effects. With-skill limited the script to names and sent subtitles to a subtitle track. |
| event-graphics-lower-third-template | event-graphics-titles-transitions | 3/5 | 5/5 | the control built Fusion macros with published controls and a separate vertical variant but had no first-ID versus repeat-ID lower thirds and did not mention approved sponsor artwork and clear space. |
| titles-text-plus-per-line | resolve-titles-and-lower-thirds | 2/5 | 5/5 | the control said per-line sizing "isn't possible" and used two Text+ nodes, never mentioned Character Level Styling, did not describe the MCP title actions or UI-only styling, and did not suggest verifying or caching. With-skill named `bulk_set_title_text`, `get_title_text` and `insert_fusion_title` and said the Resolve MCP was not reachable in that session. |

Reading: biggest uplift is on Resolve-specific mechanics (Text+ styling, MCP actions) and on obligations the generic answer omits (sponsor artwork). The MCP actions in the skill were read from `mcp-server/src/server.py` but have not been run against a live Resolve. No skill text was changed.
