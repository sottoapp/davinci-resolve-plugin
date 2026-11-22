# Event video analyses (Gemini via the `watch` skill)

Same method and caveats as [../../wedding/video-analyses/README.md](../../wedding/video-analyses/README.md): Gemini's observations, one instructor's values, Free/Studio claims not made by the presenter are Gemini's inference.

| File | Video | Software | Feeds |
|---|---|---|---|
| multicam_workflow.md | How to Create Multicam Clips in DaVinci Resolve — Best Workflow Practices — https://www.youtube.com/watch?v=iLCy6tckbAg | Resolve (version not stated) | `event-video-editing`, `wedding-video-editing` |
| multicam_r21.md | DaVinci Resolve 21 Multicam Editing Tutorial (New UI and Timeline Layout) — https://www.youtube.com/watch?v=Sqc0_t9SRn0 | Resolve Studio 21 | `event-video-editing`, `wedding-video-editing` |

## What they add

- Camera # metadata column so clips from one camera land on one angle; Cut page Sync Bin, Sync by Audio Waveform, Save Sync creates the multicam; Edit-page Auto-Align by waveform; compound clip then **Convert Compound Clip to Multicam Clip** for take-by-take music-video shoots.
- Failure modes: unused silent channels make **Auto Sync Failed** (remove them in Clip Attributes > Audio or set the sync channel to Automatic); sync channel left on Channel 1 when audio is on 3/4; stereo audio on a mono track; including pickup shots in full-take multicams;
  mixed frame rates (60 fps in a 24 fps multicam) stutter, fix with Clip Attributes frame rate then Optical Flow retime (Speed Warp is Studio); multicam tracks open locked; Inspector open hides the multicam viewer in single-screen layouts; **Fairlight track effects inside a multicam do not persist, apply at clip level**.
- Audio: unflattened, unlinked multicam audio switches to the cutting camera's scratch mic, so either relink the master audio, flatten the audio angle, or use Video Only switching. Resolve 21: Multicam toggle moved below the timeline viewer (needs Dual Viewer, Inspector closed); dialog options Angle Sync Sound, Channel Automatic, Multicam Audio Adaptive Tracks; Switch Multicam Clip Angle on the audio track; Video Only / Video and Audio / Audio Only mode icons; number keys cut live during playback.

## Coverage gaps

No event colour, LED-wall, slide-capture or event-audio tutorial was analysed; those parts of the event skills rest on the deep research only and have not been tried on real event footage.
