# Real-estate colour in Resolve — digest

**Principle (Marcela video, research):** "simple and true to life" — cameras see windows far brighter than eyes, so interiors look darker; correct that, don't stylise.
**Acceptable:** exposure/contrast/highlight recovery, WB/tint, removing camera casts, lens distortion and modest vertical correction, restrained NR/sharpening, room-to-room matching.
**Disclose or avoid:** sky replacement, virtual staging, object removal, window-view change, adding features, making rooms look larger, lush-ifying dead grass, hiding defects.

Pipeline: choose DaVinci YRGB Color Managed (set clip Input Color Space, Rec.709 out) or manual CST — never both; D-Log vs D-Log M are not interchangeable (D-Log M needs DJI's own LUT). Order:
input → exposure/WB → NR → contrast → window/sky/mixed-light fixes → refinements → look → sharpen → output. Windows: Power Window + Tracker, feathered; a clipped window can't be recovered.
Mixed light: dominant source on base node, secondary via Qualifier/Window; don't sterilise warm lamps. Look consistency: hero room → Gallery still/PowerGrade, Group Pre/Post-Clip, per-room trims.
Lens: Studio Inspector ▸ Lens Correction; Fusion Lens Distort before planar tracking; converging verticals via Inspector Transform (yaw/pitch/rotation/zoom) with crop cost.
NR (Studio Motion Effects): temporal low frame count first, ghosting check; sharpen last.

Video-sourced example settings (one instructor each, see video-analyses/): Van Beek (Resolve Studio 18) — HDR palette Highlight lowered for windows, Mid/Detail ≈ 50 on interiors but 0 on exteriors,
saturation in HSV with only channel 2 active, WB with node gamma Linear + Lum Mix 0 on Gain wheel, Key Output Gain to fade node strength, Hue-vs-Hue tweaks, skin node on a vectorscope skin indicator,
realtor face 50–80 on waveform (avg 60–70), don't add contrast to dark rooms, don't strip yellow walls. Marcela (Resolve 17) — Inspector Yaw/Zoom/Rotation to straighten, pre-LUT WB/exposure node, Midtone Detail down to soften,
two sharpen passes (radius ~0.49/0.48), glow nodes (Soft Light/Add, low opacity), Stabilization Perspective, Smooth 0.5.

## Sources
Resolve colour: blackmagicdesign.com/products/davinciresolve/color · Colorist Guides 17/18 · Color Correction with DaVinci Resolve (15) · davinciresolve21.com (D-Log, D-Log M, workflow order, log workflow) · premiumbeat.com (colour keys for WB) ·
tutsplus (lens distortion in Resolve Studio) · Visual Effects Guide 20 · forum.blackmagicdesign.com/viewtopic.php?f=21&t=152639 · drone.courses (grading drone footage, Resolve for drone pilots) · r/colorists critique thread ·
Honesty/MLS: picappoint.com mistakes · propertyphotoediting.com HDR tips · giraffe360.com MLS photo rules · styldod.com over-editing · NAR "true picture" advertising principle (as summarised in the research).
