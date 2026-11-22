# Reliability matrix by API area

Source: deep-research digest (see `docs/research/resolve-scripting-api.md`).
Validate against the installed `DaVinciResolveScript.pyi` and `resolve_control api_truth`.

## Table of contents
1. Reliable · 2. Conditional · 3. Not dependable · 4. Version expectations · 5. Per-area gotchas

## 1. Generally reliable
Project/database management; media import and bin traversal; timeline creation and
`AppendToTimeline`; reading tracks/items; markers (use `customData` for identity),
flags, clip colors, metadata; render presets/settings/queue/progress; Fusion comp
import/export; applying DRX/LUT/CDL; color versions and groups.

## 2. Conditional (page, selection, UI state, entitlement, build)
Gallery grab/export; playhead/current-item operations; Fairlight insert and presets
(presets ≈ 20.2.2+, need a UI-saved preset); thumbnails; mutations during auto-backup;
Fusion UI/property manipulation (crash reports on 20 betas — pin builds); AI/transcription/
Magic Mask (need Studio + installed models).

## 3. Not dependable
Arbitrary cut/razor/split, trim/ripple, move/reorder existing clips, generic selected-clip
retrieval, complete inspector/effects automation, arbitrary adjustment layers, node
create/delete/reorder, full grade readback, Fairlight bus routing/automation/AI Audio Assistant.

## 4. Version expectations
| Range | Expect |
|---|---|
| 18.5 | project/media/timeline build, markers, render, Fusion basics, CDL/LUT/versions; no color groups |
| 18.6–19 | `recordFrame` timeline construction, preset import/export, stills/powergrades, color groups |
| 19.x–20.x | more graph/cache/take/media-replace; Fairlight still narrow; pin production builds |
| 20.2.2+ | Fairlight preset enumerate/apply reported |
| 21.x | read installed `.pyi` + changelog; 21.1 moved Python scripting to Studio (free-edition bridge is a 21.0.x path) |

## 5. Per-area gotchas
- **Indices**: node indices are 1-based (CDL since 16.2); render methods take job ids, not queue indices.
- **Markers**: frame spaces differ — source-clip markers are clip-relative, timeline markers timeline-relative, item markers item-relative; delete+recreate strips keywords on old builds.
- **Color**: `LUT` must be discovered (`RefreshLUTList`); `ApplyGradeFromDRX` replaces the graph (no append); treat DRX/stills as opaque payloads.
- **Project settings**: `SetProjectSetting` silently rejects read-only/edition/context-dependent keys; switch projects serially.
- **Render**: call `SetCurrentTimeline` explicitly with multiple timelines; query `GetRenderFormats/GetRenderCodecs` rather than guessing names.
