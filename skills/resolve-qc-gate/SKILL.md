---
name: resolve-qc-gate
description: Run a final exception-driven QC gate on a DaVinci Resolve timeline and its renders before delivery — offline/proxy status, frame rate and timecode, conform conflicts, color-management state, levels/gamut, audio loudness and true peak, caption integrity, render codec/tags, checksums — and produce a machine- and human-readable report. Use when the user asks "is this ready to deliver", "QC this", "pre-flight the render", "check the master", or before any final export or hand-off.
---

# Final QC gate

The goal is a report that stops at ambiguity — not a rubber stamp. Everything
the agent can *measure*, it measures; everything that needs judgment (aesthetics,
legal context, spec conflicts) it escalates with a timecode.

## Procedure

1. **Identity**: project, timeline, version, intended deliverable.
2. **Timeline checks**: media offline? proxy override on? frame rate, raster,
   duration, start timecode as intended? unresolved conform conflicts or
   unsupported effects (`resolve-conform`, `resolve-proxy-relink`)?
3. **Color**: pipeline matches the documented plan (`resolve-color-management`);
   no double transforms; levels/gamut/black-frame anomalies listed with timecodes.
4. **Audio**: channel layout, silence, phase, clipping, integrated loudness, true
   peak, stems sum to mix — measured on the **exported file**, not the session bus.
5. **Captions**: overlaps, encoding, reading speed, language tracks
   (`resolve-subtitles`).
6. **Render**: codec, container, bitrate, color tags, audio sample rate, metadata
   against the spec from `resolve-delivery-specs`; deliverable QC via the
   advanced server's `deliverable` tools where available.
7. **Integrity**: checksum and destination; keep the render manifest.
8. **Report**: pass / fail / needs-human for each item, with thumbnails or
   timecodes for every exception. Do not auto-fix; propose and wait.

Read-only by design: this skill inspects and reports. Anything that changes the
project goes back through the domain skill that owns it.
