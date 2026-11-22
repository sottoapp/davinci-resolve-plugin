<!-- Gemini (gemini-3.7-flash) observations of a YouTube video, captured 2026-11-22 via the watch skill. Untrusted evidence; not independently verified. Numbers are one instructor's example values. -->
[watch] asking gemini-3.7-flash…

# watch: video report

- **Source:** https://www.youtube.com/watch?v=Tpz3Zbi-obk (URL sent to Google)
- **Engine:** gemini-3.7-flash (agentic)
- **Gemini tokens:** 168824

## Answer (from Gemini)

_These are Gemini's observations of the video, not frames you viewed yourself. Relay them as such; rerun with `--engine local` to inspect frames directly._

Here is the complete, step-by-step documentation of how the clean white real estate look is achieved in DaVinci Resolve based on the video.

---

### 1. Color Management & Clip Setup

#### A. Timeline Color Management Settings
* **Where to access:** Right-click the timeline in the media bin $\rightarrow$ **Timelines** $\rightarrow$ **Timeline Settings** (00:30–00:34).
* **Settings dialog configuration:**
  * Uncheck **Use project settings** (00:35–00:37).
  * Go to the **Color** tab (00:37).
  * **Option 1 (Custom manual settings as seen on screen at 00:38–00:44):**
    * *Color science:* **DaVinci YRGB Color Managed**
    * *Color processing mode:* **Custom**
    * *Timeline working luminance:* **Custom / 4000 nits**
    * *Timeline color space:* **DaVinci WG/Intermediate**
    * *Output color space:* **Rec.709-A** (as seen in dropdown at 00:38–00:44)
    * *Limit output gamut to:* **Output color space**
    * *Use inverse DRT for HDR to SDR conversion:* Checked
    * *Color space aware grading tools:* Checked
  * **Option 2 (Automatic simplified workflow recommended by speaker at 00:44–00:52):**
    * *Color science:* **DaVinci YRGB Color Managed**
    * *Automatic color management:* Checked
    * *Color processing mode:* **SDR**
    * *Output color space:* **SDR Rec.709**
    * The speaker explains that this yields a virtually identical starting point.

#### B. Clip Input Color Space
* In the Media Bin/Edit page, select footage clips, right-click $\rightarrow$ **Input Color Space** $\rightarrow$ select the camera profile (01:05–01:17).
* In the tutorial, the creator selects **Panasonic V-Log** (01:15–01:20). Once set, Resolve automatically transforms the logarithmic capture into the working color space.

---

### 2. Full Node Tree Architecture & Order of Operations

The color grade uses a 10-node structure organized into serial stages and two parallel mixer groups (01:30–03:04):

```
Media In
   │
[Node 1: NR] (Serial)
   │
[Node 2: BAL] (Serial)
   │
[Node 3: EXP] (Serial)
   │
┌──┴─────────────────────────────────┐  (Parallel Mixer Group 1)
│ [Node 4: CONT]     (Custom Curves) │
│ [Node 5: SAT]      (HSV Gain)      │
│ [Node 6: CURVES]   (Hue vs Hue)    │
│ [Node 7: SKIN]     (Hue vs Hue)    │
└──┬─────────────────────────────────┘
   │ [Parallel Mixer 1]
   │
┌──┴─────────────────────────────────┐  (Parallel Mixer Group 2)
│ [Node 8: SAT C]    (Lum/Sat vs Sat)│
│ [Node 9: GRADIENT] (Linear Window) │
│ [Node 10: DETAIL]  (Midtone Detail)│
└──┬─────────────────────────────────┘
   │ [Parallel Mixer 2]
   │
Media Out
```

* **Keyboard shortcuts used:** 
  * `Alt + S`: Add Serial Node (01:43, 02:04, 02:37).
  * `Alt + P`: Add Parallel Node (02:18, 02:27, 02:46, 02:53).

---

### 3. Node-by-Node Tools, Settings, and Operations

#### Node 1: `NR` (Noise Reduction)
* **Purpose:** Address sensor noise before applying contrast and sharpening (01:36–01:41).
* **Tools & Settings:** The speaker names the node `NR` and explains its intended use, but does not apply any specific spatial or temporal noise reduction parameters during this tutorial clip (01:39).

#### Node 2: `BAL` (Color Balance / White Balance)
* **Node Color Space / Gamma override:** Right-click Node 2 $\rightarrow$ **Gamma** $\rightarrow$ select **Linear** (04:17–04:21). The speaker notes linear gamma is the most accurate space to balance color.
* **Key palette adjustment:** Open the **Key** palette $\rightarrow$ set **Key Output Gain** to `0.200` (down from default `1.000`) (04:29–04:34).
  * *Reason:* Decreasing the key output gain slows down the strength of the color wheels, giving much finer, granular control over color adjustments without extreme shifts (04:35–05:01).
* **Balancing tool:** **Primaries** $\rightarrow$ **Color Wheels** $\rightarrow$ **Gain** wheel (04:41–04:45).
* **Scoping & Verification:**
  * Open the **Vectorscope** and set it to **2x zoom** (05:43–05:48). The speaker relies on scopes rather than the eyes, because an eye adapted to warmth will perceive a true neutral image as too cool (05:25–05:39).
  * Identify off-center trace (e.g., traces leaning into the yellow/green quadrant) and push the Gain color wheel in the opposite direction (e.g., towards magenta/blue) until the base aligns in the dead center (05:49–06:00).
  * Use the **Qualifier / Eyedropper** on the viewer: Hover the mouse over a white wall/cabinet; a small circle/crosshair appears inside the vectorscope. Adjust Gain (and Tint if needed) until that circle is centered directly on the vectorscope crosshairs (06:01–06:26, 16:42–17:08).

#### Node 3: `EXP` (Exposure)
* **Placement logic:** Placed before the contrast node so contrast is always applied predictably to an evenly exposed image (06:35–06:42).
* **Palette & Tool:** **High Dynamic Range (HDR)** palette $\rightarrow$ **Global** wheel $\rightarrow$ **Exp** (Exposure) slider (06:43–06:53).
* **Target metric on Waveform:** The primary interior elements (countertops, couches, tables) should sit between **60 and 80 IRE** on the Waveform monitor (06:54–07:18).

#### Node 4: `CONT` (Contrast)
* **Step A: Locking the Middle Gray Anchor Point (Crucial Technique):**
  1. Go to the preceding node (`EXP`) (03:40).
  2. In the **HDR** palette $\rightarrow$ **Global**, set **Contrast** to `0.00` and **Saturation** to `0.00` (03:43–03:51). The viewer turns into a flat, uniform middle-gray field.
  3. Select Node 4 (`CONT`), open the **Curves** palette $\rightarrow$ **Custom Curves** (03:52).
  4. Unlink the curves so only the **Y** (Luminance) channel is active (03:26–03:31) to prevent contrast adjustments from introducing unwanted saturation shifts into the walls.
  5. Click the eyedropper tool anywhere in the middle-gray viewer. This places an anchor point at the exact middle gray value on the Y curve line (03:53–03:58).
  6. Return to Node 3 (`EXP`), right-click $\rightarrow$ **Reset Node Grade** to restore exposure (04:00–04:03). The anchor point remains locked on Node 4.
* **Step B: Contrast S-Curve Shaping:**
  * Keep the middle-gray anchor point untouched to preserve image exposure (07:22–07:31).
  * **Shadows:** Lift the bottom-black anchor slightly off the absolute floor so blacks are not crushed pure black; add a gentle downward dip between black and middle gray for shadow punch while keeping the floor and deep shadows airy (07:32–08:04).
  * **Highlights:** Lower the top-right white point to tame bright window blowout; introduce a gradual S-curve bend above middle gray (08:05–08:26).
  * *Important visual boundary:* Avoid flattening the highlights too much; if lowered too far, ceiling seams, trim creases, and architectural lines blend into an indistinct white blob (08:33–08:57).

#### Node 5: `SAT` (Cinematic Saturation)
* **Color Space & Channel isolation:**
  * Right-click Node 5 $\rightarrow$ **Color Space** $\rightarrow$ select **HSV** (09:23–09:26).
  * Right-click Node 5 $\rightarrow$ **Channels** $\rightarrow$ uncheck **Channel 1** (Hue) and uncheck **Channel 3** (Value), leaving only **Channel 2** (Saturation) active (09:27–09:33).
* **Tool:** Go to **Primaries** $\rightarrow$ **Color Wheels**, use the master **Gain** wheel slider (09:39–09:44).
* **Values:**
  * The speaker raises Gain to `1.70`, then reduces it to `1.60` for social media real estate delivery (09:50–10:01). For footage containing human skin tones, he lowers this to `1.40` (26:55–26:59).

#### Node 6: `CURVES` (Hue Harmonization)
* **Palette & Tool:** **Curves** palette $\rightarrow$ **Hue Vs Hue** (10:08–10:10).
* **Blues adjustment:** Click the blue color swatch, raise the curve point (Hue Rotate: `+15.00` to `+17.00`, seen at `+17.00` at 10:14). This rotates deeper royal blues towards clean real estate teal (10:12–10:17).
* **Yellows adjustment:** Click the yellow color swatch, pull the curve point down (Hue Rotate: `-10.50`, seen at 10:21). This shifts sickly green-yellows towards warm, pleasing reddish-orange tones (10:18–10:24).

#### Node 7: `SKIN` (Skin Tone Adjustment or Shadow Separation)
* **When a subject is in the shot:** 
  * Open Vectorscope settings $\rightarrow$ enable **Show Skin Tone Indicator** (27:08–27:14).
  * Open **Curves** $\rightarrow$ **Hue Vs Hue**, click on the person's face to create anchor points, broaden the selection range, and drag the center point down until the vector scope trace aligns squarely on the skin tone indicator line (27:23–27:42).
* **When no subject is in the shot (used for heavy color casts, e.g., Clip 3):**
  * In shots suffering from yellow monochromatic contamination (such as basement suites), use this node in the **HDR** palette to push cool cyan/blue into the **Black**, **Dark**, and **Shadow** wheels to separate shadows from warm wall highlights (24:00–24:41).

#### Node 8: `SAT C` (Saturation Control — The Core White Engine)
This node does the primary work of neutralizing walls, ceilings, and reflections (10:48–10:56).

1. **Curves $\rightarrow$ Lum Vs Sat (Luminance vs Saturation):**
   * Identify where the wall luminance sits (typically the upper luminance band above 0.50) (11:00–11:15).
   * Pull the rightmost curve handle (high luminance / whites) down to `0.00` saturation (11:14–11:16).
   * Place an anchor point around luminance `0.49`–`0.50` at normal saturation (`1.00`), creating a steep drop-off towards zero saturation between `0.80` and `1.00` (11:35–11:45). This completely desaturates ceilings, upper walls, and white cabinet faces while leaving wood floors and midtone furniture fully saturated.
   * *Metric on scopes:* When viewing the colorized Waveform monitor, the upper highlight peaks should turn neutral white instead of showing split RGB color fringing (11:50–12:00).
2. **Curves $\rightarrow$ Sat Vs Sat (Saturation vs Saturation):**
   * fehér walls and architectural planes retain faint color contamination at low saturation levels.
   * Use the eyedropper on the wall to locate its saturation position on the horizontal axis (12:06–12:15).
   * Pull the far-left bottom curve point flat along the bottom floor (`0.00` saturation) up to roughly `0.08`–`0.10` input saturation, ramping back up to `1.00` (12:16–12:25).
   * *Result:* Every low-saturation tint (ambient blue window reflections, ceiling bounce warmth, refrigerator steel reflections) is crushed to absolute neutral monochrome (12:26–12:52).

#### Node 9: `GRADIENT` (Top-Down Ceiling Desaturation)
* **Palette & Tool:** **Window** palette $\rightarrow$ select **Linear Window** (gradient) (13:05–13:10).
* **Placement:** Position the linear gradient at the top of the frame oriented downwards, covering the ceiling and upper walls, with heavy feathering/softness (13:11–13:30).
* **Adjustment:** Go to **Primaries** $\rightarrow$ **Color Wheels**, drop **Saturation** from default `50.00` down to `30.00` (a 20-point reduction) (13:30–13:39).
* **Purpose:** Removes lingering subtle hue gradients clinging to the upper corners of the ceiling (12:56–13:04).

#### Node 10: `DETAIL` (Highlight Texture Recovery)
* **Palette & Tool:** **Primaries** $\rightarrow$ **Color Wheels** (page 1/2) $\rightarrow$ **Midtone Detail** (`Mid Dtl`) slider (14:13–14:18).
* **Value:** Increase `Mid Dtl` from `0.00` to `50.00` (14:18).
* **Purpose:** Restores micro-contrast and sharpness around pendant lights, chandeliers, and textured wall boundaries that were softened by contrast compression and desaturation (14:08–14:23).

---

### 4. Target Look for Whites and Walls

* **Chromatic neutrality:** On the vectorscope, white walls, ceilings, and trim must collapse into a tight point at the absolute center of the crosshairs (06:05–06:25, 19:45–19:53).
* **Waveform trace appearance:** On the colorized Waveform monitor, the upper bands representing the walls and ceilings should render as pure white rather than separated red, green, or blue traces (11:51–12:00).
* **Ceiling & trim definition:** Whites must remain bright, airy, and clinical, but the contrast curve must preserve the physical creases, corner joints, and trim lines of ceilings (08:35–08:55).
* **Appliance reflections:** Stainless steel refrigerators and glossy surfaces lose warm/cool ambient casts and reflect pure clean white (12:40–12:51).

---

### 5. Handling of Windows and Overexposed Highlights

* **Snow / Blown Windows (Clip 1):** Exterior snow and bright sun blew out windows with irrecoverable detail. In Node 4 (`CONT`), the high-end curve is lowered and smoothed to take the harsh edge off the blowout without clipping it into gray (08:05–08:55).
* **Color-Shifted / Teal Window Edges (Clip 3):** Under heavy balancing to correct severe interior tungsten warmth, blown window highlights break and turn unnatural cyan/teal (21:18–21:30). The speaker leaves them temporarily distorted during balancing, knowing that Node 8 (`SAT C`) via **Lum vs Sat** and **Sat vs Sat** will completely strip the saturation from those highlight peaks, turning them cleanly white (21:28–21:35, 22:49–23:20).

---

### 6. Handling of Skin Tones & Real Estate Agents

When a realtor or person is in the frame (Clip 4, 25:45–28:45), four workflow adjustments are mandatory:

1. **Exposure targeting (Node 3 `EXP`):** Adjust exposure until the subject's face highlights register between **60 and 80 IRE** on the Waveform monitor (26:15–26:32).
2. **Saturation moderation (Node 5 `SAT`):** Reduce the HSV Gain multiplier from `1.60` down to `1.40` so skin tones do not look hyper-saturated or sunburned (26:52–27:00).
3. **Hue vs Hue Skin Alignment (Node 7 `SKIN`):** Enable the **Skin Tone Indicator** on the vectorscope. Eyedrop the subject's skin tone on the Hue vs Hue curve and adjust the center control point until the vectorscope trace aligns directly along the skin line (27:08–27:44).
4. **Saturation Control relaxation (Node 8 `SAT C`):** The aggressive `Lum vs Sat` wall curve will strip color from facial highlights, making the subject appear sickly/washed out (27:45–27:58). Shift the luminance cutoff point further to the right so it affects only the highest specular luminance (the white walls) while leaving skin tones completely untouched (27:59–28:25).
5. **Disable Ceiling Gradient (Node 9 `GRADIENT`):** The linear gradient power window must be **turned off completely**; otherwise, it cuts through the subject's head and desaturates their face and hair (28:26–28:35).

---

### 7. LUTs and Color Management Usage

* **In the tutorial grades:** **No 3D LUTs are used** in the node tree to produce the clean white look. The look is built manually on top of DaVinci Resolve’s native Color Management system (00:25–01:25).
* **Skillshare integration:** At 15:30–15:40, the creator notes that while taking a Skillshare color grading class, he learned techniques to enhance DaVinci Resolve’s built-in LUTs, but clarifies that his clean white real estate look relies on the node pipeline shown.

---

### 8. Pitfalls and Troubleshooting Across Scenarios

| Area / Node | Pitfall Observed | Impact on Image | Speaker's Fix / Workaround |
| :--- | :--- | :--- | :--- |
| **Eyeball Balancing** | Relying on the eye instead of scopes (05:25–05:39) | Eyes adapt to warm casts; an objective neutral image will look falsely cool. | Rely on the Vectorscope and Qualifier eyedropper crosshairs (05:35–06:25). |
| **Contrast (`CONT`)** | Pulling down the top highlight curve too aggressively (08:33–08:57) | Architectural creases and ceiling seams disappear into an unnatural flat wash. | Keep the top curve high enough that trim and corner seams remain distinctly visible (08:48–08:58). |
| **Saturation (`SAT C`)** | Overextending `Lum vs Sat` into midtones (18:43–18:55) | Hardwood flooring and warm tile lose their natural color and look dead/gray. | Limit the drop-off to the upper highlights, preserving saturation in floor tones (18:50–19:05). |
| **Extreme Balancing** | Pushing Gain too hard in severely warm footage (21:45–22:00) | Image color tears and "breaks" into digital ceiling blotches. | Stop Gain before color tearing occurs; use HDR Shadow blue injection to split tones (21:50–22:03, 24:00–24:41). |
| **Realtors / Skin** | Running default `Lum vs Sat` with humans in frame (27:45–27:58) | Desaturates skin highlights, leaving the subject looking washed out or pale. | Move the luminance threshold to the right, targeting only pure white walls (28:00–28:25). |
| **Realtors / Skin** | Leaving the top-down Gradient active with a subject (28:26–28:35) | Gradient covers the subject, draining color from their head, face, and clothing. | Disable Node 9 (`GRADIENT`) entirely whenever people are present (28:28–28:35). |

---

### 9. Resolve Studio vs. Free Version & Visual Clarifications

* **DaVinci Resolve Studio Requirements:**
  * *Heard vs. Seen:* The speaker **does not state verbally** that DaVinci Resolve Studio is required for any part of this tutorial.
  * *Seen in UI:* The UI watermark in the lower left corner reads **"DaVinci Resolve Studio 18"** (seen at 00:25, 04:30, 09:40).
  * *Feature limitation note:* Node 1 (`NR`) is designated for Noise Reduction. Native Temporal and Spatial Noise Reduction in DaVinci Resolve is an exclusive **Studio-only** feature; users of the free version of DaVinci Resolve cannot use the native Resolve NR tool, though all other nodes (Linear Gamma Balance, HDR Palette, Custom Curves, HSV Saturation, Power Windows, Midtone Detail) work in the free version.
* **Unclear / Not Fully Shown Settings:**
  * *Node 1 (`NR`):* The creator names and positions the `NR` node (01:36) but bypasses adjusting its parameters because the demonstration footage did not require denoising. Specific NR settings (thresholds, frames, spatial/temporal radii) are not shown or discussed.
  * *Custom Color Management dropdown list (00:38–00:44):* While the panel is visible for a few seconds, the speaker moves through it quickly and directs most users to simply use **Automatic Color Management** set to SDR Rec.709 (00:44–00:52).
