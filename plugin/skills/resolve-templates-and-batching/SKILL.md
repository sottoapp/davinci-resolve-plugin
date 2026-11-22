---
name: resolve-templates-and-batching
description: Use when setting up repeatable Resolve work: project templates, Power Bins, Smart Bins, title and lower-third templates, Fusion macros, PowerGrades, render presets, queue batching, or when choosing between compound, Fusion and adjustment clips.
---

# Templates and batching in Resolve

Repeat jobs (listings, weddings, events, social packages) should start from a tested master, not a blank project. The risk is carrying stale logos, grades and routing into the next
client — so version and test the template. Sourced from Blackmagic guides and working-editor reports (`docs/research/real-estate/repeatable-workflows.md`); Free/Studio notes are per that research — verify (`resolve-edition-features`).

## What to build
| Piece | How | Watch out |
|---|---|---|
| **Master project** | settings, colour management, bins, template timelines (16:9, 9:16, 1:1), audio buses/ducking, placeholders; Save As per job; export `.drp` | not a media archive; fonts/plug-ins/paths aren't included; don't change fps after editing starts |
| **Power Bins** | Media Pool ▸ Show Power Bins: logos, music, SFX, lower thirds | shared across projects in the library; don't travel with a `.drp`; moved files break links; become a dumping ground |
| **Smart Bins** | rules on metadata (keyword, rating, camera, fps, unused) | need one metadata vocabulary; they filter, they don't store — not Power Bins |
| **Titles / lower thirds** | Text+ or Fusion title; publish only the controls editors need; save as template / macro / `.drfx` | test long names, vertical copy, short durations; fonts missing on other machines; a title on an adjustment clip processes the footage |
| **PowerGrades** | Gallery PowerGrade album, named by use (`Interior_Daylight`) | not a LUT: depends on input space, exposure, node order; keep normalisation separate from the look |
| **Render presets** | Deliver ▸ save presets (and Quick Export), queue all variants | *Add to Render Queue* ≠ render; Single vs Individual clips; old output folders/suffixes persist; QC the files |
| **Keyboard mapping** | Keyboard Customization; export and version it for a team | context-sensitive; document changes |

## Choosing the container
**Adjustment clip** = one effect/grade over many clips (input is the flattened composite below). **Compound clip** = shared container (edits inside affect every instance). **Fusion clip** = several layers composited together, keeping separate inputs.
Independent overlay or titles → title/Fusion composition, not an adjustment clip.

## Batch order
Ingest and back up all jobs → assemblies → VO/clean audio → corrections/grades in batches → duplicate to vertical/square → update text and metadata → queue every export → review the rendered files independently.
Keyframes can persist outside a trimmed clip; Fusion media isn't preserved by aggressive Media Management; proxies/cache must be off for masters (`resolve-guide-deliver`). Real-estate batch practice: `realestate-video-editing`.
