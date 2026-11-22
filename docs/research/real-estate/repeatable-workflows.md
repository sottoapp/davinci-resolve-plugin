# Repeatable / template-driven Resolve workflows and skill gaps — digest

| Feature | Use | Free/Studio (per research) | Key pitfall |
|---|---|---|---|
| Project template / presets | master `.drp` or Save As; versioned masters | Free | stale logos/grades/routing carry over; not a media archive |
| Power Bins | shared reusable media across projects in a library | Free (desktop) | don't travel with `.drp`; moved files break links |
| Smart Bins | metadata queries | Free (desktop) | inconsistent metadata → empty bins; not Power Bins |
| Fusion titles/macros/lower thirds | Text+/macro with published controls; `.drfx` | Free (Studio-only effects excepted) | fonts/plug-ins/paths; long text; colour-management mismatch in Fusion |
| Adjustment clip stacks | one treatment over many clips | Free | input is the flattened composite below; wrong container for independent layers |
| PowerGrades | reusable looks | Free | not a universal LUT; depends on input space/exposure/node order |
| Render presets + queue | multi-deliverable batching, Quick Export presets | Free (Studio adds hw encode etc.) | Add to Queue ≠ Render; Single vs Individual; proxies/cache; QC the file |
| Keyboard customization | speed | Free | context-sensitive; version mappings |
| Speed ramps/retime | retime controls + Retime Curve; optical flow | Free (Speed Warp Studio) | artifacts, audio sync, high-fps interpretation |
| Inspector keyframes | animate position/zoom/opacity | Free | keyframes outside trimmed range persist |
| Stabilisation | Inspector ▸ Stabilization | Free basic | edge crop, rubbery geometry; analyse after final crop |
| Smart Reframe / Magic Mask / transcription / auto-captions | AI | **Studio** | wrong subject; holes; accuracy; cache |

Gaps tutorials most often address: project/database/archive management; Power vs Smart vs ordinary bins; proxy/optimized/cache; media management with Fusion dependencies; compound vs Fusion vs adjustment clip;
colour management across Edit/Fusion/Color; Fusion fundamentals; keyframes outside the clip; retiming terminology; stabilisation trade-offs; grading as a repeatable system; render queue/QC; subtitles vs captions;
audio channel mapping; keyboard context; AI limits/Studio boundary; template maintenance.

## Sources
blackmagicdesign.com/products/davinciresolve/training, /studio, /edit, /whatsnew · DaVinci_Resolve_Studio_20_Features.pdf · DaVinci_Resolve_20 and 20.1 New Features Guides · Visual Effects Guides 17/18/20 · Advanced Visual Effects 20 · Beginner's Guide 16/17 · Definitive Guide 15 ·
Advanced Panel manual · davinciresolveclub.com (smart/power bins, proxy workflow) · pixflow.net (titles) · tryuncle.com (adjustment clip vs Fusion comp) · davinciresolve21.com (compound vs Fusion clip) ·
forum.blackmagicdesign.com threads (smart bins 211856, Fusion titles colour mgmt 183399, 167994, media manage Fusion comps 197470, proxy audio 176712) · r/davinciresolve FAQ Friday · heyeddie.ai Free vs Studio 21.1.
