---
name: resolve-mcp
description: Use when starting any DaVinci Resolve task to find the right skill, choose between the live and offline servers, or when a task spans several Resolve domains.
---

# DaVinci Resolve MCP — Index

> Paths written `upstream/...` are in the upstream repository (https://github.com/samuelgursky/davinci-resolve-mcp, package 5.4.0), not shipped in this plugin; the `resolve_control` tool (`api_truth`) gives the same facts live.


Orientation for any Resolve MCP task. This is the **map, not the depth** — each
domain skill below carries its own routing and triggers on its own `description`.
Open the one that matches, or use this when a task spans several domains. This
skill does not auto-load the others; it points at them.

## Two servers — compute offline, apply live

- **Live** — `davinci-resolve` (Python): drives a *running* Resolve via the
  scripting API.
- **Advanced / offline** — `davinci-resolve-advanced` (Node): authors
  `.drp`/`.drt`/`.drx` files and patches the project DB with **no Resolve open**.

Rule of thumb: compute grades, QC, and conform math offline; apply the result
live. Node never drives Resolve.

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

## Read the build before you promise a capability

**The scripting API changes per PATCH release, not per major one.** "Resolve 21"
is not a fine enough label to reason from: `GetFairlightPresets` exists on 20.2.2
and not on 19.1.3, and three surfaces reported in 21.0.4 are absent from 21.0.2.
Guidance given without knowing the build is how an agent ends up insisting a
method is there when it is not (issue #132).

So, before describing what is possible:

1. `resolve_control get_version` → note **both** `version_string` (the Resolve
   build) and `mcp.version` (this server).
2. `resolve_control check_version_support` → every recorded gate this build does
   **not** clear. With a `symbol`, it answers for one method.
3. `resolve_control api_truth "<topic>"` → each fact now carries a
   `version_context` saying whether it was measured on an older, newer, or
   identical build. **An older measurement is a prior, not a finding.**

Two failure modes worth naming, because neither announces itself:

- **`unknown` is the common answer, and it means probe — not yes.** Only
  surfaces with recorded evidence are gated; most of the API has never been
  version-bisected. Absence from the unavailable list is not a promise that a
  method exists.
- **`mcp.version` is the version this process STARTED with.** A running server
  keeps executing it, so `git pull` does not refresh the ledger until restart —
  an `api_truth` miss may mean "stale server", not "no known issues".

When a build is too old for what was asked, say so and name the floor. Do not
offer the call and let it fail.

## Cross-cutting rules (always)

- **Source media is sacred** (AGENTS.md): never modify, transcode, convert, proxy,
  relink, or derive source media unless explicitly asked. Outputs go to sidecars,
  scratch, or the analysis project root.
- **Frame-first color**: inspect Resolve-rendered frames before applying any
  grade/look/LUT/CDL/DRX, and preserve a recoverable grade version.
- **Guards refuse rather than fabricate** on the advanced server — read a
  "refused" message before retrying (usually wrong value space, log-encoded
  frames, missing media, or a missing optional dep; call the advanced
  `capabilities` tool).

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
