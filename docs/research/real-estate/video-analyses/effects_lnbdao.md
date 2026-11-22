<!-- Gemini (gemini-3.7-flash) observations of a YouTube video, captured 2026-11-22 via the watch skill. Untrusted evidence; not independently verified. Numbers are one instructor's example values. -->
[watch] asking gemini-3.7-flash…

# watch: video report

- **Source:** https://www.youtube.com/watch?v=LnbDaoKNBcs (URL sent to Google)
- **Engine:** gemini-3.7-flash (agentic)
- **Gemini tokens:** 129893

## Answer (from Gemini)

_These are Gemini's observations of the video, not frames you viewed yourself. Relay them as such; rerun with `--engine local` to inspect frames directly._

This step-by-step documentation details how modern real estate video effects are built in DaVinci Resolve based on the video tutorial.

---

### 1. Software Version & Studio Requirements
* **Resolve Studio Requirement:** The speaker never states aloud whether any of the native DaVinci Resolve tools require DaVinci Resolve Studio. However, the interface header in the bottom-left corner of the Edit and Fusion pages clearly displays **`DaVinci Resolve Studio 20`** [00:56, 01:28, 04:50]. 
* **Presets & External Tools:** Several effects demonstrated are custom presets sold by the creator (*Luma Fade, Cine-Whip, Warp Transition, Disappear Effect, Motion Blur Pro, Motion Blur Simple*) [00:10–00:25, 07:15–07:45]. The creator also utilizes **Higgsfield AI** (Cinema Studio / Nano Banana Pro) for generating nighttime shots and virtual room staging [02:05–03:20, 09:30–10:10, 27:50–28:20].

---

### 2. Timeline Beats & Timeline Markers

#### A. Music Beats
* **Transient Matching:** In the Edit page, the audio waveform displays distinct drum/percussion transients and beat drops [01:00–01:10, 11:20–12:20].
* **Placement:** The creator places Retime speed markers directly onto the beat drop or centers the slow-motion segments between consecutive beats [01:02–01:08, 11:25, 11:50, 12:15].

#### B. Timeline Markers
* **Edit-to-Fusion Sync:** The creator places Resolve timeline markers (blue markers on the timeline ruler) at critical edit points—such as the exact start and end frames of a camera dwell [16:10–16:20] or directly on cuts between staging iterations [20:15–20:25].
* **Use in Fusion:** When opening the **Fusion page** and toggling the **Keyframes** panel, timeline markers appear directly on the Fusion ruler [16:30, 17:40, 20:35–20:45]. This allows precise alignment of keyframes (e.g., light sweeps or shake spikes) to timeline events without manually cross-referencing frame numbers.

---

### 3. Speed Ramping & Easing

#### Exact Speed Values & Controls
1. **Day Exterior Shot [00:54–01:38]:**
   * Hits `Ctrl + R` to open **Retime Controls**.
   * Adds a speed point at the cursor; drags the first segment down to **50%**.
   * Extends the second segment into the beat drop, ramping up to **845.28%** (seen in curve) [01:38].
2. **AI Night Exterior Shot [03:25–03:45]:**
   * Uses `Ctrl + R`, adds a speed point, slows the intro to **50%**, and ramps the tail up to the cut.
3. **Living Room Push-in (Reversed) [08:20–08:45]:**
   * Reverses clip playback via clip speed controls.
   * Adds a speed point: ramps the beginning up dramatically, then drags the tail segment down to **-4%** (almost freezing the motion before cutting) [08:35–08:42].
4. **Kitchen Tour (Scrubbing / Multi-Point Speed Ramp) [10:40–13:35]:**
   * Clip reversed again [10:40].
   * Drags out clip speed to scrub quickly to the wide kitchen shot, slows down to **50%** [11:30].
   * Adds speed points on beat markers: ramps into the stovetop, slows down to **50%** or slower [11:58].
   * Ramps into the dining room wide shot, slowing down to **4% to 5%** [12:28–12:40].
   * *Control panel note:* The speaker notes that while he drags handles on the timeline, one can also type exact percentages into the **Inspector > Speed Change** panel for higher precision [13:05].
5. **AI Basement Generations [28:45–29:40]:**
   * Sets **Change Clip Speed** to **~300%** across multiple clips to match the push-in speed of the base camera track.

#### Retime Curve & Easing Curve Setup
* **Opening the Curve Panel:** Below the clip on the timeline, drags open the curve editor tray [01:15–01:25].
* **Selecting Curve Type:** In the dropdown menu on the left (which defaults to *Keyframe Lanes*), switches to **Retime Speed** [01:28–01:32].
* **Applying Bezier Smoothing:** 
  * Clicks the keyframe point and clicks the **Ease In And Out** button on the toolbar [01:34, 13:10].
  * Drags the right handle out horizontally.
  * Holds **`Shift`** to break/independently extend the left handle further outward [01:25–01:32, 13:15–13:30]. This produces an asymmetrical, snappy exponential curve.

---

### 4. Transitions

#### A. Luma Fade Day-to-Night Transition
* **Where Applied:** Edit timeline cut point between the day exterior and AI night exterior [05:10–05:40].
* **Method:** Selects the cut until highlighted green, hits `Shift + Space`, searches for and selects **Luma Fade** [05:12–05:20].
* **Inspector Settings [05:24–05:38]:**
  * **Luma Source:** `Video 2`
  * **Fade Mode:** `Bright First`
  * **Fade Softness:** `0.0`
  * **Invert:** Unchecked
* **Midpoint Timing Adjustment [05:50–06:10]:** To make the transition begin earlier without moving the edit cut, holds **`Ctrl`** (or `Cmd` on Mac) on the left transition handle and drags left. This widens the transition duration while shifting its midpoint to the left.
* **Secondary Use [15:05–15:30]:** Applied at the cut leaving the furnished room back to the empty room to create a natural wipe.

#### B. Faked Speed-Ramp Zoom (Adjustment Clip + Fusion Transform)
* **Where Applied:** Applied to an **Adjustment Clip** placed directly over the cut/speed ramp on the timeline [06:20–07:05, 32:10–32:40].
* **Fusion Setup:**
  * Adds a `Transform` node (shortcut `XF`) between `MediaIn1` and `MediaOut1` [06:32].
  * At frame 0 (start), sets keyframe on **Size** = `1.0` [06:34].
  * At the final frame, sets **Size** = `2.0` [06:38, 32:20].
  * Opens the **Spline** editor, checks `Transform1 > Size`, clicks **Zoom to Fit**, selects keyframes (`Ctrl + A`), and presses **`S`** to smooth [06:45–06:50].
  * Drags the right Bezier handle sharply upward so that the zoom stays flat and aggressively accelerates in the final frames into the cut [06:52–06:58, 32:25].

#### C. Cine-Whip Transition
* **Where Applied:** Placed directly on the edit cut between the kitchen push-in and the kitchen island orbit shot [33:25–33:35].
* **Inspector Settings [33:38–34:25]:**
  * **Duration:** Extended long (3.2 seconds / 76 frames) [33:38].
  * **Distance:** `1.0`
  * **Direction:** Set slightly above horizontal (`181.38°`, where 180° is pure right) to follow an upward curve over the island [33:45].
  * **Curve Mode:** Changed from Fast to `Overshoot` (causes camera to dip/tilt down-left before aggressively whipping right and settling) [33:50, 34:20].
  * **Additional Crop:** Dialed down to `0.005` to eliminate the mirrored edge artifacts generated during the whip [33:55–34:10, 34:20].
  * **Motion Blur:** Checked (built into the transition preset; speaker explicitly notes no external motion blur adjustment clip is needed here) [39:25].

#### D. Warp Transition
* **Where Applied:** Placed directly over timeline cuts between fridge shots and AI staging iterations [26:35, 30:20–30:50].
* **Fridge Shot Settings [26:40–27:00]:**
  * **Warp Mode:** Changed from *Simple Warp 1* to **Strong Warp 2** (twist warp).
  * **Strength:** Dialed down to **`1.38`** for a subtle flick.
* **AI Dining/Basement Iterations Settings [30:20–31:15]:**
  * Alternates directions across cuts: **Left Warp** (Cut 1) → **Right Warp** (Cut 2) → **Left Warp** (Cut 3) to establish visual rhythm.
  * **Strength / Value:** Lowered to **`0.15`**.
  * **Easing In and Out:** Changed from *Expo* to **`Sine`** for a softer, less jarring curve [31:05].

#### E. Disappear Effect
* **Where Applied:** Edit page Generator preset placed on Video Track 2 directly centered over the cut between empty and furnished living rooms [13:55–14:05].
* **Alignment Controls [14:10–14:20, 15:45–15:55]:**
  * Position playhead directly over the cut.
  * Uses the comma (`,`) and period (`.`) keys to nudge the offset until the on-screen **Offset Counter reads `0`**.
  * Unchecks **Frame Count** to hide the diagnostic overlay.
* **Inspector Settings [14:25–14:45]:**
  * **Pivot Point:** Adjusted over the center of the living room furniture.
  * **Aspect:** Widened horizontally to envelop both the couch and the TV.

---

### 5. Light Effects: Stove Shine / Flare

* **Where Applied:** Applied in the **Fusion Page directly on the kitchen video clip** [16:05–19:35].
* **Timeline Preparation:** Places two timeline markers—Marker 1 at the end of the speed ramp into the stovetop; Marker 2 at the start of the next speed ramp out [16:10–16:20].
* **Fusion Node Tree Setup:**
  1. **`Tracker` Node [16:25–17:10]:**
     * Placed after `MediaIn1`.
     * **Operation Mode:** Set from *None* to **Corner Positioning**.
     * Drags the four corner pins to the four corners of the black glass stovetop at Marker 1.
     * Clicks **Track Forward**; clicks **Stop** as soon as the tracker hits Marker 2.
  2. **`Background` Node [17:15–17:30]:**
     * Color changed to pure **White** (`R: 1.0, G: 1.0, B: 1.0`).
     * Output connected to the green foreground input of `Tracker1`.
  3. **`Rectangle` Mask Node [17:25–18:00]:**
     * Connected to the mask input of `Background1`.
     * **Height:** Stretched from top to bottom.
     * **Width:** Decreased to create a narrow vertical slit.
     * **Soft Edge:** Increased significantly for a glowing gradient.
     * **Angle:** Rotated diagonally.
  4. **Keyframe Animation [18:00–18:30]:**
     * At Marker 1, moves `Center X, Y` off-screen to the left of the stovetop; sets keyframe.
     * At Marker 2, moves `Center X, Y` across to the right edge; sets keyframe.
  5. **Spline Easing & Blend Tweaks [18:20–19:25]:**
     * In the **Spline** editor, checks `Rectangle1 > Displacement`, selects keyframes (`Ctrl + A`), presses **`S`**, presses **`T`**, and raises easing from `50` to **`80`** to make the shine sweep through faster [19:10].
     * In `Tracker1 > Settings` tab, lowers **Blend** to **`0.7`** so the shine is translucent rather than harsh solid white [19:15–19:25].
  6. **Performance:** Sets Edit page **Playback > Render Cache > User** to allow the tracked composite to cache and play back at full frame rate [18:35–18:50].

---

### 6. Camera Shake / Wobble Transition

* **Where Applied:** Applied to an **Adjustment Clip** spanning across multiple cuts of the furnished dining room iterations [20:05–20:20].
* **Fusion Tool:** Adds a **`CameraShake`** node [20:30].
* **Settings & Keyframing [20:35–22:25]:**
  * **Deviations:** Set all motion deviations to `0` initially, then raised very slightly for minimal movement [20:35, 21:15].
  * **Edges:** Changed from *Canvas* to **`Mirror`** to eliminate black borders during shakes [21:30].
  * **Speed:** Lowered all the way to **`0.04`** [22:15].
  * **Overall Strength Keyframes [20:40–21:05]:**
    * Keyframed to **`1.0`** exactly on each timeline marker (each cut point).
    * Keyframed to **`0.0`** halfway between markers and prior to the first marker.
  * **Spline Editor Shaping [21:40–22:05]:**
    * Selects `Overall Strength`, hits `Ctrl + A`, presses **`S`**.
    * Selects the base keyframes (value `0.0`), hits **`T`**, and increases both Ease In and Ease Out.
    * Selects the peak keyframes (value `1.0`) and clicks **Remove Handles** to make the shake spike abruptly at each cut.

---

### 7. Clip Alignment & Timing Matches

#### A. Day-to-Night Shot Stabilization (Fusion)
* The AI-generated night dolly shot had wobble. In Fusion:
  * Adds a **`Tracker`** node on a high-contrast window point; tracks forward and reverse [03:50–04:00].
  * Sets **Operation** to `Match Move`, and **Merge** to `Background Only` [04:02].
  * Adds a **`Transform`** node: keyframes `Center X, Y` at start and end to correct rotational drift, then increases **Size** in the middle to crop out transparent edges [04:05–04:30].

#### B. Closed-to-Open Fridge Match Cut (Guides & Alignment Mask)
* **Timeline Overlay [23:30–23:40]:** Overlaps the incoming open-fridge clip 1 frame over the closed-fridge clip and turns opacity down to 0% to visually inspect alignment.
* **Fusion Centering [24:15–24:50]:**
  * Tracks the center cross on the fridge in both clips using a `Tracker` (Match Move → Background Only).
  * Right-clicks viewer → **Guides > Enable Guides / Center** to show the center crosshair [24:35].
  * Adds a `Transform` node to center the fridge on the vertical guideline.
* **Temporary Reference Mask [25:05–26:22]:**
  * Adds a temporary `Background` + `Rectangle` mask node in Clip 1 and aligns the rectangle top with the top edge of the fridge [25:10].
  * Copies (`Ctrl + C`) and pastes (`Ctrl + V`) this reference node into Clip 2's Fusion tree.
  * Uses the rectangle as a visual guide to match the scale and vertical position of the open fridge, scaling up to hide transparent edges [26:00–26:15].
  * Deletes the reference mask from both clips before finishing [26:18].

#### C. Multi-Shot AI Staging Sync
* **Speed Syncing [28:40–29:40]:** Stacks multiple AI generations on Video Tracks 2, 3, and 4 above the base plate. Lowers clip opacity to see both layers simultaneously, then adjusts clip speed to **300%** until moving room features (countertops) travel at identical velocities.
* **Ripple Assembly [29:45–30:15]:** Once synced, cuts and trims each generation sequentially, using `Alt + Drag Down` to drop them into a continuous sequence on Video Track 1.

---

### 8. Motion Blur: Effects & Settings

* **Where Applied:** Always applied to an **Adjustment Clip** placed directly above the speed ramp section on the Edit timeline [35:10–35:25, 36:50].

#### A. Motion Blur Pro
* **Engine:** Uses optical pixel tracking with advanced easing curves [35:30–35:45].
* **Performance:** Very computationally intensive. Requires **Playback > Render Cache > User** for smooth playback [35:55].
* **Limitation / Failure Point:** The speaker warns that when clips are speed-ramped to extreme values (e.g., **1600%**), pixel tracking frequently breaks down and causes visual artifacts [36:15–36:25].

#### B. Motion Blur Simple
Used for reliable, fast rendering without requiring a render cache [36:30–37:25].
* **Zoom Mode [37:00–38:30]:**
  * **Mode:** `Zoom`
  * **Push-in / Zoom in:** **Motion Blur Scale** = `+1.7` [37:08] or `+0.6` [38:10].
  * **Pull-out / Zoom out (Reverse):** **Motion Blur Scale** = negative value (e.g., **`-1.53`** or **`-2.267`**) [37:40, 38:40].
  * **Pivot Point:** Centered or manually placed over the focal point (e.g., set directly over the stovetop) [38:15].
* **Direction Mode [38:35–38:55]:**
  * **Mode:** `Direction`
  * **Motion Blur Scale:** Dialed to `0.879` to `1.0` [38:42–38:46].
  * **Direction:** Set to `0.0` (or `277.4°`) to match lateral camera pan direction.
  * **Strength:** Reduced for subtlety [38:45].

---

### 9. Inventory of Named Tools, Effects, and Application Levels

| Item Name | Type | Applied To | Exact Settings / Controls Demonstrated |
| :--- | :--- | :--- | :--- |
| **Retime Controls / Retime Speed** | Resolve Native Edit Tool | Timeline Video Clip | Speeds: 50%, -4%, 4–5%, ~300%, ~845%; Bezier handles smoothed with *Ease In And Out* + `Shift` extension [00:54–01:38, 08:35, 11:30–13:30]. |
| **Inspector Speed Change** | Resolve Native Edit Panel | Timeline Video Clip | Clip direction reversed; speed typed numerically for precision [08:20, 10:40, 13:05, 29:00]. |
| **Tracker (Match Move)** | Resolve Native Fusion Tool | Video Clip in Fusion | Operation: *Match Move*; Merge: *Background Only*; stabilizes AI shake and aligns fridge [03:55–04:05, 24:25–24:30]. |
| **Tracker (Corner Positioning)** | Resolve Native Fusion Tool | Video Clip in Fusion | Operation: *Corner Positioning*; 4 corner pins on stovetop; `Blend` in Settings reduced to `0.7` [16:25–17:10, 19:15–19:25]. |
| **Transform (`XF`)** | Resolve Native Fusion Tool | Adjustment Clip / Clip | Keyframed `Size` 1.0 to 2.0 with sharp Spline curve; keyframed `Center X, Y` for alignment [04:05–04:30, 06:32–06:58, 24:50, 32:20]. |
| **CameraShake** | Resolve Native Fusion Tool | Adjustment Clip in Fusion | Edges: *Mirror*; Speed: `0.04`; deviations minimal; `Overall Strength` keyframed 0.0 to 1.0 with sharp peaks [20:30–22:25]. |
| **Background + Rectangle** | Resolve Native Fusion Tool | Video Clip in Fusion | White color; mask width narrowed, soft edge raised, angled, displacement keyframed across markers [17:15–18:30]. |
| **Luma Fade** | Creator Transition Preset | Edit Cut Point | Luma Source: `Video 2`; Fade Mode: `Bright First`; Softness: `0.0`; Invert: unchecked; midpoint offset via `Ctrl + Drag` [05:15–06:10, 15:05–15:30]. |
| **Cine-Whip** | Creator Transition Preset | Edit Cut Point | Distance: `1.0`; Direction: `181.38°`; Curve Mode: `Overshoot`; Additional Crop: `0.005`; Motion Blur: On [33:25–34:25, 39:25]. |
| **Warp Transition** | Creator Transition Preset | Edit Cut Point | Modes: *Strong Warp 2* (Strength: `1.38`) [26:50]; *Left Warp* / *Right Warp* (Strength: `0.15`, Easing: `Sine`) [30:20–31:15]. |
| **Disappear Effect** | Creator Generator Preset | Track 2 above Edit Cut | Nudged with `,` and `.` until Offset = 0; Frame Count: Off; Pivot Point on room; Aspect widened [13:55–14:45, 15:45–15:55]. |
| **Motion Blur Pro** | Creator Fusion Effect | Adjustment Clip | Pixel tracking enabled; requires Render Cache User [35:25–36:25]. |
| **Motion Blur Simple** | Creator Fusion Effect | Adjustment Clip | Mode: *Zoom* (Scale `+1.7`, `-1.53`, Pivot on stove) or *Direction* (Scale `0.88–1.0`, Direction `0.0`) [36:50–39:15]. |

---

### 10. Warnings and Parameter Restraint

While the tutorial does not contain a single dedicated lecture slide warning against the overuse of transitions across a video, the creator issues repeated cautions regarding keeping individual effect intensities minimal:
1. **Camera Shake [21:15–21:25]:** Explicitly cautions against heavy movement: *"You don't need a whole lot of movement, just something to add some camera shake... I'm going to keep it pretty minimal, maybe a little bit less even."*
2. **Warp Strength [26:55, 30:55–31:10]:** Cautions that default warp strengths are jarring, dialing Strong Warp down to `1.38` (*"barely warping at all"*) and AI iterations down to `0.15`, switching easing from *Expo* to *Sine* because *Expo* felt *"a little bit too extreme."*
3. **Motion Blur Intensity [38:45]:** Notes when applying lateral motion blur: *"we can decrease the strength because we don't need a ton of motion blur."*
4. **Pixel Tracking Breakdown [36:15–36:25]:** Warns that at speed ramp rates exceeding 1600%, optical flow / pixel tracking algorithms in motion blur will break and produce unsightly tearing, requiring a fallback to Simple Motion Blur.

---

### 11. Clarifications and Items Not Shown

* **Building Presets from Scratch:** The creator does not show the underlying Fusion node graphs for the *Luma Fade, Cine-Whip, Warp Transition, Disappear Effect,* or *Motion Blur* presets within this video, explicitly stating that each is sold on his store and that separate dedicated tutorials exist on his channel detailing how to build them from scratch [00:15, 04:40, 07:30–07:45, 34:55, 40:30–40:45].
* **AI Generation Steps:** Staging prompts for the dining room [19:40] and basement generations 2–4 [28:15] are skipped or summarized rather than shown in full.
* **Audio Track Source:** The music track is pre-placed on Audio 1 with cut points and beat transients; its licensing and import settings are neither discussed nor shown.
