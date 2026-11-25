# Resolve MCP tool maps

## Domains

| Task | Skill | Kernel | Any-MCP-client prompt |
|---|---|---|---|
| Grading, looks, shot match, LUT/CDL/DRX | `resolve-color` | `color-grade-kernel.md` | `/color_grade_workflow` |
| Cutting, trimming, ranges, variants, changelist | `resolve-edit` | `timeline-edit-kernel.md` | `/timeline_edit_workflow` |
| Conform, relink, finishing QC, grade tracing | `resolve-conform` | `timeline-conform-interchange-kernel.md` | `/conform_workflow` |
| Render, deliverable QC, media/provenance | `resolve-delivery` | `render-deliver-kernel.md` | `/delivery_workflow` |
| Fusion comps (titles, MG, VFX) | `resolve-fusion` | `fusion-composition-kernel.md` | `/fusion_workflow` |
| Audio / Fairlight (tracks, buses, loudness) | `resolve-audio` | `audio-fairlight-kernel.md` | `/audio_workflow` |
| Media pool ingest / organize / multicam | `resolve-media-pool` | `media-pool-ingest-kernel.md` | `/media_pool_workflow` |
| Reading/analyzing source media | `resolve-media-analysis` | `media-analysis-guide.md` | `/analyze_media` |

## Less-common domains (no dedicated skill — go straight to the kernel/tool)

These have real coverage but low enough traffic that they route through this
index rather than their own skill:

- **Project lifecycle** — create/export/import/archive/restore projects,
  databases, settings, presets: `project_manager` compound tool →
  `upstream/docs/kernels/project-lifecycle-kernel.md`. Offline DB read/patch: advanced
  `project_read` / `project_db` (project CLOSED + quit/relaunch).
- **Review / annotations** — timeline markers, review reports, annotation
  copy/move/scope: `timeline_markers` → `upstream/docs/kernels/review-annotation-kernel.md`.
  Offline audit/lineage: advanced `provenance`.
- **Extension authoring** — install/remove Fuse/DCTL/Lua-Python plugins:
  `script_plugin` → `upstream/docs/kernels/extension-authoring-kernel.md`,
  `upstream/docs/authoring/`.
- **Pipeline (DB-as-truth)** — YAML-authored canonical project DB, staged runs
  with gates + provenance + drift: advanced `pipeline` tool →
  `upstream/resolve-advanced/README.md`.

## Knowledge layer (what Resolve is and how to edit)

When the question is *how Resolve works* or *how to edit well* — not "drive it for me" — use these first; they also say
what the API cannot do and give the manual UI steps.

| Question | Skill |
|---|---|
| Projects, databases, media, proxies/cache, relink, archives, collaboration | `resolve-guide-project-media` |
| Cut/Edit pages, edit types, trims, multicam, retime, shortcuts | `resolve-guide-cut-edit` |
| Color page: scopes, primaries, curves, keys, nodes, matching | `resolve-guide-color` |
| Fusion compositing, keying, tracking, 3D | `resolve-guide-fusion` |
| Fairlight: tracks/buses, dialogue repair, mix, loudness, stems | `resolve-guide-fairlight` |
| Deliver page, render modes, queue | `resolve-guide-deliver` |
| Cut craft: Rule of Six, cut types, continuity, pacing | `editing-principles` |
| Interviews and documentary | `editing-interview-documentary` |
| Sound design and music editing | `editing-sound-music` |
| Vertical short-form | `editing-short-form-vertical` |
| Reviewing a cut and handling notes | `editing-review-feedback` |

## Plugin additions (cross-cutting and workflow skills)

| Need | Skill |
|---|---|
| Any mutating call, silent False, hangs, headless, "is X possible on this build" | `resolve-api-reliability` |
| RCM vs ACES, input transforms, double-transform checks | `resolve-color-management` |
| Subtitles, captions, SDH, SRT/VTT/TTML, burn-in | `resolve-subtitles` |
| Proxies, relink, originals-online gate | `resolve-proxy-relink` |
| Transcript/marker/notes-driven selects and story assembly | `resolve-transcript-assembly` |
| YouTube / broadcast / DCP / ProRes spec knowledge | `resolve-delivery-specs` |
| "Is this ready to deliver" final gate | `resolve-qc-gate` |
| Adding or fixing skills in this plugin | `authoring-resolve-skills` |

## Deeper references

- `upstream/AGENTS.md` — canonical brief + the `## Domain Routing` index (all platforms).
- `upstream/docs/SKILL.md` — operating reference for both servers.
- `upstream/docs/kernels/` — per-action depth. `upstream/resolve-advanced/README.md` — offline catalog.
