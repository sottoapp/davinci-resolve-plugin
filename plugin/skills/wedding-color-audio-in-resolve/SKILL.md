---
name: wedding-color-audio-in-resolve
description: Use when color grading or fixing audio for a wedding film in DaVinci Resolve: dim receptions, mixed or colored lighting, skin tones across complexions, white dresses and dark suits, backlit ceremonies, matching several cameras or a drone, noisy vows or toasts, wind, or music drowning speech.
---

# Wedding colour and audio in Resolve

Preserve what was said and keep people looking like themselves. Resolve's API cannot author wheels, curves, qualifiers or Fairlight chains (`resolve-api-reliability`): these are UI steps to hand the user, or use DRX/LUT via `resolve-color`.
Sources: deep research plus three tutorials, not tested on real wedding footage (the Sotto DaVinci Resolve knowledge base (Notion) › Vertical: Wedding). Free vs Studio claims vary by version; confirm with `resolve-edition-features`.

## Colour order
1. **Identify each source**: camera, gamma AND gamut (S-Gamut3 vs S-Gamut3.Cine matters), HLG is not log, each DJI profile differs. Details: `resolve-color-management`.
2. **One transform path**: Color Managed with the right input per clip, or one CST per source. Never both, never a LUT that repeats a conversion. Output Rec.709 Gamma 2.4 for SDR unless the client needs HDR.
3. **Normalise, then match**: exposure, white balance and neutrals, contrast and black level, saturation and skin hue, then the shared look. Shot Match and Color Match are starting points, not grades. Group by genuinely shared camera and lighting, not "all of camera A".
4. **Grade the subject, not every light**: pick the dominant light on the couple or speaker, let colored background light stay; each side of a face lit differently gets its own tracked window.
5. **Skin**: hue direction on the Vectorscope with the skin-tone indicator; judge brightness and saturation per person. Global first, then Qualifier or HSL, tracked window or Magic Mask (Studio) only to exclude clothing, foliage or colored light; lower saturation before rotating hue; never force every face to one tone.
6. **Dress and suit**: keep dress texture before raising brightness, do not crush the suit to make the dress pop, recover highlights before adding contrast. Backlit: lift faces locally, treat windows separately, accept silhouette where the source clipped.
7. **Noise**: lock white balance at capture, denoise minimally before contrast and sharpening, selectively; temporal and AI NR are Studio. Do not use NR to rescue a severely under-exposed shot.
8. **Do not stack a creative look until the cameras match**; keep day-to-night colour differences natural.

## Audio order (Fairlight)
1. **Separate sources** before processing: officiant/partner lavs, recorders, camera scratch, ceremony and reception ambience, music, effects. The cleanest mic is primary, not automatically the camera.
2. **Repair chain**: clip gain and edits, high-pass, De-Hummer, Noise Reduction (steady) or Voice Isolation (Studio, changing noise), corrective EQ, light compression, De-Esser, Dialogue Leveler or manual automation, limiter on the dialogue bus. One tool per problem.
3. **Wind**: EQ the rumble, modest NR, keep room tone, replace syllables a gust destroyed (other mic, other take) rather than stacking processors. A gate cannot clean noise under speech and digital silence between sentences sounds fake.
4. **Music under speech**: dialogue, music and ambience on separate buses; dialogue first, then music down via sidechain ducking or, for emotional passages, manual automation; keep ambience under the voice.
5. **Loudness**: Loudness Meter in LUFS and true peak over the finished programme to the destination spec; listen on headphones, laptop speakers and a TV; vows stay intelligible at low volume (`resolve-delivery-specs`).

## Mistakes
Creative LUT on unconverted log · wrong gamut · RCM plus manual CST · HLG treated as S-Log3 · saturation used to fix white balance · same skin tone for everyone · clipped dress or windows · stacked NR plus Voice Isolation plus Separator until speech is robotic · all dialogue and music on one track · peak meters instead of LUFS · limiter used to "fix" clipping.
Tutorial numbers (HDR 1000 luminance, a −2 dBFS normalise, EQ notches, compressor 2.5:1) are one instructor's values for their own material; do not present them as targets.
