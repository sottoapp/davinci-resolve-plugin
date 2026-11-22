---
name: editing-principles
description: Core film and video editing craft translated into concrete DaVinci Resolve actions — Walter Murch's Rule of Six (emotion, story, rhythm, eye-trace, screen plane, spatial continuity) as a decision filter, why cuts work, cut types (straight, match, match-on-action, jump, cutaway, insert, J-cut, L-cut, smash), the 180-degree rule and coverage, taking the right take, pacing passes, and when to use transitions. Use whenever the user asks how to cut a scene, why an edit feels wrong, how to pace or structure a cut, which cut or transition to use, or wants an AI edit judged by editorial standards — in any genre — and as the craft lens before restructuring a timeline with resolve-edit.
---

# Editing principles in Resolve

Treat every cut as a storytelling decision, not a software operation. Sources: Murch's *In the Blink of an Eye*
(via a video analysed with Gemini and a deep-research synthesis; `docs/research/editing-craft.md`).

## The decision filter: Murch's Rule of Six
Ranked, with Murch's approximate weights. When criteria conflict, protect the higher ones; the first three are
bound together (84%).
1. **Emotion (51%)** — does the cut preserve the intended feeling? Never sacrifice it.
2. **Story (23%)** — does it advance or clarify the narrative?
3. **Rhythm (10%)** — does it land at the right moment (neither rushing nor dragging)?
4. **Eye-trace (7%)** — does the subject of the new shot sit where the audience was looking?
5. **Screen plane (5%)** — composition, screen direction, the 180° line.
6. **3D spatial continuity (4%)** — physical geography, prop and body positions.
Satisfying 1–3 makes viewers forgive flaws in 4–6; satisfying 4–6 never rescues a dead cut. Before a significant
edit ask: what must the audience understand? what should they feel? whose point of view? does this shot add
information, reaction, emphasis or contrast?

## Why cuts work
Cuts are jumps in space/time, like a blink punctuating a thought — place them where one thought ends or an
actor naturally blinks, not mechanically after each line (the "Dragnet" rhythm). Consecutive shots of the
same subject should differ meaningfully (≥ ~30° or a clear size change) or they read as a jump cut. Juxtaposition
creates meaning (Kuleshov).

## Which cut?
| Cut | Use | In Resolve |
|---|---|---|
| Straight | default for continuity | — |
| Match-on-action | hide an angle change inside movement | cut mid-action, trim frame by frame, play the whole move |
| Match cut | link shapes/colour/sound/idea | place frames adjacent, trim for correspondence |
| Jump cut | deliberate compression/informality | else cover with cutaway or change size (Inspector ▸ Transform ▸ Zoom punch-in) |
| Cutaway / insert | reaction, evidence, prop, cover a trim | **Place on Top** (F12) on V2, trim to purpose |
| **J-cut** | next audio leads picture | split audio/video (Linked Selection off), pull audio earlier |
| **L-cut** | previous audio continues over next picture | split edit, extend audio tail |
| Smash cut | shock/irony/tonal reversal | only when contrast is the point |
Transitions: straight cut by default; dissolve for time/memory/softness; fade for strong start/end; wipe or dip
only with a narrative reason. Don't stack transitions to cover weak structure; they need handles.

## Continuity and coverage
Respect the 180° line (consistent left/right), eyelines, screen direction, props, lighting. If you must cross:
neutral/front-on shot, a shot that crosses the axis, a cutaway, or a motivated break. Typical coverage:
establishing/master → two-shot → OTS → singles → reactions → inserts. **Don't cut to whoever is speaking by
reflex** — hold on the listener when the realization is the story.

## Take selection
Best performance and meaning beat sharpest/cleanest. Judge performance, clarity, timing, continuity, cutability
(handles), tone, point of view. Assemble a complete version, then compare alternates *in context*.

## Pacing — six passes
Story (cut what doesn't serve structure) → performance (protect reactions/hesitations) → rhythm (trim dead time,
keep meaningful pauses) → visual (vary size/angle/movement) → sound (dialogue/ambience/music tempo) → audience
(watch straight through, note where attention drops). Test versions with trim tools, judge the whole passage not
just the edit point. Pace ≠ more cuts: a long urgent shot can be fast.

## With this plugin
Mechanics: `resolve-guide-cut-edit`. Judge a built cut by its frames with the `cut-reviewer` agent. Project-specific
taste lives in `house-style`. `references/pitfalls.md` lists failure modes to scan for.
