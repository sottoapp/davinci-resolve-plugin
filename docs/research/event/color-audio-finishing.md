# Event colour, audio and finishing in Resolve — research digest

Date: 2026-11-22. Source: one `deep` You.com run (24 cited sources: Blackmagic training, LED-wall and projector guidance, Resolve proxy and subtitle documentation, loudness standards pages). Free vs Studio statements are from the report
and some conflict across versions (the Deflicker availability note says "verify the installed version"); check `resolve-edition-features`.

## Ingest, sync, proxies

Back up cards, mixer files, lavs and slide exports. Bins by session, camera, audio, graphics; camera/angle metadata before multicams. Timecode if jam-synced, else scratch audio and Angle Sync: Sound. Keep mixer feed, lavs and room mics as separate tracks; verify
multicam channel retention before burying multitrack audio; practical: cut video multicam, mix external audio separately. Keep an edit timeline and a finishing timeline; do not flatten the only multicam.
Long sessions: Generate Proxy Media (half/quarter ProRes Proxy/LT or DNxHR LB/SQ), Playback > Proxy Handling > Prefer Proxies while cutting; final render returns to originals unless Use proxy media is enabled. Timeline Proxy Mode for quick reduction, Render Cache for
heavy grades/NR/Fusion/titles. Proxy media is portable; optimized media and cache are Resolve-managed. Split very long events by session or day with identical frame rate, sample rate and timecode conventions. Check sync at start, middle and end.
Mistakes: mixed frame rates without a plan, syncing only at the head of a four-hour take, camera scratch as final mix, flattening before deciding per-angle grades, accidentally rendering with proxies.

## Colour management and matching

Baseline: DaVinci YRGB Color Managed, timeline DaVinci Wide Gamut/Intermediate, output Rec.709 Gamma 2.4 for SDR (or the platform spec); exact Input Color Space per camera. Manual alternative: input CST, grade nodes, output CST. Tone mapping and gamut/saturation compression for aggressive
stage colours. Never apply both a technical LUT and an equivalent project transform. Match order: exposure/highlights, neutral balance (Parade), contrast and black level, saturation/hue (vectorscope, stills), skin refinement (Hue vs Hue/Sat, Color Warper, Qualifier, tracked window),
then the look at Group Post-Clip or timeline. Shared input transforms in Group Pre-Clip, shot corrections at Clip.
Under red/blue/cyan stage light there may be no neutral to recover; preserve the lighting design rather than white-balancing it out; if the light lacks a colour a global correction cannot recreate it.

High-contrast stages: protect faces and key highlights (HDR wheels, soft clip, windows); do not lift the whole image to reveal a dark audience; separate corrections for speaker, LED wall, practicals, audience; balance first then restrained NR; avoid heavy saturation boosts (LED reds, magentas, blues clip or go out of gamut
after Rec.709); check Waveform, Parade, Vectorscope, false colour. Skin under coloured light: fix overall green/magenta first, then Qualifier or Magic Mask (Studio), lower saturation before rotating hue, separate windows for two-colour faces.

## LED wall, projector, flicker

Capture-side first: test the actual wall, content, camera, frame rate and shutter; ask the AV operator for a camera-friendly processor mode, higher refresh, fixed brightness, genlock if available; high-refresh panels (about 3840 Hz and up) are friendlier. Test shutters in 50 Hz regions (1/50, 1/100 and neighbours) and 59.94/60 Hz regions (1/60, 1/120);
180 degrees is not automatically safe; slow motion is especially vulnerable.
Resolve side: Resolve FX Deflicker (Fluoro Light, Advanced Controls for rolling bands; documented as Studio, verify version); Power Window the wall; reduce temporal range when faces ghost; a one-frame-offset blend for mild static flicker (rescue only). Severe moving banding may be unrecoverable. Strobing can trigger false cuts in auto scene detection.

## Noise

Order: exposure and colour management, moderate temporal/spatial NR, grade contrast and skin, sharpen or grain only if needed. Studio has temporal, AI spatial NR and UltraNR; Free: restrained spatial tools or external denoiser. Chroma noise before luma; do not crush noisy blacks (banding); render a representative test with faces, LED graphics, fast movement, applause; cache noisy clips before multicam playback.

## Fairlight

Layout: DX-MIXER, DX-LAV 1..n, boom, AUDIENCE, ROOM, MUSIC, SFX, MASTER. Mixer feed is the timing and intelligibility anchor, lavs are alternates. Confirm channel mapping in Clip Attributes, keep multichannel as separate mono where possible, check clipping and missing channels before the multicam.
Lav chain: clip gain/fades, high-pass, De-Hummer (50/60 Hz), Noise Reduction (steady HVAC/hiss), De-Esser, compressor/dialogue processor, limiter on the dialogue bus. Gate/expander cannot clean noise under speech. Studio: Voice Isolation (conservative), Dialogue Separator; Dialogue Leveler and basic EQ, dynamics, De-Hummer, NR reported available in Free.
Room echo: no heavy gating, keep room tone under edits with short crossfades; heavy echo is hard to remove cleanly. Audience: keep audience mics, edit applause and laughter under pauses, duck only where it masks speech. Music: own bus, sidechain Ducker from the dialogue bus or manual automation (automation for applause/walk-ons), modest EQ in the speech range, avoid vanishing music on every sentence. Resolve 20 adds Level Matcher, EQ Match, Chain FX, AI Audio Assistant (organises, levels, ducks, masters; a starting point).

## Loudness

Get the delivery spec. EBU R128 about −23 LUFS integrated, −1 dBTP max; ATSC A/85 about −24 LKFS, about −2 dBTP; online no universal target, roughly −14 to −16 LUFS integrated as a starting range, true peak −1 to −2 dBTP. In Fairlight: true-peak limiter on final bus, loudness meter with the right preset, measure the whole programme, adjust overall gain last,
re-measure the rendered file (codec and channel mapping can change it). Resolve 18.6+ has loudness-standard presets in render settings. Do not confuse sample vs true peak or short-term vs integrated.
Mistakes: camera scratch plus mixer feed mixed, mixer feed type unknown (pre/post-fader, mono/stereo), phase-inverted or doubled channels, NR on everything, gate under speech, ducking without attack/release, per-clip normalising, measuring only a loud section, broadcast audio at an online target.

## Captions

Finish edit and mix first. Timeline > Create Subtitles from Audio (Studio in the documented workflow); review names, jargon, acronyms, slide text, numbers, overlapping speakers; style, max characters, lines, safe position; separate tracks per language. Burn-in for social, separate SRT/VTT for web, embedded only if codec/container/broadcaster support. Mistakes: generating before lock, wrong timecode after frame-rate or start-TC change, treating auto text as final, captions under platform UI or outside title-safe, one long line per paragraph, burning into the only master.

## Delivery and archive

Presets: archive/master (ProRes 422 HQ/4444 or DNxHR HQ/HQX, PCM 48 kHz/24-bit, no burn-in, stems if re-versioning is likely), broadcast (follow the broadcaster exactly), online master (H.264/H.265, 10-bit when justified, Rec.709 tagging, captions separate, clean master), session clips (duplicate or render ranges, saved preset). Safeguards: short test of darkest stage, brightest wall, coloured faces, applause, music, captions; render in sections for very long events and verify joins; open in an independent player and re-measure loudness; confirm originals not proxies; archive project, database backup, originals, proxies, graphics, fonts, subtitles, masters and a text note of Resolve version, colour management and delivery settings.
Most damaging: double-transforming log; neutralising intentional stage light; ignoring LED flicker until after the event; global NR/Deflicker on moving subjects; mixer feed only; peak-meter mixing; unproofed auto captions; editing long sessions from heavy originals; rendering proxies by accident; one flattened file with no clean master, captions or stem.
