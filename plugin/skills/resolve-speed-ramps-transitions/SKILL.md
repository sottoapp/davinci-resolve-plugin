---
name: resolve-speed-ramps-transitions
description: Use when building speed ramps, whip or zoom transitions, luma-fade day-to-night changes, motion blur, camera shake or tracked light effects in DaVinci Resolve, or when a ramp looks stuttery, jerky or overdone.
---

# Speed ramps and effect transitions in Resolve

Effects serve the cut: ramp to shorten travel or sell a reveal, land on a beat, then return to normal. Overuse is the giveaway. (Real estate conventions: `realestate-video-editing`.)
Mechanics below are from a Resolve Studio 20 tutorial analysed by Gemini (the DaVinci Resolve Context page (Notion) › Vertical: Real estate > video analyses) — **one editor's values**, and he sells some of the presets he uses
(Luma Fade, Cine-Whip, Warp, Disappear, Motion Blur Pro/Simple are third-party): the native route is given for each. None of this is scriptable; give UI steps.

## Speed ramp
1. Select the clip, **Ctrl/Cmd-R** (Retime Controls), add speed points on beat transients or markers; set each segment (example: 50% intro → fast ramp into the beat; very low % to settle).
   Exact values: Inspector ▸ Speed Change.
2. Open the clip's curve tray ▸ **Retime Speed** curve; select a point ▸ **Ease In And Out**; drag a handle (hold **Shift** to break the handles) for an asymmetric, snappy ramp.
3. Check retime quality: optical flow warps hands, water, thin objects; high fps already interpreted as slow-mo; heavy slowing of 24/30 fps stutters. Speed Warp is Studio and needs caching.
4. Extreme ramps (≈1600%) break pixel-tracked motion blur — keep ramps modest.

## Transitions and effects
- **Luma fade (native):** select the cut ▸ Shift-Space ▸ Luma Fade; in the Inspector Luma Source, Fade Mode (Bright First), softness. Hold Ctrl/Cmd and drag a handle to move the midpoint without moving the cut.
- **Faked ramp zoom (native):** Adjustment Clip over the cut ▸ Fusion ▸ `Transform` between MediaIn/MediaOut, Size 1.0→2.0, Spline editor smooth (S), pull the Bézier so it accelerates into the cut.
- **Motion blur over a ramp (native):** Adjustment Clip above the ramp with Directional or Zoom blur; or Fusion. Put it above other effects so it blurs them too.
- **Camera shake (native):** Adjustment Clip ▸ Fusion `CameraShake`; deviations near 0, edges **Mirror**, speed low; keyframe Overall Strength 1.0 on each cut, 0 between; remove handles on the peaks.
- **Tracked light sweep:** Fusion `Tracker` (Corner Positioning) on the surface → white `Background` + soft `Rectangle` mask, keyframe its centre between timeline markers; Tracker Blend ~0.7. Markers appear on the Fusion ruler.
- **Match cut (open/closed fridge etc.):** overlap clips, opacity 0 to compare, Fusion Tracker Match Move + `Transform`, Guides ▸ Center.
- Heavy effects: Playback ▸ Render Cache ▸ User to judge in real time (`resolve-guide-project-media`).
Adjustment clips receive the flattened composite below; use a Fusion clip for independent layers (`resolve-templates-and-batching`).
