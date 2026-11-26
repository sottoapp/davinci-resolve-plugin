---
name: wedding-video-editing
description: Use when editing a wedding film in DaVinci Resolve (teaser, highlight, feature, full ceremony, speeches, same-day edit, or vertical social cut), syncing ceremony or toast audio to several cameras, building a multicam, or when a wedding edit feels mechanical, rushed or too long.
---

# Wedding video editing

Irreplaceable words and moments come first; style, music and effects serve the couple's story and never hide a technical or editorial weakness.
Sourced from practitioner guides, Blackmagic material and two Resolve tutorials (the DaVinci Resolve Context page (Notion) › Vertical: Wedding). Lengths and turnaround are conventions, not standards.

## Deliverables are different products
| Cut | Typical length | Rule |
|---|---|---|
| Teaser | 30–90 s | one strong image and line; usually delivered first |
| Highlight | 3–8 min | music-led, vows and speech lines carry the story |
| Feature | 10–20 min | longer vow and toast excerpts |
| Documentary / full day | 30–60 min | chronological, natural audio leads |
| Full ceremony / speeches | actual length | completeness over effects, restrained cutting |
| Same-day edit | 2–6 min | dedicated editor, hard footage cutoff, passes |
| Vertical | 15–60 s | rebuilt, not cropped |
"Feature" means different things to different studios: state runtimes as ranges in the brief.

## Workflow
1. **Pre-flight before opening Resolve**: verified card copies, two backups, camera log (frame rate, profile, audio rate), phone VFR transcoded, external audio checked for clipping or early stops. Never edit from cards.
2. **Structure**: bins by day phase, Camera # / Angle metadata, duplicate a template project and Power Bin per wedding (`resolve-templates-and-batching`).
3. **Sync**: timecode only if truly jam-synced, else waveform (needs matching scratch audio), else marker/in-out, else manual. Check the end of every long take for drift.
4. **Multicam** for ceremony, speeches, dances; keep the cleanest audio as the continuous bed and switch **Video Only** (details: `references/ceremony-speeches-multicam.md`).
5. **Selects by event**, tagged hero / story / reaction / texture / transition; log or transcribe vows, letters and toasts (`resolve-transcript-assembly`).
6. **Highlight arc**: hook, anticipation, commitment, release, payoff. Dialogue assembly first with no music, then picture.
7. **Pace**: music-first for montage, dialogue-first for vows; duck or drop music for speech and bring it back at a breath or sentence end; shots 2–5 s in details, longer holds in vows, shorter as the party builds.
8. **Restraint**: clean cuts, J/L cuts, short dissolves for time passing; slow motion only from high-frame-rate footage; speed ramps for a kiss, reveal or dance move (`resolve-speed-ramps-transitions`). Transitions, effects and titles: `wedding-effects-transitions-titles`.
9. **Verticals** are rebuilds of the highlight (`editing-short-form-vertical`); check on a phone.
10. **Colour and audio** (`wedding-color-audio-in-resolve`), then QC the exported file, not the timeline (`resolve-qc-gate`), then client care (`wedding-delivery-client-care`).

## Rules that protect the film
- Never put the only copy of ceremony audio on one clipped lav; keep a second recorder and camera scratch as backup.
- Do not make a documentary or ceremony edit feel like a highlight montage; keep pauses, laughter and applause.
- Do not use a vow line over footage that contradicts its context or change what the speaker meant.
- Same-day edit: block about six sections first, fill, refine the best, export and test on the venue screen before the cutoff.
- Large shoots: proxies before editorial, test one proxy-to-original relink first (`resolve-proxy-relink`).

## Mistakes that read as amateur
Cutting every shot to the beat · music over vows · pretty shots with no story job · transition packs and light-leak overuse · switching audio and video when only picture should change · unverified sync · grading before the story is stable ·
cropping 16:9 into vertical · no timestamped revision process · no archive of project, music licences and masters.
