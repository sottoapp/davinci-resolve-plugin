---
name: resolve-color
description: Use when grading, matching shots, building looks, or applying LUTs, CDLs, DRX files or copied grades through the MCP, live in Resolve or offline on .drx or .drp files.
---

# Resolve Color / Grade
Bridges color *craft* to this repo's *tools*. This skill does not duplicate the
manuals — it tells you which one to open and the rules that cross both servers.

- **Craft / taste** — `upstream/docs/guides/color-decision-guide.md` (project-owned color
  guidance and API boundaries). The global `colorist` / `colorist-assistant`
  skills add colorist philosophy; use them for *how to see*, not tool mechanics.
- **Live tool mechanics** — `upstream/docs/kernels/color-grade-kernel.md` (the
  `timeline_item_color` boundary layer).
- **Offline grade compute** — `upstream/resolve-advanced/README.md` → the `drx` grading/QC
  catalog (the "Advanced (offline) server" section of the color kernel).

## Two servers, one grade

| Job | Server | Tools |
|---|---|---|
| Drive a **running** Resolve | `davinci-resolve` (Python, live) | `timeline_item_color`, `graph`, `gallery_stills`, `color_group` |
| Compute a grade **offline** from frames, or read/write `.drx`/`.drp` grades with **no Resolve open** | `davinci-resolve-advanced` (Node) | `drx`, `drp`, `project_db`, `provenance` |

**Division of labor:** the advanced server *computes* a grade and writes an
apply-ready `.drx`; **applying** it is the live server's job
(`timeline_item_color.safe_apply_drx`). Node never drives Resolve.

## Build limits

The scripting API changes per **patch** release. Before offering a gated surface read `resolve_control get_version` → `build.unavailable_on_this_build`; an empty list does not mean everything exists, and an ungated symbol returns `unknown`, so probe it with `name in dir(obj)`, never bare `hasattr` (always `True` on Resolve objects). Offline `drx` / `project_db` routes are not version-gated and are the fallback.

Per-action detail: `references/actions.md` (gated surfaces, `drx` grading/QC catalog, `media_analysis assess_grade`, relayout).

## The frame-first rule (non-negotiable — see AGENTS.md)

Before applying any grade, look, shot match, LUT, CDL, DRX, or copied grade to a
real timeline, **inspect representative Resolve-rendered frames** (thumbnails,
contact sheets, Gallery stills, marker frames, or a scratch-only visual report).
Compare bypass/current/after at matched timecodes when the API allows, and
restore the prior version/node state after any temporary bypass. Never grade
from metadata, graph availability, or a style label alone unless the user
explicitly asks for a blind/global pass. Preserve a recoverable grade version and
report which frames informed the change. Frames extracted for offline compute go
to scratch/analysis locations only — **never touch source media** (AGENTS.md).

## Grade quality check

`verify_grade` asks whether Resolve applied what you asked; `media_analysis assess_grade` asks whether the result is any good. It runs on a decoded frame of the **real** result, never a simulated transform. Read its `flags` and reject your own grade rather than shipping the first look. **Display-referred only:** ACEScct / S-Log3 / LogC are *refused*, not converted; convert first, then re-run.

The `drx` catalog is local and deterministic, and it **refuses** to fabricate a match rather than emit a silent no-op. Extraction and apply are the caller's job.

## Cross-server gotchas that bite

- **Grade value space.** `drx` `generate`/`merge` default to `space:'ui'`
  (Resolve PANEL units; saturation 0–100, neutral 50). Pass `space:'drx'` only
  for raw internal floats. Decoded values are ground truth only for the
  calibrated set — check the `valueFidelity` marker
  (`upstream/resolve-advanced/vendor/drx-parameters/CALIBRATION-STATUS.md`).
- **Hue-axis curves.** Naive `[0,1]` point lists are auto-canonicalized into the
  verified bezier cage. If a result carries a `warnings` array, the curve went
  through raw and will render **FLAT** — surface it, do not ship silently.
- **Apply targeting.** `safe_apply_drx` defaults to video track 1 / item 0 —
  **always pass `track_type`/`track_index`/`item_index` explicitly**, and grab a
  still/`.drx` backup first (it does not snapshot). `ApplyGradeFromDRX` *replaces*
  the graph — no append mode.
- **Relayout ("Cleanup Node Graph", no UI API).** Single clip, live: grab still → `drx(action="relayout")` → `graph.reset_all_grades` → `safe_apply_drx` with explicit indices (the reset is required). Whole project, offline: `project_db(action="relayout_node_graphs")`.
- **Guards are load-bearing.** A thrown "refused" error usually means wrong input
  space, log-encoded frames, or missing media — read it before retrying. The
  grading catalog needs `sharp`; call the advanced `capabilities` tool for live
  status + install hints.
