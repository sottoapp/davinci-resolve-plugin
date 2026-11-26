---
name: resolve-guide-cut-edit
description: Use when asked how to perform an edit on Resolve's Cut or Edit page, which edit or trim tool to use, why an edit misbehaved, or for keyboard shortcuts, including when the scripting API cannot do the requested edit.
---

# Resolve guide: Cut and Edit pages

Sources: Resolve 20 Reference Manual and Blackmagic's Beginner's/Editor's guides
(the DaVinci Resolve Context page (Notion) › Research: general > Resolve app guides). **Shortcuts are customizable and differ by page, OS
and preset** — confirm in *DaVinci Resolve ▸ Keyboard Customization*.

## Cut vs Edit
Same timeline, two views. **Cut** = speed: Source Tape, Sync Bin, Smart Indicator, upper
(overview) + lower (detail) timelines — selects, rough cuts, fast multicam. **Edit** =
precision: full track control, viewers, three-point edits, trims, retiming, transitions,
compound/adjustment/Fusion clips, nested timelines, keyframes. Rough in Cut, refine in Edit
(or the reverse) — switching never changes the project.

## Before every edit (viewer discipline)
Right viewer active → source In/Out intentional → playhead where you mean → correct video
**and** audio destination tracks → **Auto Select, Sync Lock, Linked Selection** set on purpose.
Most "Resolve did something weird" cases are one of these.

## Choosing the edit
| Goal | Edit | Default key |
|---|---|---|
| Add without losing anything | **Insert** (pushes later material) | F9 |
| Replace only the frames underneath | **Overwrite** | F10 |
| Swap a take, keep timing | **Replace** | F11 |
| Fill a marked gap exactly (retimes) | **Fit to Fill** | Shift-F11 |
| Layer above without disturbing base (B-roll, graphics) | **Place on Top** | F12 |
| Assemble quickly at the end | **Append at End** | Shift-F12 |
| Replace and let duration change | **Ripple Overwrite** | commonly Shift-F10 |
Three-point: any three of source In/Out, timeline In/Out; Resolve computes the fourth.
Four-point with unequal durations → Fit to Fill (speed change).

## Trimming
`T` trim mode, `W` dynamic trim (JKL trims; yellow playhead; press `W` to exit), `A` select.
**Ripple** changes duration; **Roll** moves the cut, duration fixed; **Slip** changes which
frames show inside a fixed clip; **Slide** moves a clip, neighbours absorb it. Select the exact
edge first and watch the two-up viewer. Resolve 20.2 separates Sync Lock from Auto Select and
auto-opens the Trim Editor during dynamic trim.

## Multicam, compounds, speed
- **Sync Bin (Cut)**: timecode-matched multiview for cutaways; **Multicam clip (Edit)**: more
  controllable angle switching. Without reliable timecode, sync first — never assume.
- **Compound clip** = shared container (edits inside affect every instance unless duplicated);
  **nested timeline** keeps a sub-edit; **Fusion clip** collapses layers for compositing;
  **adjustment clip** carries effects over everything beneath (dedicated, labelled track).
- **Speed**: Change Clip Speed, Retime Controls (Ctrl/Cmd-R), Retime Curve, Fit to Fill, freeze
  frame. Check audio pitch/sync after retimes. Optical Flow / Speed Warp (AI, Studio) for slow-mo;
  let heavy interpolation cache before judging.
- **Transitions** need handles (spare frames beyond In/Out); default transition Ctrl/Cmd-T.
- **Markers** say *where* (M, Shift-M modify, color + note + duration); **flags** label a *source clip*.

## What the scripting API cannot do (give UI steps instead)
Trim/ripple/slip/slide, razor split, move/reorder existing clips, selected-clip retrieval,
full inspector/keyframe control. Via MCP you can **build** timelines (`AppendToTimeline` with
`recordFrame`), set markers/metadata/many properties, or import interchange. For the rest, tell
the user the exact steps above. See `resolve-edit`, `resolve-rough-cut`, `resolve-api-reliability`.

`references/shortcuts-and-mistakes.md` has the shortcut table and the 15 common mistakes.
