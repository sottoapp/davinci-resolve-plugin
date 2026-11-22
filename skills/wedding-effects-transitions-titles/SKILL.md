---
name: wedding-effects-transitions-titles
description: Use when choosing or building transitions, effects, titles or typography for a wedding film in DaVinci Resolve: dissolves and J/L cuts, whip or light-leak transitions, grain, glow or halation, slow motion and speed ramps, couple-name and chapter cards, speech lower thirds, vow subtitles, credits, or when a wedding edit looks over-effected or dated.
---

# Wedding effects, transitions and titles

The film should feel edited, not effected: viewers remember the couple, voices and reactions, not the transition pack. The effect budget is small; spend it on structure.
Sources: a deep research run (consensus of wedding-editing guidance, not a survey), Blackmagic training and three tutorials (`docs/research/titles-effects/`). Story and audio come first (`wedding-video-editing`); general text mechanics: `resolve-titles-and-lower-thirds`.

## Transitions and effects
| Use | Do | Avoid |
|---|---|---|
| Straight cut | default; on movement, eyeline, accent, reaction | a transition to hide a weak edit |
| J/L cut | vows, letters, speeches, room tone; Linked Selection off, Trim Edit, short crossfades | cutting mid-word |
| Dissolve | sparingly for time passing or a gentle change | between every shot |
| Dip to colour or fade | section ends, a pause before vows | covering mismatched shots |
| Whip, match, object wipe | only when the footage already moves that way; match direction, speed and blur | whip between static shots |
| Light leak | occasional, low-opacity overlay on a higher track, Screen or Add | on faces, on every cut |
| Grain, glow, halation | subtle and consistent over a finished section (Adjustment Clip), after the grade; Film Grain, Halation and Film Look Creator are Studio | halos on dresses and windows, grain hiding bad exposure |
| Slow motion, speed ramp | high-frame-rate footage for a kiss, veil, confetti, dance move (`resolve-speed-ramps-transitions`) | ramping every clip |
| Freeze frame, camera shake | almost never in the main film | on vows, portraits, speeches |
Stabilise only as much as needed; check faces and straight lines. Dissolves and wipes need clip handles. Details and recipes: `references/recipes-and-typography.md`.

## Titles and typography
1. **Opening**: names over a calm shot, date subordinate, about 3–6 s. **Chapter cards** (1–3 s) only if the structure needs them; a short highlight may need only an opener and end card.
2. **Speech lower thirds**: name larger than role, away from faces and microphones, no animation during the key line.
3. **Vow subtitles**: when audio is poor, for social viewing or accessibility; high contrast, two lines, clear of hands and rings, accurate; use a subtitle track (`resolve-subtitles`).
4. **End credits**: couple, venue, family, music licensing, filmmaker; long enough to read.
5. **Type**: one display serif or restrained script for names, one readable family for dates, roles and credits. Echo the couple's stationery or venue. Keep font licences with the project; "free download" is not commercial use.
6. **Motion**: fade, small move, mask reveal. No typewriter or elastic bounce, no glow plus outline.

## Templates and cost
Wedding Power Bin: opening title, couple name, date and location, chapter card, speech lower third, subtitle style, end card, grain and vignette adjustment clips; expose only name, date, role, colour, animation strength; test in a new project (`resolve-templates-and-batching`).
Cheap: cuts, dissolves, static Text+. Expensive: motion blur, optical flow, Speed Warp, heavy Fusion, grain and halation at high resolution; use Smart or User render cache and one adjustment clip, not per-shot copies.

## Studio-only helpers (not scriptable)
One tutorial shows Studio tools for weddings: AI Audio Assistant, AI Music Editor (fit a track to length), Cut-page vertical viewer, Multicam SmartSwitch. AI Voice Convert can fix a flubbed word but uses a person's voice: only with the speaker's and couple's consent, never to put words in someone's mouth (`wedding-delivery-client-care`). Treat all as assistive starting points.

## Mistakes
Effects before the story and audio are locked · one title style per section · titles on faces or rings · unreadable script for dates · over-animated type · unlicensed fonts, music or overlays · whip or leak without matched motion · stacked grain, halation, glow and LUT unchecked · re-rendering a long Fusion title instead of caching.
