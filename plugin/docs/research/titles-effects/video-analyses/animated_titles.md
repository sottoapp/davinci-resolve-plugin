
# watch: video report

- **Source:** https://www.youtube.com/watch?v=aViVullwtYU (URL sent to Google)
- **Engine:** gemini-3.7-flash (agentic)
- **Gemini tokens:** 20378

## Answer (from Gemini)

_These are Gemini's observations of the video, not frames you viewed yourself. Relay them as such; rerun with `--engine local` to inspect frames directly._

### Software Used & Version/Edition Proof
* **Software:** DaVinci Resolve.
* **Version & Edition:** **DaVinci Resolve Studio 19 (Beta 3)**.
  * **Heard:** The host explicitly states: *“here we are in DaVinci Resolve 19 beta 3. So just to let you know that's the one I'm using”* [00:39–00:44].
  * **Seen:** In the macOS dock, the application tooltip clearly displays **“DaVinci Resolve Studio 19”** [00:39–00:44].

---

### Menus, Effects, Settings & Licensing

#### 1. Native / Built-in Tools (Standard / Free DaVinci Resolve)
*None of these built-in titles or transitions require the paid Studio license (they are part of standard Resolve):*
* **Standard Title / Text** [01:25–03:40]: Found under `Effects > Toolbox > Titles`. Configured in `Inspector > Video > Title`. Provides **Rich Text** formatting to change font size and style per line independently [03:11–03:28].
* **Background Setting** [03:49–04:25]: Under `Inspector > Background`, toggle on, increase `Height` and `Width`, adjust `Center X/Y` offset, `Opacity`, and `Color`.
* **Fade Handles** [04:35–05:00]: Built-in white markers on the clip ends in the timeline dragged inward to create fade-ins and fade-outs.
* **Timeline Keyframing** [05:37–06:48]: Fast-forward 1 second (pressing `+ 1 . Enter`) [05:40–05:54], enable the diamond keyframe toggle next to `Position` in the Inspector [06:00–06:12], move playhead to start, and slide the X-axis off-screen [06:12–06:21]. Right-click timeline keyframes to select `Ease Out` and `Ease In` [06:31–06:48].
* **Video Transition ("Push")** [06:56–08:05]: Found under `Effects > Toolbox > Video Transitions > Push`. Dragged to the front and back of the title clip [07:03–07:15]. Settings in Inspector adjusted to `Push Right` for the exit [07:20–07:44], with transition curve easing and motion blur enabled [07:58–08:05].
* **Standard "Lower 3rd" Title** [08:35–09:25]: Under `Effects > Toolbox > Titles > Lower 3rd`. Provides two independent text lines (Title and Subtitle/Sample Text) with built-in background/drop shadow options.
* **Fusion Title ("Clean and Simple Lower Third")** [16:08–16:45]: Under `Effects > Toolbox > Titles > Fusion Titles`. Features pre-built animation and a customizable branding line color in the Inspector.
* **Render Cache** [15:08–15:20]: `Playback > Render Cache > Smart` to smoothly preview animated titles.

#### 2. Paid Third-Party Add-ons (MotionVFX)
*These are commercial third-party plugins installed and managed via the **mInstaller** application [18:18–18:35]:*
* **mTutorial Pack – Lower Third Title** [19:36–21:05]: Found under `Effects > Titles > MotionVFX > mTutorial`. Includes toggle controls in the Inspector for `In` and `Out` animations [20:45–21:05], subtitle bar color, and font adjustments [22:10–22:25].
* **mEssentials Pack – Typography Title** [24:15–26:35]: Found under `Effects > Titles > MotionVFX > mEssentials > Typography`. Includes customizable fonts, scale, positioning, and an image/logo drop zone (`Logo > Open`) [25:50–26:20].

---

### How to Build Animated Titles & Lower Thirds

1. **Text+ vs. Standard Titles (Fonts & Sizing):**
   * In a standard text title, you can highlight individual lines in the viewer to change fonts and sizes independently due to rich text support [03:11–03:28].
   * In **Text+**, changing font size in the Edit Inspector changes the whole text block globally [11:05–11:15]. To resize/re-font individual lines in Text+, go to the **Fusion Page** [11:21], right-click in the text entry field, enable **Character Level Styling** [11:34–11:45], open the **Modifiers** tab [11:47], highlight only the desired text line in the Fusion viewer, and adjust its specific size, font, tracking, or anchor [11:50–12:18].
2. **Keyframing & Splines (Fusion Titles):**
   * Move the playhead 25 frames forward (1 second at 25 fps) [12:32–12:42], and click the keyframe diamond next to `Center X/Y` in the `Layout` tab [12:45–12:55].
   * Move back to frame 0 and drag the X-axis off-screen [13:00–13:08].
   * Set keyframes near the clip end (e.g., frame 150) and final frame to slide off-screen [13:10–13:35].
   * Open the **Spline** panel [13:51], check the displacement curve, frame it to view, select keyframe pairs, and click the **Smooth** button (or press `S`) to generate bezier easing curves [14:00–14:40].
3. **Safe Areas:**
   * **Plain Statement:** The video **does not show, discuss, or mention Safe Areas** (neither Action Safe nor Title Safe guides).

---

### Mistakes & Gotchas Warned About
* **Text+ Sizing Gotcha:** Do not try to independently resize lines of a Text+ title directly on the Edit page; doing so alters the entire title. You must use the *Character Level Styling* modifier inside the Fusion page [11:05–11:45].
* **Push Transition Exit Glitch:** Dragging the default Push transition onto the exit end of the title pushes in the wrong direction; you must manually inspect the end transition and set its direction to `Push Right` [07:12–07:44].
* **Direct On-Screen Transformation:** Grabbing and moving Text+ directly inside the Edit viewer requires setting the viewer overlay dropdown to **Fusion Overlay** [10:50–11:00].
* **Third-Party Performance Drops:** Heavy pre-built motion graphics packs (like MotionVFX) can cause playback stutter on slower computers; ensure `Playback > Render Cache > Smart` is turned on to allow titles to render to cache (blue line) [15:08–15:20, 27:18–27:42].
* **Pre-built Lower 3rd Independent Placement:** The built-in Lower 3rd title requires positioning the header and subtext lines independently rather than together as a single block [09:03–09:15].
