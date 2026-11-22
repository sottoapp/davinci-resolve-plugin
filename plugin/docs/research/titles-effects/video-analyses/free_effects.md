
# watch: video report

- **Source:** https://www.youtube.com/watch?v=B3ya3MNMgLs (URL sent to Google)
- **Engine:** gemini-3.7-flash (agentic)
- **Gemini tokens:** 14322

## Answer (from Gemini)

_These are Gemini's observations of the video, not frames you viewed yourself. Relay them as such; rerun with `--engine local` to inspect frames directly._

### Software Used and Version/Edition

* **Editing Software:** **DaVinci Resolve**  
  * *Heard:* The host states, *"If you're editing videos in DaVinci Resolve..."* [00:00] and *"In DaVinci Resolve on the edit page..."* [00:42].  
  * *Seen:* The top macOS menu bar displays **DaVinci Resolve** [00:46].
* **Version / Edition:** **DaVinci Resolve Studio 18.6**  
  * *Seen:* Clearly displayed in the lower-left corner of the Effects panel [00:48–00:50].

---

### Studio vs. Free & Paid Add-Ons Overview

* *Heard:* The creator notes that while the Effects panel differs between the free and Studio versions, **all 6 featured effects are completely free and built-in** [00:58–01:05]. **None are Studio-only, and none are paid third-party add-ons.**

---

### The 6 Free Effects

#### 1. Push
* **Menu Location:** *Toolbox > Video Transitions > Motion > Push* [01:13–01:18].
* **Typical Use:** Replaces repetitive manual keyframing when pushing in background clips, graphics, or titles from off-screen [01:19–01:38].
* **Settings:**
  * Opened via the *Inspector > Transition* tab [01:50].
  * Duration/Length: ~12 frames [01:57].
  * Alignment: Start on Edit (aligned to start of the clip) [01:58].
  * Direction: Left (pushes in from the left) [02:02].
  * Ease: Set to *In & Out* for smoother motion [02:06].
  * Motion Blur, Border, and Feathered Border are left off/unused [02:08].
* **Mistakes Warned About / Workflow Tip:** Avoid manually keyframing positions clip-by-clip. Instead, copy the transition (`Cmd+C`), select the incoming cut of the adjacent title/graphic, and paste (`Cmd+V`) [02:18–02:35].
* **Studio-Only:** No (Free built-in) [00:58–01:05].

---

#### 2. Edge Wipe
* **Menu Location:** *Toolbox > Video Transitions > Wipe > Edge Wipe* [02:58–03:02].
* **Typical Use:** Before-and-after reveals for color grading comparisons or photo editing, and revealing graphics/text across the screen [03:08–03:22, 03:50].
* **Settings:**
  * Angle: Sets reveal direction (0° reveals bottom-to-top; 90° reveals left-to-right) [03:33–03:42].
  * Duration/Length, Easing, and Border to taste [03:44–03:48].
* **Mistakes Warned About / Workflow Tip:** Unlike *Push* (which slides the whole clip into frame), *Edge Wipe* reveals the clip stationary underneath [03:03–03:10]. For grade comparisons, cut the clip in half, disable color grading on the first half, and drop the wipe between them [03:15–03:22].
* **Studio-Only:** No (Free built-in) [00:58–01:05].

---

#### 3. Adjustment Clip
* **Menu Location:** *Toolbox > Effects > Adjustment Clip* [04:12–04:17].
* **Typical Use:** A blank container placed above timeline layers that applies all grades, transforms, or effects to all layers below it. Demonstrated here to build a reusable slow push/zoom for static footage [04:18–04:42].
* **Settings:**
  * *Inspector > Video > Transform (Zoom)*: Keyframe zoom at `1.0` at the very start [04:50].
  * Move playhead forward 10 seconds (`Shift + Right Arrow` 10 times) and set Zoom to `1.2` to set the second keyframe [04:55–05:10].
* **Mistakes Warned About / Workflow Tip:** Avoid keyframing individual static clips one by one. The creator notes it doesn't matter if the adjustment clip itself isn't 10 seconds long when placing the keyframe; trimming or copying it onto other clips provides a constant, uniform zoom rate without manual adjustment [05:02, 05:18–05:32].
* **Studio-Only:** No (Free built-in) [00:58–01:05].

---

#### 4. Drop Shadow
* **Menu Location:** *Open FX > Resolve FX Stylize > Drop Shadow* [05:44–05:49].
* **Typical Use:** Adds a shadow beneath text, logos, or graphics over light/white backgrounds to give them depth and make them hover [05:38–05:59].
* **Settings:**
  * *Strength*: Shadow intensity [06:01].
  * *Angle*: Light direction [06:05].
  * *Distance*: Shadow offset from the source [06:08].
  * *Blur*: Edge softness/hardness [06:11].
* **Mistakes Warned About:** 
  * Warns against relying on the built-in Text Inspector drop shadow because settings cannot be easily copied across other text clips or non-text graphics [06:23–06:33].
  * Warns that if Fusion is used to animate text, native text drop shadows often fail to follow the animation properly [06:36–06:45].
  * Using the Resolve FX version allows copying (`Cmd+C`) and using *Paste Attributes* (`Option+V` > Plugins) across multiple clips at once [06:50–07:02].
* **Studio-Only:** No (Free built-in) [00:58–01:05].

---

#### 5. Camera Shake
* **Menu Location:** *Open FX > Resolve FX Transform > Camera Shake* [07:08–07:14].
* **Typical Use:** Adds organic handheld motion to static tripod shots or subtle floating movement to static explainer graphics/logos [07:18–07:29, 07:46–08:12].
* **Settings:**
  * *Motion Scale*: Reduced to `0.2` or `0.3` [07:35–07:44, 08:00].
  * *Speed Scale*: Reduced to `0.2` or `0.3` [07:35–07:44, 08:00].
* **Mistakes Warned About:** Default shake settings are excessive and look unnatural; dialing both Motion Scale and Speed Scale down to 0.2–0.3 achieves a subtle, realistic result [07:35–07:44].
* **Studio-Only:** No (Free built-in) [00:58–01:05].

---

#### 6. Blanking Fill
* **Menu Location:** *Open FX > Resolve FX Stylize > Blanking Fill* [08:19–08:24].
* **Typical Use:** Automatically creates a scaled, blurred background behind vertical videos or mismatched photos to fill pillarbox bars without manual layer duplication [08:25–08:44].
* **Settings:**
  * *Fill Mode*: Change from default *Stretch* to **Zoom** [08:52–09:00].
  * *Source Crop*: Set all crop sliders to `0` [09:02–09:06].
  * *Edge Blending*: Optional border smoothing [09:07].
  * *Background Blur & Fade*: Adjust background blur and fade amounts; set Fade Color to black or a color matching the scene [09:10–09:22].
  * *Drop Shadow*: Built-in shadow to separate foreground from background [09:24].
  * *Global Blend*: Master opacity slider for the background [09:30].
* **Mistakes Warned About:**
  * **Stretch distortion:** The default fill mode is *Stretch*, which distorts the image; change it to *Zoom* [08:55–09:00].
  * **Unwanted image cropping:** Default source crop can crop the source; reset crop values to `0` [09:02–09:06].
  * **White background fade:** Default fade color is white (which blows out highlights as it fades); change it to black or an image-appropriate color [09:14–09:22].
* **Studio-Only:** No (Free built-in) [00:58–01:05].

---

### General Efficiency Tips
* Use the **Search bar** at the top of the Effects panel instead of scrolling categories [09:48].
* Click the **star icon** to add preferred effects to *Favorites* [09:59].
* Right-click customized Push or Edge Wipe transitions and select **Create Transition Preset** to store them under *Video Transitions > User* [10:04–10:18].
