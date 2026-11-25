---
name: resolve-audio
description: Use when setting audio properties, syncing audio, isolating voice, generating subtitles from audio, planning Fairlight tracks and buses, or checking loudness and routing through the MCP, live or offline.
---

# Resolve Audio / Fairlight
Thin router; depth stays in the kernel. Per-action detail: `references/actions.md`

- **Live tool mechanics** — `upstream/docs/kernels/audio-fairlight-kernel.md` (the
  `timeline` audio/Fairlight boundary).
- **Offline planning + bus routing** — `upstream/resolve-advanced/README.md` →
  `audio_plan`, `fairlight`, `audio`.

## Steps

1. "Make this sound balanced" (not "route these buses"): start with
   `media_analysis mix_plan` (Python server, no Resolve needed). `dry_run` defaults
   to true: show gains and window count first. It measures the premix.
2. Plan tracks/buses offline (`davinci-resolve-advanced`: `audio_plan`, `fairlight`,
   `audio`); apply on a running timeline via `davinci-resolve` `timeline` tools.
3. Loudness standards: `render(action='list_loudness_standards')`; hand the emitted
   `loudness_target.target` to advanced `loudness_qc`.

## Limits and refusals

- Flags (`loudness_off_target`, `true_peak_over`, `clipped`) are never
  auto-corrected — report them, do not paper over them.
- `ott_dialogue_gated` deliberately does not trim; dialogue-gated standards assert
  true peak only.
- Subtitle effects: unmapped or connected/animated controls are refused. Do not
  route routine effects to Project.db. Keep Resolve open.
- Fairlight bus routing has **no scripting API**; DB path needs `better-sqlite3`
  and project CLOSED + quit/relaunch. Automation curves and plugin graphs are not
  exposed.
- `audio` ops need ffmpeg on PATH (GPL, not bundled).
- `plan_silence_ripple`: omit `threshold_db` to self-calibrate per item. If trough
  and peak are not separated, the item is **kept whole** with the reason surfaced.
  An explicit `threshold_db` is honoured untouched.
- Whole-mix preset workaround (`GetFairlightPresets` +
  `ApplyFairlightPresetToCurrentTimeline`) is the only write path and needs
  **Resolve 20.2.2+** (absent on 19.1.3). Check with
  `resolve_control check_version_support` first; on older builds say the build is
  too old.
- AI Audio Assistant is not scriptable on any build (issue #128).
- Timeline audio `SetProperty` can return false for some generated item types.

## When NOT to use

Never modify/transcode/derive source media (AGENTS.md) — offline `audio` ops write
NEW files to scratch, never over source.
