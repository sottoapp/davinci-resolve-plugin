---
name: resolve-subtitles
description: Use when creating, timing, styling, reviewing or exporting subtitles and captions, SRT, WebVTT or TTML files, SDH or forced narrative, or burning in captions.
---

# Subtitles and captions

Automatic transcription is a draft, not a caption file. Finish from the **final
locked picture**, and keep a human in the loop for language and accessibility.

## Workflow

1. **Lock first.** Subtitle timing from a pre-lock timeline breaks after edits.
   Confirm timeline frame rate; DCP subtitle timing is frame-rate sensitive.
2. **Prepare audio.** Overlapping dialogue on several tracks is the common
   transcription failure — choose/clean the dialogue track first.
3. **Check capability** with `timeline` actions `transcription_capabilities` and
   `subtitle_generation_probe` (dry-run by default; `allow_generate=True` is what
   actually calls Resolve). Transcription is Studio-only, may need installed
   models, and can be asynchronous — poll rather than assume.
4. **One track per language and purpose** (forced, full, SDH/CC). Name tracks with
   language and territory — Resolve uses track names on export.
5. **Spot and QC**: reading speed, line length, no unintended overlaps, shot-change
   respect, speaker labels, music/sound cues for SDH, character encoding (accents).
6. **Style**: live `timeline_ai set_subtitle_preset` for animated presets (exports
   a recoverable DRT revision; use `dry_run:true` first). The basic
   `set_subtitle_style` does not edit animated Fusion presets.
   See `upstream/docs/guides/subtitle-track-editing.md`.
7. **Export** the exact format the recipient specifies; render a burned-in review
   copy even when the delivery is a sidecar, and verify the sidecar in an
   independent player/validator.

## Mistakes to prevent
Naming every track "Subtitle 1"; confusing subtitles with accessibility captions;
exporting before lock; burning in when the distributor wants selectable captions;
timing to transcript words instead of shots and reading speed; skipping a re-test
after frame-rate conversion. Linguistic/accessibility sign-off stays with a human.
