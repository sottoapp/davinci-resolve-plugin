# Wedding colour and audio in Resolve — research digest

Date: 2026-11-22. Source: one `deep` You.com run (18 cited sources: Blackmagic Colorist and Fairlight guides and feature pages, forum threads, colour-grading blogs). Studio vs Free statements
are from the report and Blackmagic's Studio feature list; the Free status of individual Fairlight tools has varied by version — verify with `resolve-edition-features`.

## Project plan

Camera/source log: exact model, gamma and gamut (S-Log3/S-Gamut3.Cine, C-Log3, HLG/Rec.2020, DJI D-Log M, Rec.709), bit depth, codec, ISO, whether a LUT is baked in, white-balance method,
lighting. "Log" alone is not enough to pick a transform. Simplest multi-camera route: DaVinci YRGB Color Managed, correct Input Color Space per clip, Rec.709 Gamma 2.4 output for SDR.
Alternative: DaVinci YRGB with one CST per source. Use either RCM or manual CST for a given transform, never both; a LUT after a CST that already converted, or a second project transform,
gives crushed blacks and over-saturation.

## Low light and mixed light

Lock white balance per scene (Auto WB drifts under candles, windows, DJ lights). Expose log with scopes, zebras and false colour, not the flat LCD. Protect dress, windows and practicals but do not
under-expose faces to save every highlight. Lifting an under-exposed shadow lifts noise; clipping cannot be recovered. A slightly brighter log exposure pulled down later is cleaner but costs headroom, so
test per camera. Grade the subject, not every light: pick the dominant light on the couple or speaker, let the background keep colour contrast. For severe mixed light correct each side of a face with
tracked windows or parallel nodes. Tools: Primaries/HDR wheels, RGB Parade (green/magenta and warm/cool), Waveform, Vectorscope with Skin Tone Indicator, Qualifier, Power Window, Tracker, HSL curves,
Color Warper, Parallel nodes; Magic Mask is Studio.

## Skin tones across complexions

Skin tone is a hue relationship, not a fixed brightness or saturation. Use the vectorscope indicator for hue direction (green, yellow, magenta shifts); judge luminance and saturation per person and look.
Balance the whole shot first, isolate skin only if needed, gentle Qualifier or HSL, track a window or Magic Mask only to exclude clothing, foliage or coloured light, recheck lips, makeup and hands. Do not force
every face to one brightness or orange hue.

## Dresses, suits, backlight

Dress: preserve texture before brightness; treat specular clips differently from textured fabric; highlight recovery before creative contrast; avoid global Gain that clips windows. Suit: lift detail with a
tracked window rather than crushing the suit to make the dress pop. Backlit ceremonies: local face lift (HDR wheels or Lift/Gamma/Gain, tracked window or Magic Mask), reduce window/sky separately, correct green
window reflections with Color Warper/HSL; accept silhouette where the source is clipped.

## Log, HLG, drone

Confirm gamut (S-Gamut3 vs S-Gamut3.Cine). CST: exact input gamut and gamma, Rec.709 / Gamma 2.4 for SDR, enable tone mapping and gamut compression. HLG is not S-Log3: treat as HDR Rec.2020, convert
explicitly; HLG to Rec.709 is a dynamic-range reduction needing tone mapping (Resolve 20.2 documents updated RCM/CST handling for HLG and PQ using BT.2408). DJI profiles are not interchangeable (D-Log M, HLG,
Normal, D-Cinelike). Normalise drone first, then match to the hero camera, keeping natural atmospheric difference.

## Camera matching order

Normalise to one working space, pick a hero shot, match exposure, white balance and neutrals, contrast and black level, saturation and skin hue, then apply the shared look. Tools: Gallery stills and split
screen, Shot Match (starting point only; unreliable on unmatched log), Color Match (needs a properly exposed chart under the same light), Groups with Pre-Clip / Clip / Post-Clip. Do not group all clips of one
camera across daylight, tungsten and LED.

## Noise reduction and the look

Denoise before strong contrast or sharpening, minimum needed: Temporal NR, Spatial NR, UltraNR (Studio; AI), selective with a window or node key, restrained grain after. Mistakes: denoising every clip equally,
plastic skin, motion trails, aggressive sharpening, using NR to rescue severe under-exposure. Consistent look does not mean identical colour temperature everywhere.

## Fairlight

Separate tracks before processing: vows/speeches (lav, bodypack, handheld), camera reference, ceremony ambience, reception ambience, music, effects. Clean source is primary, not automatically camera audio.
Repair chain: clip gain and edits, high-pass EQ, De-Hummer, Noise Reduction or Voice Isolation (Studio), corrective EQ, compression, De-Esser, Dialogue Leveler or manual automation, limiter on the dialogue bus.
Gate/expander only reduces noise between phrases. Voice Isolation, Dialogue Separator and AI Audio Assistant are Studio. Wind: EQ the rumble, modest NR, keep room tone, replace syllables destroyed by a gust
(other mic, alternate take, ADR). Do not gate pauses to digital silence. Do not stack NR, Voice Isolation and Dialogue Separator until speech is robotic.

## Music under speech

Buses: dialogue, music, ambience/SFX to main. Make dialogue intelligible first, then lower music. Options: Edit-page Ducker, Fairlight Dynamics sidechain from the dialogue bus, Fairlight automation, keyframes.
Manual fader automation is usually more natural for emotional film; auto-ducking can swell in every pause. Keep ambience under speech; duck music more than ambience.

## Loudness

Fairlight Loudness Meter (LUFS, true peak), standards BS.1770-4, ATSC A/85, EBU R128. Follow the destination spec; measure the finished program and reset the meter first; listen on headphones, near-fields,
laptop and TV; vows must stay intelligible at low volume.

## Studio matrix (as reported)

Free: primaries, nodes, scopes, CST, RCM, Qualifier, Power Windows, tracking, HSL, basic Fairlight EQ/dynamics/automation. Studio: temporal and spatial image NR, UltraNR, Magic Mask, Voice Isolation, Dialogue
Separator, AI Audio Assistant, advanced HDR/Dolby Vision. Dialogue Leveler is separate from Voice Isolation and may be available outside Studio depending on version.

## Mistakes (condensed)

Creative LUT on unconverted log; wrong gamut; RCM plus manual CST; CST then LUT doing the same conversion; matching Sony log straight to Canon log; HLG treated as S-Log3; one drone LUT for all DJI profiles;
saturation to fix white balance; crushed suits; clipped dress/windows; uniform skin; trusting an uncalibrated monitor; Shot Match as a finished grade; heavy NR/sharpen/halation. Audio: camera audio as primary when a lav is
cleaner; same chain for every mic; gate for noise under speech; stacked AI tools; no room tone; heavy ducking; peak meters instead of LUFS/true peak; all dialogue and music on one track; ignoring polarity; limiter to
"fix" clipping.
