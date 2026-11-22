# Interchange fidelity (into Resolve) and sources

Primary: Resolve 15 manual, Import & Conform chapters 38–39 — https://ltbits.github.io/davinci-resolve-manuals/DR15/DR15-RM-05-ImportAndConformProjects.pdf
(newer manual URLs were unreachable during research; **verify against the user's version**).

| Format | Survives | Lost |
|---|---|---|
| FCP7 XML | multitrack; opacity/position/scale/rotation (keyframes too); composite modes; linear and variable speed; nested sequences (→ compound clips); text generators; mixed frame rates; transitions | color corrections, flip/flop, freeze frames, audio transitions |
| FCPXML | the above + FCPX color, compounds, multicam (→ compound), Ken Burns (→ Dynamic Zoom), optical-flow/frame-blend flags | audio transitions, flip/flop |
| AAF | multitrack; audio transitions; linear + variable (Timewarp) speed; freeze frames; mixed frame rates; opacity/resize/3D Warp (→ pan/tilt/zoom/rotate); flip/flop; Overlay mode only | nests, text generators, color corrections |
| EDL | cuts, cross-dissolves, linear speed | everything else (tracks, transforms, variable speed, nests) |

Practitioner article (Resolve 19.1.3 ⇄ Premiere 25.1): https://digitalproduction.com/2023/09/09/what-about-roundtrips-premiere-pro-and-davinci-resolve/
- Premiere XML → Resolve: survives tracks, sequence markers, cross-dissolves, dips, transform/opacity keyframes; partial: keyframes
  arrive linear, scaling needs "Fit to Frame", other transitions become crossfades; lost: clip markers, audio levels, filters; stereo may arrive mono.
- Resolve → Premiere XML: speed ramps come across wrong; filters, adjustment layers and duration markers lost.
Apple FCP guide (FCP 13): https://support.apple.com/guide/final-cut-pro/use-xml-to-transfer-projects-verdbd66ae/mac
OTIO feature matrix (unverified fidelity): https://opentimelineio.readthedocs.io/en/latest/tutorials/feature-matrix.html

**Unverified / do not state as fact:** OTIO track-order or path issues (forum snippets), Resolve → DAW workflows (Avid/Pro Tools AAF
presets, "go via Premiere for OMF"), Premiere title carry-over, Media Composer relink needs media indexed first.
