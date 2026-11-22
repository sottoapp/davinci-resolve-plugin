# Event templates, safe areas and brand QA — reference

Sources: `docs/research/titles-effects/event-graphics-titles.md` and its video analyses. Safe-zone numbers for platforms change; verify on the platform.

## Safe areas and mobile
Resolve Viewer safe-area overlays: Action about 93%, Title about 90%, Center; they do not render. Keep names, session titles, URLs, sponsor legal copy, captions and CTAs inside Title. For each social version: a real 9:16 timeline, a platform safe-zone overlay above the edit, preview at phone scale, check the busiest background behind every caption, check bottom and right UI zones, upload an unlisted test where possible.

## Reusable titles (workflow shown in tutorials)
- Finished title clip into the Media Pool keeps settings and keyframes; into a Power Bin shares across projects in a Project Library; Export Bin gives a `.drb` without media.
- Fusion Keyframe Stretcher holds intro and outro keyframes so the timeline clip length can change; check that a built-in preset's outro actually animates off (one Fusion title did not and needed its mask keyframes copied and reversed).
- Push transition between graphics: about 12 frames, Start on edit, ease In and Out, copy the transition to the next cut; the exit may push the wrong way until its direction is set.
- Drop Shadow as a Resolve FX instead of the text Inspector shadow so settings paste across clips (Paste Attributes); Fusion text animation may not drag a native shadow with it.
- Blanking Fill defaults (Stretch, white fade, crop) distort or blow out; change to Zoom, crop 0, black or scene colour.
- Third-party packs (for example MotionVFX) are paid, may stutter on slower machines, and are not part of Resolve.

## Brand QA checklist
Event name and year · speaker spelling and title · approved logo and orientation · clear space · approved colours · no unauthorised gradients or shadows · consistent timing · no clipped text · no collision with captions or platform UI · sponsor order and prominence per contract · fonts installed or packaged with the project.

## Opener, countdown, end card
Opener 5–12 s: establishing shot, fast details (badges, hands, lights, signage, equipment), event name and edition, logo, first beat or speaker line. Countdown: the number dominates; same visual system in 5, 10 and 30 minute lengths. End card: logo, one action, URL/handle/date, optional sponsor acknowledgement; do not stack "watch, register, follow, download" on one card.
