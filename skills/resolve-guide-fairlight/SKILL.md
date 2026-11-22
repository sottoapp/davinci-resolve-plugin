---
name: resolve-guide-fairlight
description: Use when asked how to clean up or mix audio in Resolve, which Fairlight tool fits a noise problem, how to set up buses and stems, or how to meter loudness.
---

# Resolve guide: Fairlight

Sources: Fairlight Audio Guide to DaVinci Resolve 20 and a Resolve 21 Fairlight lesson analysed with Gemini
(`docs/research/resolve-app-guides.md`). Which tools are Studio-only is called out; confirm on the user's edition.

## Mental model
- **Clip** = one audio event (clip gain, fades, local repair). **Track** = channel strip (fader, pan, EQ,
  dynamics, plug-ins, automation) for consistent treatment. **Bus** = sums tracks for group processing and
  stems. Work **corrective clip → consistent track → bus balance → final loudness**, in that order.
- Typical layout: DX (production), DX ADR, Foley, SFX, backgrounds/ambience, Music, VO → DX/MX/FX buses → Main.
  Keep Main for final control, not for rescuing bad balances. Formats: mono/stereo/multichannel as needed.

## Dialogue repair order
Edit for performance first (don't hide bad edits behind plug-ins) → remove clicks/pops/noises → fill gaps with
**room tone** and crossfade → high-pass/corrective EQ → hum → plosives/sibilance → noise reduction (conservative)
→ dynamics/leveling → match adjacent takes → add ambience/reverb *after* dry dialogue is stable → automate
against music/FX → check the whole program for intelligibility. Never use aggressive NR instead of editing/room
tone; noise gates hide only quiet noise between words.
Tool-by-tool settings and cautions (from the video lesson): `references/dialogue-repair.md`.

## Mixing workflow
Prepare (name/colour/route) → edit → repair → balance dialogue first → pan per delivery format → EQ/dynamics at
the right scope → depth (ambience, Foley, reverb) → automate → **stem check** (solo each bus) → meter → deliver and
QC the exported files. Use clip gain for permanent local fixes, automation for time-based moves; make sure they
aren't fighting each other.

## Loudness
Meter integrated, short-term, momentary, loudness range and true peak — not just peaks. Set the standard and
target from the delivery spec (no universal −14 LUFS); measure the **whole program** after the mix, reset the
meter, play from the start. → `resolve-delivery-specs`, `resolve-qc-gate`.

## ADR and stems
ADR: dedicated track + mic input → cues (character/scene/take/text) → pre-roll/beeps/streamers → several takes →
choose, match timing/tone/perspective/ambience → crossfade in → keep alternates until approval.
Stems: dedicated buses (Dialogue, Music, Effects/Foley, Full mix, M&E) → verify routing and channel order →
identical start/duration/frame rate → export with the spec'd sample rate/bit depth/naming → re-QC externally.

## With this plugin
The scripting API's Fairlight surface is narrow: preset enumerate/apply (≈20.2.2+, needs a UI-saved preset) and
`InsertAudioToCurrentTrackAtPlayhead`; **no mixer, bus routing, automation or plug-in graph** — give the user these
UI steps, or use the offline `audio_plan`/`fairlight` tools in the advanced server (`resolve-audio`). AI Audio
Assistant is not scriptable. Verify every audio mutation by reading the timeline back (`resolve-api-reliability`).
