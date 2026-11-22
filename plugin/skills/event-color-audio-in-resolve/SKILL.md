---
name: event-color-audio-in-resolve
description: Use when grading or fixing audio for event video in DaVinci Resolve: matching cameras under stage or LED lighting, colored stage light on faces, LED wall or projector flicker and banding, noisy low-light footage, mixer-feed or lav speaker audio, room echo, loudness targets, long multicam sessions on proxies, or captions for session recordings.
---

# Event colour, audio and finishing in Resolve

Preserve the lighting design and keep speakers intelligible. Resolve's API cannot author wheels, curves, qualifiers, windows or Fairlight chains (`resolve-api-reliability`): hand the user UI steps or use DRX/LUT via `resolve-color`.
Sources: deep research plus two multicam tutorials; no event colour or audio tutorial was analysed and nothing was tried on real event footage (`docs/research/event/`). Free vs Studio claims vary by version, so confirm with `resolve-edition-features`.

## Long sessions
- Proxies first (ProRes Proxy/LT or DNxHR LB/SQ), Prefer Proxies while cutting, Render Cache for heavy NR, Fusion or titles; final render must use originals unless proxies were requested (`resolve-proxy-relink`).
- Keep an edit timeline and a finishing timeline; split very long events by session with identical frame rate, sample rate and timecode; re-check sync at start, middle and end.

## Colour order
1. **Camera info and one transform path** (`resolve-color-management`): exact input gamut and gamma per camera, Color Managed or one CST per source, Rec.709 Gamma 2.4 for SDR unless the platform says otherwise. No technical LUT on top of an equivalent transform. Tone mapping and gamut or saturation compression help with aggressive stage colour.
2. **Match order**: exposure and highlights, neutrals (Parade), contrast and black level, saturation and hue (vectorscope, reference stills), skin refinement, then the look at Group Post-Clip or timeline.
3. **Do not neutralise intentional colored light**: under red, blue or cyan light there may be nothing neutral to recover. Fix overall green/magenta first; if only skin is wrong use a Qualifier or Magic Mask (Studio) with a tracked window, lower saturation before rotating hue, and separate windows for faces lit by two colours.
4. **High-contrast stages**: protect faces and key highlights (HDR wheels, soft clip, windows); separate corrections for speaker, LED wall, practicals, audience; do not lift everything to show a dark audience; watch saturated LED reds, magentas and blues going out of gamut; check scopes and false colour, not a bright monitor.
5. **Flicker and banding**: first a capture-side test (wall, content, camera, frame rate, shutter; ask the AV team for a camera-friendly LED mode or genlock). In Resolve: Deflicker (Fluoro Light, Advanced Controls; edition by version), a window on the wall, shorter temporal range if faces ghost. Severe moving bands may be unrecoverable; do not promise otherwise.
6. **Noise**: correct first, moderate temporal or spatial NR (Studio for temporal and AI), then contrast, sharpening or grain only if needed; chroma before luma; test a clip with faces, LED graphics, motion and applause before processing everything.

## Audio order (Fairlight)
1. **Separate tracks**: board mix, lavs, panelists, podium, audience/room, backup camera, music, SFX. Mixer feed anchors timing and intelligibility; lavs are alternates; room mics supply applause and scale.
2. **Check before multicam**: channel mapping in Clip Attributes, clipping, missing channels, phase between lav and board. Cut video in the multicam and mix external audio separately; apply Fairlight effects at clip level inside a multicam (track effects there do not persist).
3. **Lav and desk chain**: clip gain, high-pass, De-Hummer (50/60 Hz), Noise Reduction (steady), De-Esser, compression, limiter on the dialogue bus; Voice Isolation and Dialogue Separator (Studio) conservatively; no heavy gating, keep room tone under edits.
4. **Audience and music**: keep audience mics, place applause and laughter under pauses, duck the audience only where it masks speech; music on its own bus with sidechain Ducker or manual automation for walk-ons and applause.
5. **Loudness**: obtain the spec. Published references: EBU R128 about −23 LUFS / −1 dBTP, ATSC A/85 about −24 LKFS / −2 dBTP, online with no universal target (roughly −14 to −16 LUFS as a starting range). Measure the whole programme, re-measure the rendered file (`resolve-delivery-specs`).

## Captions
Lock the edit and mix first; auto-caption (Studio in the documented workflow) then proof names, jargon, numbers and speakers; check timing after any frame-rate or start-timecode change; separate SRT/VTT for web, burn-in for social, never burned into the only master (`resolve-subtitles`).

## Mistakes
Double-transforming log · neutralising stage light · ignoring flicker until after the event · global NR or Deflicker on moving subjects · only the mixer feed · camera scratch mixed with the board · phase-inverted channels · peak-meter mixing · broadcast loudness on an online file · unproofed auto-captions · rendering proxies by accident · one flattened file with no clean master, captions or stems.
