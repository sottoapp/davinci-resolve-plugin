# Wedding effects, transitions and titles — research digest

Date: 2026-11-22. One `deep` run (23 sources, mostly wedding-editing guides and Blackmagic/Fusion training) plus three videos. A "practical consensus", not a survey: the report says so.

## Use and avoid
| Technique | Use | Avoid |
|---|---|---|
| Straight cut | default; cut on movement, eyeline, accent, reaction; B-roll to bridge time and place | cutting only on beats; an effect to hide a bad edit |
| Cross dissolve | sparingly for time passing, memory, gentle change | dissolving every clip |
| Dip to colour / fade | section ends, big time jumps, a pause before vows or speeches (black formal; white or warm for bright style) | a fix for mismatched shots |
| J/L cuts | vows, letters, speeches, room tone, applause, location changes | dialogue starting on an awkward breath; mid-word cuts |
| Match cuts / object wipes | editorially designed by movement, shape or object | generic wipe presets |
| Whip pans | only when the footage already moves that way, direction, speed and blur matched | whip between static shots, repeated swishes |
| Light leaks | occasional dreamy montage or teaser | on faces, on every transition, stock overlays as the subject |
| Grain, glow, halation | subtle, consistent, after the grade | halos on dresses and windows, milky skin, grain to hide bad exposure |
| Speed ramps, slow motion | entrances, dance, confetti, kiss, with high-frame-rate footage | ramping every clip, slowing 24/25/30 fps until it stutters |
| Freeze frame | rare: social teaser, chapter punctuation | emotional moments in the main film |
| Camera shake | almost never; short dance-floor insert | on vows, portraits, speeches, titles |
| Stabilisation | least needed, ceremony long lens | rubber edges, warping |

## Resolve mechanics reported
- Dissolve: Effects Library, Video Transitions, drag to the cut, duration by handle or Inspector. Needs clip handles (extra frames) or it only applies on one side or fails (video).
- Default transition shortcuts (video): Alt/Option-T video only, Shift-T audio crossfade, Ctrl/Cmd-T both; default duration in Preferences > User > Editing; right-click a transition > Set as Standard Transition; Create Transition Preset saves to Video Transitions > User; hold Alt/Option-drag to copy; hover-scrub previews.
- J/L cuts: Linked Selection off, Trim Edit, roll the audio; short audio crossfades or room tone.
- Whip: Directional Blur, Transform or a Fusion comp, matched direction, motion blur; Fusion object wipe: mask plus Merge, feathered.
- Light leak: licensed overlay on a higher track, Screen/Add/Lighten, low opacity, trimmed to the transition; or Fusion Fast Noise.
- Grain/glow/halation: Adjustment Clip over a finished section or a finishing node after the look; Film Look Creator with halation, grain, gate weave is Studio; Film Grain and Halation are Studio effects (watermark in Free).
- Slow motion: 60 fps in a 24 fps timeline is about 40%, 120 fps about 20%; Retime Controls speed points, Retime Curve, Speed Warp is Studio.
- Stabilisation: Inspector > Stabilization; camera shake via Fusion or Resolve FX Camera Shake with blend keyframed back to zero.

## Titles and typography
Opening title: couple names, date, calm shot, 3–6 s; chapter cards 1–3 s only when structure needs them; speech lower thirds (name larger than role, away from faces and microphones, not animated during the key line); vow subtitles (high contrast, two lines, clear of hands and rings, accurate); end credits (couple, venue, family, music licensing, filmmaker). Font strategy: one display serif or restrained script for names, one readable family for dates, roles, subtitles and credits; no script for paragraphs or subtitles. Fonts: keep licence and invoice with the project, "free download" is not commercial use, personal-use-only fonts are not for paid work, Google Fonts generally permit commercial use under each font's licence, Adobe Fonts only while the subscription terms hold, check every DaFont licence; install at OS level and restart Resolve.
Animation restraint: fade, small move, mask reveal, slow opacity ramp; avoid typewriter on every title, elastic bounce, letter-by-letter, glow and outline together, different animations per chapter. Safe area: Viewer overlay Action about 93% and Title about 90%, overlays do not render; check vertical crops.
Video findings: Text (rich text, per-line fonts) vs Text+ (single block in the Edit Inspector, per-line styling needs Character Level Styling in Fusion Modifiers); keyframes in Fusion Spline editor Smooth (S); "size it, then shrink to about two-thirds"; all caps with slight tracking; sample colours from a palette and tint the drop shadow instead of pure black; a wedding-title animation tutorial in Resolve 16 exists (old).

## Templates, performance, Studio
Wedding Power Bin: opening title, couple name, date/location, chapter card, speech lower third, subtitle style, end card, grain/glow/vignette adjustment clips. Fusion title: build in Text+, expose only name, date, role, colour, animation strength, save as a template, test in a new project. Name versions (`WF_Title_CoupleName_v03`). Render cost: cuts, dissolves, static Text+ are cheap; blur, optical flow, stabilisation, stacked Fusion titles moderate; heavy Fusion, motion blur, temporal NR, grain and halation at high resolution, Speed Warp expensive; use Smart or User render cache, optimised media for decode, adjustment clips instead of per-shot effects.
Wedding-specific Studio tools shown in one video (Studio, speaker said 20, badge 19): AI Audio Assistant (Timeline > Audio Assistant, delivery standard, Auto Mix), AI Voice Clone/Convert to fix a flubbed word (needs clean reference audio and the speaker's consent, see `wedding-delivery-client-care`), AI Music Editor/Remixer (Inspector > Audio, target length, Live Trim, versions 1–4), vertical viewer on the Cut page, Multicam SmartSwitch (min edit 1 s, delay 0.3 s, Wide Angle None, Video only, Quality Better), all Studio. The presenter warns AI "is not going to edit my wedding film".

## Mistakes
Transition used to hide weak editing; dissolve between every shot; whip or light leak without matching motion; overused ramps and slow motion; fake shake on emotional footage; over-stabilising; grain plus halation plus glow plus LUT unchecked; titles over faces or rings; unreadable script for dates; unlicensed fonts, music, overlays; over-animated titles; ignoring safe areas and vertical crops; re-rendering a long Fusion title instead of caching; effects before story and audio are locked; a different title style per section.
