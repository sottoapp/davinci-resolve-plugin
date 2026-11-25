---
name: resolve-conform
description: Use when importing or relinking editorial, checking a conform against a reference, repairing retimed or reversed subclips, tracing grades across a re-conform, or QCing a conformed timeline through the MCP, live or offline on .drt or .drp files.
---

# Resolve Conform / Interchange
Bridges online-editing / finishing *craft* to this repo's *tools*.
Per-action detail: `references/actions.md`

- **Craft** — global `online-editor` skill (how a finishing editor thinks, not tool mechanics).
- **Live mechanics** — `upstream/docs/kernels/timeline-conform-interchange-kernel.md`.
- **Offline engine** — `upstream/resolve-advanced/README.md` → `conform`, `color_trace`, `offline_ref`, `editorial`, `drt`, `project_db`.

## Two servers
- Running conform: `davinci-resolve` (live) — `timeline`, `media_pool` (`safe_relink`, `safe_import_sequence`).
- No Resolve open (QC math, reverse-clip repair, lineage, grade tracing, `.drt`/`.drp`/DB edits): `davinci-resolve-advanced` — `conform`, `color_trace`, `offline_ref`, `editorial`, `drt`, `project_db`.

## Steps
1. Check support: `resolve_control get_version` → `build.unavailable_on_this_build` (or `check_version_support`) before offering a gated surface. Empty means nothing recorded is missing, not that all exists; probe with `name in dir(obj)`, never `hasattr`.
2. Inspect first: `probe_timeline_structure`, `detect_gaps_overlaps`, `source_range_report`, `conform_boundary_report`.
3. Interchange: `export_timeline_checked` / `import_timeline_checked`. `drt` is the only lossless round-trip. XML import via the API goes offline: use `import_timeline_checked` with media **sanitize**, then exact-path relink. Restart a running MCP server to pick up the sanitize fix.
4. Missing media: `detect_missing_media` → `build_relink_plan` (read-only) → execute only via `media_pool.safe_relink` with approved paths.
5. Grades across a re-conform: advanced `color_trace plan` (`sourceDrp`/`targetDrp` for Postgres/network/cloud projects), then live `timeline_item_color apply_trace_plan` with `dry_run: true`, then confirm_token, then apply. The timeline is archived first.
6. No Resolve: `timeline author_offline` writes `drt` / `otio` / `edl`. Say plainly a file was written, not imported. Read warnings back, especially `media_tc_origin_assumed`.

## Limits and refusals
- Report `live_item_not_found`, `ambiguous_live_item`, `below_min_confidence`; never guess them.
- `project_db` patches need the project CLOSED plus `iConfirmProjectClosed:true`; then fully QUIT and relaunch Resolve.
- AAF is an honest refuse in `editorial.parse_interchange`.
- Offline-ref clips have no scripting API; use `offline_ref`, not the live server.
- `.drt` for Resolve 19.1.3: set `DbPrjVer` 17 → 16. Default `drt`; `otio` when retimes exist.
- Optional deps (`better-sqlite3`, `sharp`/ffmpeg): call advanced `capabilities`.

## When NOT to use
- Finishing philosophy: use `online-editor`.
- Single look transfer: `resolve-color` `drx grade_transfer`.
- Cut-to-cut changes: `editorial.turnover_changelist` (`resolve-edit`).

## Source-media safety (AGENTS.md)
Relink plans are read-only until executed. Never relink, replace or create derivatives of source media without explicit approval. Preserve the camera-original-to-delivery chain.
