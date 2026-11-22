# Skill eval — iteration 1 (guide + craft skills)

skill-creator loop: 22 cases (`evals/`), each run with and without the skill (44 text-answer runs, n=1 each), graded against
per-case assertions by grader subagents. Raw workspace and the interactive viewer are not committed.

**Headline:** 98.9% pass with the skills vs 76.4% without (+23 points); +6.4k tokens (+11%) and +2.7 s per answer.

| Case | With | Without | Δ |
|---|---|---|---|
| fairlight-noisy-dialogue-free | 1.00 | 0.20 | +0.80 |
| project-media-archive-handoff | 1.00 | 0.40 | +0.60 |
| review-organize-notes | 1.00 | 0.40 | +0.60 |
| principles-continuity-vs-emotion | 1.00 | 0.50 | +0.50 |
| deliver-multiple-outputs | 1.00 | 0.60 | +0.40 |
| fairlight-buses-loudness | 1.00 | 0.60 | +0.40 |
| deliver-partial-render, fusion-blank-comp, project-media-slow-playback, review-self-check, sound-hide-dialogue-edit, sound-music-ducking | 1.00 | 0.75 | +0.25 |
| color-fix-skin-only, interview-doc-structure | 1.00 | 0.80 | +0.20 |
| color-match-shots, cut-edit-fill-gap-exact, fusion-green-screen, interview-misleading-splice, principles-dialogue-scene-cutting, shortform-horizontal-to-vertical, shortform-pacing-hook | 1.00 | 1.00 | 0 |
| cut-edit-sync-and-lcut | 0.75 | 1.00 | −0.25 |

## What it tells us
- Value concentrates in Resolve-specific or source-backed facts (Fairlight settings, archive/proxy handoff, Murch's named weights, queue semantics).
- 7 cases don't discriminate (generic knowledge the model already has); their assertions are too permissive.
- The single with-skill miss (ripple vs roll) is a tangential assertion, not a skill defect.
- A grader caught an unverified claim (Fairlight Noise Reduction/DeHummer on Free) → caveats added to `resolve-guide-fairlight` and `resolve-edition-features`.

## Iteration-2 to do (assertions deliberately not edited, to keep iteration 1 comparable)
fill-gap: require only a source In · color-match: tie each scope to its purpose · sync-and-lcut: require Sync Lock · deliver-multiple-outputs:
require specific checks · add Free-vs-Studio accuracy assertions · add trigger/near-miss cases and cases for the MCP-driving skills.
