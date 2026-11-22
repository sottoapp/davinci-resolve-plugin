# Wedding video analyses (Gemini via the `watch` skill)

Gemini watched each video and answered a fixed question that began by asking it to prove which software was used. Treat as secondary evidence: timestamps are Gemini's, and every number
(HDR 1000 working luminance, normalise to −2.0 dBFS, EQ bands at 185/453/948/2260 Hz, compressor 2.5:1, gate −35 dB) is **one instructor's example value for their footage or voice**, not a recommendation.
Statements about Free vs Studio that the presenter did not make are Gemini's inference and conflict across these reports; `resolve-edition-features` is the arbiter.

| File | Video | Software | Feeds |
|---|---|---|---|
| wedding_features.md | 5 DaVinci Resolve Features I Actually Use Editing Weddings — https://www.youtube.com/watch?v=-Oh60O0fsIE | Resolve Studio 20 | `wedding-video-editing`, `wedding-color-audio-in-resolve` |
| skintones.md | 5 Pro Tips to MASTER Skin Tones in DaVinci Resolve — https://www.youtube.com/watch?v=piHz3Yd9s3I | Resolve Studio 19 | `wedding-color-audio-in-resolve` |
| fairlight_clean.md | How I Get PERFECT AUDIO in DaVinci Resolve (Fairlight) — https://www.youtube.com/watch?v=r00ZfXkUA2Y | Resolve Studio 18.6, a single-voice talking-head chain, not wedding footage | `wedding-color-audio-in-resolve` (illustration of a chain and its over-processing warnings only) |

Multicam analyses used by both verticals live in [../../event/video-analyses/](../../event/video-analyses/README.md).

## What the videos add to the deep research

- Wedding feature video: custom colour management (turning automatic off, camera input space, Rec.709 output), compound clip converted to multicam, **Transcribe Audio** (Studio) to find vow/toast lines
  (the presenter also exports the text to ChatGPT for candidate quotes, then searches them back in Resolve, and says the AI "is not going to edit my wedding film"), clip colours per story phase, **Match Frame** to fetch the
  source audio under B-roll. This is one editor's workflow.
- Skin tones: Vectorscope **Display Qualifier Focus** and **Show Skin Tone Indicator**; HSL Qualifier on a serial node with Matte Finesse cleanup; **Magic Mask (Studio)** with bidirectional tracking and the warning that it can grab hands;
  Colour Slicer, Hue vs Hue/Sat and Color Warper as alternates; do not fight the original light. Note: the presenter uses a serial node, not parallel nodes, for the skin correction.
- Fairlight video: order EQ → FX → Dynamics, high-pass about 90 Hz, restrained notch cuts, mild compression, gate warning, de-esser, music lowered and de-presenced. Warnings: over-cutting EQ, over-compressing, over-gating, clipping make-up gain.

## Coverage gaps (do not hide these)

Only three wedding-specific or wedding-adjacent videos were analysed, and none shows an actual reception or ceremony grade or a wedding speech mix. Colour and audio skill content therefore rests mainly on the deep research (secondary
sources) plus these tutorials, and has not been tested on real wedding footage. A Premiere Pro skin-tone video surfaced in search and was discarded.
