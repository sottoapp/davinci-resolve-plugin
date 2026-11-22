---
name: resolve-guide-deliver
description: Use when asked how to export or render from Resolve, which render mode, preset or codec to choose, or why an export came out partial, the wrong version or low quality.
---

# Resolve guide: the Deliver page

Sources: Reference Manual and a Resolve 20 beginner tutorial (`docs/research/resolve-app-guides.md`).

## Workflow
1. Select the intended **timeline**. 2. Choose a **preset** or **Custom Export**. 3. Set filename and
destination. 4. **Single Clip** or **Individual Clips**. 5. Resolution, frame rate, codec/profile, audio,
data levels. 6. **Entire Timeline** or In/Out range. 7. Re-read timeline name, duration and output path.
8. **Add to Render Queue** (stores instructions; renders nothing). 9. Inspect the queued job.
10. **Render All / Start**.

## Render modes
- **Single Clip** — one continuous file: masters, review movies, social, completed programs.
- **Individual Clips** — one file per timeline clip, usually retaining source timecode: graded-media handoff,
  VFX/round trips, conforming elsewhere. In/Out snap to clip boundaries; enable unique filenames when clips share a source.

## Settings that bite
- Presets are a starting point — verify resolution, frame rate, audio routing, data levels and range.
- Quality: Automatic vs restrict to bitrate (Resolve exposes no bitrate key to the API).
- **Use proxy media** is off by default for output — leave it off for masters. **Use Render Cached Images**
  only if the cache codec is good enough for the deliverable.
- Hardware H.264/H.265 encode depends on edition, OS, GPU, codec, bit depth — fine for review/web; use the
  specified mezzanine (ProRes/DNxHR) for masters, not "whatever is fastest".
- Slow-motion clips: Inspector ▸ Video ▸ Retime and Scaling ▸ Retime Process ▸ Optical Flow (AI Speed Warp is Studio).
- A stale In/Out range renders only part of the program; check it every time.

## Pre-render checklist
Right timeline · range · mode · frame rate · codec/profile · audio layout and rate · captions · filename/dir
exists · proxy toggle · offline media · test a short range first · QC the encoded file after.

## With this plugin
`resolve-delivery-specs` (what the numbers should be) → `resolve-delivery` (`prepare_delivery_job`, validation,
queue) → `resolve-qc-gate` (verify). Index-based render calls are deprecated — use job ids; call
`SetCurrentTimeline` explicitly with multiple timelines (`resolve-api-reliability`).
