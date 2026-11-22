---
name: resolve-delivery-specs
description: Translate a delivery target — YouTube/web, broadcast (EBU R128 / ATSC), DCP, ProRes/DNxHR master or archive — into exact Resolve render settings and a pass/fail spec, including loudness, codec, color tags, audio layout and file naming. Use when the user says "export for YouTube/broadcast/DCP/archive", asks what settings a deliverable needs, or wants to compare a render preset against a written spec. Complements resolve-delivery (queueing, QC execution); this skill supplies the spec knowledge.
---

# Delivery specs

A Resolve preset is a **starting configuration, not proof of compliance.** Never
infer a spec from the word "broadcast" or "master" — get the recipient's current
written specification, then use the table in `references/specs.md` only as a
sanity baseline and a source of questions to ask.

## Workflow

1. Identify the target; if a written spec exists, it overrides everything here.
2. Map it to a named delivery target: `render list_delivery_targets
   check_availability` → `resolve_delivery_target` → `prepare_delivery_job`
   (queues without starting; returns the QC spec that verifies the output).
   Platform names are aliases onto spec-descriptive ids.
3. Verify per job: timeline and range, resolution/aspect, frame rate, color space
   and tags, codec/profile/bit depth, audio layout and sample rate, captions,
   filename and destination, single-clip vs individual-clips.
4. Render a short representative test, then the final.
5. QC the **encoded file externally** (ffprobe/MediaInfo, loudness, visual) — see
   `resolve-qc-gate`. Block on any unresolved mismatch; don't "fix" silently.

## Frequent mistakes
Assuming the preset matches the client spec; wrong timeline/range/fps/version;
"individual clips" left on for a single master; audio or captions omitted because
the picture looked right; interlaced YouTube upload; −14 LUFS web mix sent to a
−23 LUFS broadcaster; DCP made with Rec.709 assumptions; calling a `.mov` an
"archive" without project, manifest, stems, LUTs and QC report.

Resolve exposes no bitrate key (only `VideoQuality`, codec-specific), so bitrate
compliance is checked on the output file, not asserted from settings.
