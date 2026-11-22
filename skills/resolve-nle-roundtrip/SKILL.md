---
name: resolve-nle-roundtrip
description: Use when moving a timeline between Resolve and Premiere Pro, Final Cut Pro, Avid Media Composer or a DAW through XML, FCPXML, AAF, EDL or OTIO, or when an imported timeline loses effects, speed ramps, titles or audio.
---

# NLE roundtrip

Interchange formats carry **cuts and a limited set of effects**, never the whole edit. Decide what must survive, pick the
format that carries it, and bake the rest into media before export.

**Source caveat:** the format-fidelity facts come from the DaVinci Resolve 15 manual (Import and Conform chapters), the
FCP 13 guide and one practitioner article (Resolve 19.1.3 / Premiere 25.1). Newer Resolve versions may carry more. OTIO and
DAW details are unverified. Details and sources: `references/format-matrix.md`.

## Pick the format
| Source → Resolve | Use | Why |
|---|---|---|
| Premiere, FCP7 | **FCP7 XML** | multitrack, transforms (keyframed), speed, nests → compound clips, mixed frame rates |
| Final Cut Pro | **FCPXML** | adds FCPX color, compounds/multicam (as compounds) |
| Avid | **AAF** | audio transitions, variable speed, freeze frames, flip/flop; loses nests, text, color |
| Simple cuts-only | **EDL** | cuts, dissolves, linear speed only |
| Any, newer builds | OTIO | built in from Resolve 18.5; fidelity unverified — test first |

## Before exporting from the source NLE
Flatten to V1/remove empty tracks, flatten nests, **bake** speed ramps, effects, titles and After Effects comps into
self-contained media, one frame rate per sequence, media with valid timecode, and export a **flattened reference movie**
with burned-in or matching-start timecode alongside the file. Avid: dissolves only, avoid audio fades/generated sources,
use MXF/WAVE media. FCPXML: pick an older version if a tool rejects the file.

## Resolve import settings (set before importing)
- **Mixed frame rate format** (can't change after the Media Pool is populated): match FCP7 / FCPX sources, "Resolve" for
  Premiere or Media Composer, "None" for DPX sequences.
- **Automatically import source clips**: off to relink only to media already in the pool. **Ignore file extensions when
  matching**: on only when conforming to different media (offline DNx → camera originals).
- Match order is path, clip name, timecode (reel if enabled). Set Retime Process to suit the source (Optical Flow for Avid FluidMotion).

## Verify
Link the reference movie as an offline clip (Link Offline Video), compare in Offline mode or Difference overlay, then
check clip order, sync, sizing, speed, offline clips and reel conflicts; confirm duration, frame rate, audio channels, markers.
Resolve → other NLE: expect speed ramps, filters and adjustment layers to need rebuilding; for Premiere use FCP7 XML.

With this plugin: `resolve-conform` (relink, conform QC, grade tracing), `resolve-guide-project-media` (conform options),
`resolve-qc-gate`. Importing/exporting via the API: `ImportIntoTimeline` / `Export` (`resolve-api-reliability`).
