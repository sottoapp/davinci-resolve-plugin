<!-- Gemini (gemini-3.7-flash) observations of a YouTube video, captured 2026-11-22 via the watch skill. Untrusted evidence: not independently verified frame-by-frame. -->
[watch] asking gemini-3.7-flash…

# watch: video report

- **Source:** https://www.youtube.com/watch?v=QK6pAiaiXO4 (URL sent to Google)
- **Engine:** gemini-3.7-flash (agentic)
- **Gemini tokens:** 50324

## Answer (from Gemini)

_These are Gemini's observations of the video, not frames you viewed yourself. Relay them as such; rerun with `--engine local` to inspect frames directly._

Here is the complete DaVinci Resolve color workflow taught by colorist Graham Hunt in the video:

---

### 1. Color Page Setup, Panels, and Controls Used

During the initial interface walkthrough and subsequent grading steps, the following panels and controls are used:

* **Top Bar Panels & Viewport Controls:**
  * **Viewer** [00:46]: Displays video playback, image scrubbing, and right-click context options.
  * **Node Editor** [01:05]: Houses nodes and serial connections.
  * **Timeline & Clips Buttons** [01:23, 02:18]: Toggled off to maximize working screen space [01:28, 02:30]. Later opened to select clips and copy grades [12:28].
  * **Gallery Panel** [01:36]: Houses grabbed reference stills and PowerGrade albums [01:54].
  * **Image Wipe Button** [01:46, 12:48]: Located on the top viewer toolbar; wipes a reference still across the viewer image for side-by-side comparison.
  * **Effects Library** [01:22, 06:46]: Toggled to access and drag the **Color Space Transform** plugin onto nodes.

* **Lower Color Grading Panels & Tools:**
  * **Primaries - Color Wheels** [02:35]:
    * *Wheels:* **Lift** (shadows), **Gamma** (midtones), **Gain** (highlights), and **Offset** (entire image) [02:41–02:49].
    * *RGB & Luminance Sliders:* Sliders located below each wheel (**Y**, **R**, **G**, **B**) used to adjust individual color channels independently [02:55–03:38, 17:48].
    * *Master Wheels:* Horizontal dial wheels beneath each color wheel adjusting exposure [03:12–03:18].
    * *Bottom Parameter Sliders:* **Highlights** slider used to pull down and protect clipped highlight information [14:40–14:52].
  * **Curves - Custom** [03:45, 15:02]: Default diagonal line between absolute blacks (bottom-left) and absolute whites (top-right) [04:02]. Accessed the 3-dots option menu to enable **Editable Splines** [15:19].
  * **Color Warper** [16:35]: Mode set to **Hue vs Hue / Saturation** grid, with resolution increased from **6** to **8** [16:41].
  * **Scopes Panel** [04:18]:
    * **Waveform** [04:25]: Set to monitor luminance range from 0 (absolute black) to 1023 (absolute white) [04:50].
    * **Vectorscope** [13:34]: Used for color neutrality and skin tone alignment [13:38–14:28].

---

### 2. The 6-Node Order and Function of Each Node

The instructor creates 6 serial nodes using **Right-Click > Add Node > Add Serial** (or keyboard shortcut **Alt + S**) and names them using **Node Label** [05:48–06:18]. 

*(Note: Although numbered 1 to 6 in signal flow, Node 6 is set up first [06:20]).*

1. **Node 1: WB (White Balance)** [06:05]
   * **Role:** Neutralizes unwanted color casts (e.g., removing green/warm casts in shadows) to ensure all subsequent adjustments occur on a clean, neutral image [09:23–09:35, 10:28–11:28].
   * **Control:** Offset color wheel in **Primaries - Color Wheels** (nudging toward blue/magenta) [10:55–11:05]. On clips with extreme color casts, the **Vectorscope** is monitored while adjusting Offset until the trace centers on the crosshairs [13:28–14:20].

2. **Node 2: EXPOSURE** [06:08]
   * **Role:** Sets overall luminance and preserves dynamic range without clipping highlights or crushing shadow detail [08:00, 11:30–12:12].
   * **Control:** Offset Master Wheel (bottom exposure slider) [11:32], confirmed by reading the **Waveform** scope [11:45]. On shots with hot highlights, the **Highlights** slider is pulled down [14:40–14:52].

3. **Node 3: CONTRAST** [06:10]
   * **Role:** Adds depth and contrast to transition from color correction into creative color grading [14:58–15:15].
   * **Control:** **Curves - Custom** with **Editable Splines** enabled [15:19]. Spline bezier handles on the black and white endpoints are adjusted to build a gentle, smooth S-curve [15:28–16:05].

4. **Node 4: HUE ROTATION** [06:11]
   * **Role:** Restricts and defines the color palette, compressing colors toward complementary orange and teal [16:15–17:35].
   * **Control:** **Color Warper** (Hue vs Hue / Saturation, 8x8 resolution grid) [16:40]. Outermost blue control points are dragged down toward cyan/teal; greens and yellows are lifted; magentas are shifted toward red [16:48–17:20].

5. **Node 5: SPLIT TONE** [06:13]
   * **Role:** Introduces complementary color separation into the shadows and highlights to shape faces and add depth [17:38–18:45].
   * **Control:** Individual channel sliders in **Primaries - Color Wheels** [17:48]:
     * *Lift (Shadows):* Pull down Red, slightly lower Green, slightly increase Blue (injecting teal/coolness) [17:50–18:03].
     * *Gain (Highlights):* Lower Blue (injecting yellow warmth), subtract Green (introducing magenta warmth), and balance Red/Blue [18:05–18:28].

6. **Node 6: CST (Color Space Transform)** [06:15, 06:48]
   * **Role:** Transforms flat camera log footage into standard Rec.709 display space [06:33–07:10].

---

### 3. How Color Space Transform (CST) is Used for Flat Footage

* **Setup:** Applied to the final node (Node 6) using the **Color Space Transform** OFX plugin from the Effects panel [06:48–06:51].
  * **Output Color Space:** `Rec.709` [06:58].
  * **Output Gamma:** `Gamma 2.4` [07:00].
  * **Input Color Space:** Camera-specific gamut (e.g., `Blackmagic Design Wide Gamut Gen 4/5`) [07:22].
  * **Input Gamma:** Camera-specific gamma (e.g., `Blackmagic Film Gen 5`) [07:29].
* **Placement Rationale (Why at the End):** 
  * The camera log color space is significantly larger than the smaller Rec.709 viewing space [09:44–09:55].
  * Placing the CST at the end keeps Nodes 1 through 5 working in the wide log space. Grading in the wider space provides maximum data flexibility and prevents signal degradation ("breaking the image"), whereas grading after the CST works in a compressed display space that easily clips or tears [09:55–10:18].

---

### 4. Shot Matching and PowerGrades

* **Shot Matching:**
  1. Open the **Clips** panel, select the second clip, right-click the previously graded clip, and choose **Apply Grade** to copy the full node tree [12:28–12:35].
  2. Return to the graded reference clip, right-click in the **Viewer**, and choose **Grab Still** [12:40].
  3. Return to the target clip, find an matching angle, and click **Image Wipe** [12:48].
  4. Compare the wiped still against the live image, adjusting White Balance and Offset color wheels until skin tones, clothing, and overall tonality match [12:55–13:18].
* **PowerGrades:**
  1. Open the **Gallery** panel and navigate to or add a **PowerGrade** album [01:54, 19:38].
  2. To create a universal creative look: reset the clip-specific nodes (**WB**, **Exposure**, and **Contrast**) so only the creative nodes (**Hue Rotation**, **Split Tone**, and **CST**) remain [19:45–19:54].
  3. Right-click the Viewer and select **Grab Still** to save the grade into the PowerGrade album [19:40].
  4. To use on any other clip or project, drag and drop the PowerGrade thumbnail directly onto the shot [02:00, 19:55].

---

### 5. Beginner Mistakes Warned About

* **Over-complicating Node Trees & Tools:** Relying on too many nodes and fancy tools instead of mastering basic fundamentals and maintaining an organized, repeatable system [01:05–01:15, 19:58–20:10].
* **Grading Downstream of CST:** Grading after the CST in a restricted Rec.709 space, which breaks the image, rather than grading upstream in the wide log space [10:05–10:18].
* **Clipping Dynamic Range:** Failing to monitor the Waveform scope, leading to crushed shadows below 0 or blown highlights clipped above 1023 [04:50–05:00, 08:00–08:08, 11:45–12:05].
* **Aggressive Curve Adjustments:** Tearing or distorting the image with sharp curve points instead of using smooth, subtle spline handles [03:50, 15:08–15:15, 15:55–16:05].
* **Improper Color Warper Adjustments:** Stretching or shortening yellow/green saturation vectors instead of lifting hue cleanly [17:08–17:15].
* **Overdoing Creative Looks (Teal/Split-Tone):** Pushing hue rotation or split tones too aggressively, causing unnatural results or breaking image integrity [18:55–19:15].
