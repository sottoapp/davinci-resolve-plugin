<!-- Gemini (gemini-3.7-flash) observations of a YouTube video, captured 2026-11-22 via the watch skill. Untrusted evidence; not independently verified. Numbers are one instructor's example values. -->
[watch] asking gemini-3.7-flash…

# watch: video report

- **Source:** https://www.youtube.com/watch?v=1tJqoS7G5Ks (URL sent to Google)
- **Engine:** gemini-3.7-flash (agentic)
- **Gemini tokens:** 112770

## Answer (from Gemini)

_These are Gemini's observations of the video, not frames you viewed yourself. Relay them as such; rerun with `--engine local` to inspect frames directly._

This real estate color grading and finishing workflow in DaVinci Resolve 17 is presented by Marcelo (*The Modern Filmmaker*).

---

### 1. Core Guideline: "Simple and True to Life"
* **Spoken & Context [02:37–04:10]:** 
  * Marcelo emphasizes two cardinal rules for real estate video: **simple and true to life**.
  * **Why it matters:** Real estate videos are meant to sell properties to buyers, including high-end/million-dollar clients who may view videos from out of state before touring in person [02:45–03:05]. If the colorist creates an exaggerated or stylized look that deviates from reality, buyers visiting the property will feel misled, upsetting both the listing and visiting realtors [03:05–03:35].
  * **Dynamic range difference:** Marcelo notes that cameras capture dynamic range differently than human eyes; bright windows can make interior rooms appear unnaturally dark or harsh on video, whereas human eyes see interiors much brighter and cleaner [03:45–04:10, 13:15–13:30].

---

### 2. Center, Straighten, and Crop
* **Workspace & Panels [00:48–01:28, 14:48–15:25]:**
  * **Page:** Edit page [00:48].
  * **Panel:** **Inspector** > **Video** tab > **Transform** section.
* **Exact Controls Used:**
  * **Yaw [00:51–01:05, 15:05–15:15]:** Dragged to the left (set to approximately `-10.000` in Clip 1 [01:00]) to fix camera tilt and square vertical lines (e.g., leveling cabinets to the frame).
  * **Zoom (Crop) [01:05–01:12, 15:10–15:18]:** Because adjusting Yaw creates black blanking bars along the frame edges, Zoom is increased (set to `1.070` in Clip 1 [01:08]) to crop in and eliminate the black borders.
  * **Rotation Angle [01:18–01:26, 15:18–15:24]:** Adjusted slightly (visually around `-0.80°` in Clip 1) to level the floor and ceiling lines.

---

### 3. Node Order and Graph Architecture
The primary node tree demonstrated across the clips consists of:
1. **Node 1 (Pre-LUT):** White Balance, Exposure, or Shadow lift prior to the conversion LUT [01:35, 04:10, 05:40–06:05, 16:05–17:15].
2. **Node 2 (LUT):** Base conversion LUT (`Blackmagic Design Gen 5 Film to Extended Video`) [01:58–02:15, 15:48–16:00].
3. **Node 3 (Soften):** Midtone Detail reduction [06:33–06:50, 17:20–17:30].
4. **Node 4 (Contrast):** Custom Curves targeted contrast [06:54–08:45, 17:30–18:50].
5. **Node 5 (Sharpen – Broad Radius):** Sharpening for structural edges [08:48–09:35, 19:15–19:35].
6. **Node 6 (Sharpen – Fine Radius):** Sharpening for fine micro-textures [09:36–10:40, 19:35–19:48].
7. **Node 7 (Glow 1):** Soft Light glow for ambient window wrap and room pop [11:22–12:35, 20:15–20:45].
8. **Node 8 (Glow 2):** Subtle Add glow for light fixtures and highlights [12:36–13:05, 20:48–21:05].

---

### 4. Camera RAW Settings vs. LUT Order
* **Controls & Order [01:38–02:35, 05:40–06:05]:**
  * Marcelo shoots in **Blackmagic RAW** on a BMPCC 6K. 
  * Any adjustments made inside the **Camera RAW** panel occur in Resolve’s image processing pipeline **before** the node graph / LUT [02:15–02:35].
  * **For non-RAW footage (e.g., standard mirrorless log):** Marcelo instructs creating a node *prior* to the LUT node (Node 1) to perform white balance, exposure, and shadow adjustments, mirroring the RAW pipeline [01:45–02:00, 02:20–02:35].
  * **Pre-LUT Shadow Control [05:40–06:05]:** Raising shadows before the LUT "tricks" the LUT into seeing shadow areas as brighter, preventing shadow crushing and retaining clean dynamic range before contrast is introduced.

---

### 5. White Balance
* **Camera RAW Method [04:10–04:40, 05:10–05:32]:**
  * **Panel:** **Camera RAW** palette.
  * **Controls:** 
    * **Color Temp:** Dragged cooler/towards blue (lowered from `4500` to `4392` [05:12–05:20]) to achieve clean neutral whites.
    * **Tint:** Adjusted towards green/magenta (reduced from `15` to `13` [05:22]).
    * Scopes checked: Scopes palette set to **Parade**, aligning red, green, and blue levels at the top [05:12].
* **Primaries Palette Method [04:42–05:05]:**
  * **Panel:** **Primaries - Color Wheels**.
  * **Tool:** **White Balance eyedropper** icon (located in the top-left of the Color Wheels panel).
  * **Usage:** Clicked directly onto a known neutral white cabinet in the viewer [04:54–04:58] to automatically neutralize color casts.

---

### 6. Soften
* **Panel & Control [06:10–06:50]:**
  * **Panel:** **Primaries - Color Wheels** (bottom parameter strip).
  * **Control:** **Midtone Detail (MD)**.
* **Method & Reason:**
  * Marcelo drags Midtone Detail negative (slider pulled left [06:36–06:44]; exact numeric value is not spoken, but visibly lowered).
  * **Why:** Softening with Midtone Detail gently suppresses digital harshness and minor noise without relying on heavy spatial/temporal noise reduction, which Marcelo notes can make real estate interiors look "mushy" and unnatural [06:12–06:35].

---

### 7. Contrast
* **Panel & Controls [06:54–08:45, 17:30–18:50]:**
  * **Panel:** **Curves** > **Custom Curves** (linked Y/RGB).
* **Targeted Point Selection:**
  * Using the Curves sampler/qualifier, points are selected directly from the viewer:
    1. A deep shadow point (e.g., a dark candle at [07:02] or soundbar at [17:35]).
    2. A midtone reference point (e.g., cabinetry at [07:05] or wood wall paneling at [16:35, 17:35]).
  * The lower shadow point is pulled down along the curve while keeping the midtone point anchored [07:10–07:45].
* **Philosophy:** Marcelo notes that *"contrast is sharpness"* [08:00]. Deepening only the shadow floor after softening tightens edge perception and restores clarity without clipping the midtones [08:00–08:45].

---

### 8. Sharpen
* **Panel & Controls [08:48–10:45, 19:15–19:50]:**
  * **Panel:** **Blur** palette > **Sharpen** sub-tab (icon showing a sharp diamond/wedge).
* **Two-Pass Sharpening Workflow:**
  * **Pass 1 – Structural Sharpening (Node 5) [08:50–09:35]:**
    * **Radius:** Lowered from the default `0.50` down to `0.49` (tested at `0.48`, set at `0.49`) [09:12–09:25]. *(In Resolve, a Radius below 0.50 sharpens).*
    * **Scaling:** Set around `23` [09:05–09:10] to target broader geometric edges like handles, table rims, and cabinet corners.
  * **Pass 2 – Fine Micro-Detail Sharpening (Node 6) [09:36–10:40]:**
    * **Radius:** Lowered to `0.48` [10:20].
    * **Scaling:** Lowered down to `18–19` [09:40–09:45, 10:12] to target micro-details (plant leaves, candle textures, fine lines).
* **Reason:** Separating the two radii sharpens fine textures naturally without introducing the harsh edge halos of a generic "video-sharpened" look [09:25–09:35, 10:55–11:05].

---

### 9. Glow (Two Nodes)
* **Library Tool [11:22–13:05, 19:50–21:05]:**
  * **Effects Library** > **OpenFX** > **Resolve FX Light** > **Glow**.
* **Glow 1 – Soft Light Ambient Glow [11:50–12:35, 20:15–20:45]:**
  * **Composite Mode:** Changed from `Add` to `Soft Light` [11:58–12:02].
  * **Shine Threshold:** Slid all the way / mostly down [12:02–12:05] to affect a wide brightness range.
  * **Opacity (Global Blend):** Pulled down to zero, then gently raised up to approximately `0.165–0.170` [12:05–12:22].
  * **Effect:** Simulates open windows and natural light wrapping into the room [12:15–12:25].
* **Glow 2 – Normal Specular Glow [12:36–13:05, 20:48–21:05]:**
  * **Composite Mode:** Kept on default `Add` [12:40].
  * **Opacity (Global Blend):** Reduced to zero and dialed up subtly (around the `0.10–0.20` range) to add pop to practical under-cabinet lights and sunny hallways without blowing out highlights [12:42–13:02].

---

### 10. Stabilization
* **Panel & Settings [14:02–14:25, 15:25–15:40]:**
  * **Page:** Edit page [14:02].
  * **Panel:** **Inspector** > **Stabilization**.
  * **Mode:** `Perspective` [14:05, 15:30].
  * **Camera Lock:** Unchecked.
  * **Zoom:** Checked.
  * **Cropping Ratio:** `0.250` (default).
  * **Smooth:** Increased to `0.500` (spoken as *"all the way up to 500"*, displayed in UI as `0.500`) [14:08–14:12, 15:32].
  * **Strength:** `1.000`.
* **Why Perspective Suits Real Estate [14:05–14:25, 15:30–15:40]:**
  * Real estate interiors contain static objects and architecture with no moving subjects or unpredictable reflections. 
  * Because there are no moving foreground elements, the Perspective stabilization algorithm can eliminate gimbal wobbles cleanly without producing "wobbly warp" distortion artifacts.

---

### 11. Before/After Verification Checks
Marcelo systematically verifies his work using fullscreen viewer toggles and node bypass shortcuts:
* **Curves & Softening Check [08:28–08:45]:** Toggles nodes 3 and 4 off and on to confirm that adding curve contrast offset the softening.
* **Sharpening Check [10:25–10:55]:** Zooms into the candles and plant, toggling the sharpening nodes to verify micro-contrast without halo artifacts.
* **Post-LUT Grade vs. Base LUT Check [11:10–11:20, 13:40–13:58]:** Bypasses all nodes after the LUT in fullscreen to evaluate the transformation from the flat LUT conversion to the finished, luminous image.
* **Glow Toggle Check [12:24–12:30, 13:05–13:15, 20:30–20:45]:** Toggles glow nodes to ensure light bloom appears natural and not over-bloomed.

---

### 12. Clarifications and DaVinci Resolve Studio Notes
* **Resolve Studio Requirements:** 
  * Marcelo **never states or mentions** DaVinci Resolve Studio in the video. The software watermark on the bottom left corner reads simply **"DaVinci Resolve 17"** [00:08, 04:42]. 
  * *(Technical note: In DaVinci Resolve, the OpenFX **Resolve FX Light > Glow** filter is normally a Studio-only feature, but the video itself never explicitly discusses software licensing or requirements).*
* **Items Not Stated / Unclear in Video:**
  * Exact numerical values for **Midtone Detail** are not spoken aloud (only visually adjusted by dragging the slider left) [06:38].
  * In Clip 1, the exact numerical value of **Yaw** is adjusted visually to around `-10.000` without Marcelo reading the exact number aloud [00:58–01:05].
