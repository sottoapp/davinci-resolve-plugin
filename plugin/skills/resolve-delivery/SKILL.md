---
name: resolve-delivery
description: Use when preparing or validating render jobs, QCing a finished render against a spec, building a render manifest, expanding texted, textless or stems deliverables, or reporting provenance through the MCP, live or offline.
---

# Resolve Delivery / Deliverable QC
Bridges delivery *craft* to this repo's *tools*.

- **Craft / specs**: global `deliverables-knowledge`, `post-supervisor`, `quality-control` / `qc-domain` skills. Use for *what the spec should be*, not tool mechanics.
- **Live tool mechanics**: `upstream/docs/kernels/render-deliver-kernel.md` (`render` planning/validation boundary + Quick Export).
- **Offline deliverable QC**: `upstream/resolve-advanced/README.md` → `deliverable`, `media`, `provenance`.

Per-action detail: `references/actions.md`

## Two servers
- `davinci-resolve` (live): plan / validate / run renders in a **running** Resolve (`render`, `render_presets`).
- `davinci-resolve-advanced` (Node): QC a **finished render**, verify ingest, build manifests/provenance with **no Resolve open** (`deliverable`, `media`, `provenance`).

## Steps
1. Short path: `list_delivery_targets` → `prepare_delivery_job(target, target_dir)`. One definition emits both render settings and the `qc_spec`; do not hand-write a second spec.
2. Unsupported target fails with the available lists; it never silently substitutes. `check_availability: true` shows what this install supports.
3. Else lower-level: `probe_render_matrix` → `validate_render_settings` → `safe_set_render_settings` (dry-run capable) → `prepare_render_job` (adds a job, does **not** start it).
4. QC the finished file, not the timeline, with advanced `deliverable` actions.

## Safety limits
- A rejected format/codec pair is a hard error; it never queues a job in the previously set codec.
- Lifecycle helpers require **temp output dirs by default**; real delivery paths need explicit lower-level actions.
- `safe_quick_export` forces `EnableUpload=False`, needs `allow_render=True` to render.
- Pin base state with `prepare_render_job(from_preset=...)`: inherited Deliver-page state cannot be read, only pinned (issue #123). Verify the OUTPUT (ffprobe `codec_type=video`), not the job.
- `UseFullExtents`, `AddFrameHandles`, `DataBurnIn` are 21.0.4+ and silently ignored on older builds (issue #131). Run `resolve_control check_version_support` first.
- Loudness: cite a named standard from `render(action='list_loudness_standards')`, never invent numbers. Dialogue-gated standards emit no gradeable `integrated`; deliberate.
- Deliverable QC is report-only, **`gate: review`, never auto-pass-clear**; surface the per-field verdict to a human.
- QC tools **refuse rather than fabricate**; read a "refused" result, do not retry blind. Needs **ffmpeg + ffprobe on PATH**; call advanced `capabilities` for status.
- Render probes use *synthetic* fixtures only, never user source media. `media.rename_plan` refuses camera originals; do not override without explicit approval. Preserve the camera-original-to-delivery chain.

## When NOT to use
- Spec content questions: use the craft skills above.
- Image-sequence targets: `qc_spec: null` is expected, not a gap.
