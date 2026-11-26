# Wedding effect recipes and typography — reference

Sources: the DaVinci Resolve Context page (Notion) › Titles, effects and graphics and its video analyses. Menu names move between versions; check the installed one. These are UI steps; the scripting API cannot build them (`resolve-api-reliability`).

## Transition recipes
- **Dissolve**: Effects Library > Video Transitions > Cross Dissolve onto the cut; duration by handle or Inspector; Alignment centred, start or end on cut. Shortcuts shown in a tutorial: Alt/Option-T video, Shift-T audio crossfade, Ctrl/Cmd-T both. Set the standard duration in Preferences > User > Editing. No handles means the transition applies to one side or not at all.
- **Dip to colour**: Dip to Color transition if present, else a short colour generator on a higher track with animated opacity.
- **Whip**: matched-direction clips, short Directional Blur or Transform keyframed across the cut, motion blur, match brightness and duration, soften until it reads as a camera move.
- **Object wipe in Fusion**: outgoing shot above incoming (or a Fusion clip), Polygon or B-Spline mask following the object, Merge, slight feather, matched motion blur.
- **Light leak**: licensed overlay with alpha or black, Screen/Add/Lighten, trimmed to the transition, opacity down, colour so skin and dress stay natural.
- **Grain, glow, halation**: Adjustment Clip over a finished section, low blend, inspect at 100%; or a finishing node after the look saved as a PowerGrade. Free Resolve may watermark Studio-only effects.
- **Speed ramp and slow motion**: Retime Controls speed points, Retime Curve ease; 60 fps in a 24 fps timeline is about 40%, 120 fps about 20%; check hands, veils, confetti for artefacts. A tutorial's cross-cut ramp is keyframed Retime Frame with Ease Out on the outgoing clip and Ease In on the incoming, which needs handles.
- **Camera shake**: only if needed; Fusion CameraShake or Resolve FX Camera Shake at small scale, blend keyframed to zero. Studio status of the Resolve FX version is disputed between sources; check the badge.

## Typography
Fonts: one display serif or restrained script for names, one readable sans or serif for dates, roles, subtitles, credits. Google Fonts are generally open-source under per-font licences; Adobe Fonts only while the subscription terms hold, so render approved masters; DaFont-style sites need a per-font licence check; avoid "personal use only". Install at OS level, restart Resolve. Safe area guides (Action about 93%, Title about 90%) do not render; crop-check vertical.
Timing ranges (working values, not standards): couple names 3–6 s, date subordinate, chapter card 1–3 s, subtitles follow speech, credits long enough to read. Test on phone, TV and computer.
