---
name: resolve-color
description: Use when grading, matching shots, building looks, or applying LUTs, CDLs, DRX files or copied grades through the MCP, live in Resolve or offline on .drx or .drp files. Not for explaining the Color page (resolve-guide-color) or RCM setup (resolve-color-management).
---


# Resolve Color / Grade
Bridges color craft to this repo's tools; open the manual, don't duplicate it.

- **Craft / taste:** `upstream/docs/guides/color-decision-guide.md`. Global `colorist` / `colorist-assistant` skills: *how to see*, not tool mechanics.
- **Live tool mechanics:** `upstream/docs/kernels/color-grade-kernel.md` (`timeline_item_color`).
- **Offline grade compute:** `upstream/resolve-advanced/README.md`, the `drx` catalog.

Per-action detail: `references/actions.md`

## Two servers, one grade

| Job | Server | Tools |
|---|---|---|
| Drive a **running** Resolve | `davinci-resolve` (Python, live) | `timeline_item_color`, `graph`, `gallery_stills`, `color_group` |
| Compute a grade **offline**, or read/write `.drx`/`.drp` with **no Resolve open** | `davinci-resolve-advanced` (Node) | `drx`, `drp`, `project_db`, `provenance` |

The advanced server *computes* a grade and writes an apply-ready `.drx`; **applying** is the live server's job (`timeline_item_color.safe_apply_drx`). Node never drives Resolve.

## Build limits

The API changes per **patch** release. Before offering a gated surface read `resolve_control get_version` → `build.unavailable_on_this_build`. Empty does not mean everything exists; an ungated symbol returns `unknown`, so probe with `name in dir(obj)`, never bare `hasattr` (always `True` on Resolve objects). Offline `drx` / `project_db` are not version-gated: the fallback.

## The frame-first rule (non-negotiable, see AGENTS.md)

Before applying any grade, look, shot match, LUT, CDL, DRX, or copied grade to a real timeline, **inspect representative Resolve-rendered frames** (thumbnails, contact sheets, Gallery stills, marker frames, or a scratch-only visual report). Compare bypass/current/after at matched timecodes when the API allows; restore prior version/node state after any temporary bypass. Never grade from metadata, graph availability, or a style label alone unless the user explicitly asks for a blind/global pass. Preserve a recoverable grade version and report which frames informed the change. Extracted frames go to scratch/analysis locations only: **never touch source media**.

## Quality check

`verify_grade` asks whether Resolve applied what you asked; `media_analysis assess_grade` asks whether the result is any good, on a decoded frame of the **real** result. Read its `flags`; reject your own grade rather than ship the first look. **Display-referred only:** ACEScct / S-Log3 / LogC are *refused*, not converted. Convert first, then re-run.

The `drx` catalog is local, deterministic, and **refuses** to fabricate a match rather than emit a silent no-op. Extraction and apply are the caller's job.

## Gotchas

- **Value space.** `drx` `generate`/`merge` default to `space:'ui'` (PANEL units; saturation 0-100, neutral 50). Use `space:'drx'` only for raw floats. Decoded values are ground truth only for the calibrated set: check `valueFidelity` (`upstream/resolve-advanced/vendor/drx-parameters/CALIBRATION-STATUS.md`).
- **Hue-axis curves.** Naive `[0,1]` point lists are auto-canonicalized. A `warnings` array means the curve went raw and renders **FLAT**: surface it, do not ship.
- **Apply targeting.** `safe_apply_drx` defaults to video track 1 / item 0: **always pass `track_type`/`track_index`/`item_index`**, and grab a still/`.drx` backup first (it does not snapshot). `ApplyGradeFromDRX` *replaces* the graph; no append mode.
- **Relayout** (no UI API): see `references/actions.md`. Reset is required before re-apply.
- **Guards are load-bearing.** A "refused" error usually means wrong input space, log-encoded frames, or missing media: read it before retrying. The catalog needs `sharp`; call the advanced `capabilities` tool for status + install hints.
