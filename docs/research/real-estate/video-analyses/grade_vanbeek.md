<!-- Gemini (gemini-3.7-flash) observations of a YouTube video, captured 2026-11-22 via the watch skill. Untrusted evidence; not independently verified. Numbers are one instructor's example values. -->
[watch] asking gemini-3.7-flash…

# watch: video report

- **Source:** https://www.youtube.com/watch?v=HNvEhGZ2DCU (URL sent to Google)
- **Engine:** gemini-3.7-flash (agentic)
- **Gemini tokens:** 120079

## Answer (from Gemini)

_These are Gemini's observations of the video, not frames you viewed yourself. Relay them as such; rerun with `--engine local` to inspect frames directly._

Here is the complete step-by-step documentation of the real estate color grading workflow taught in the video, detailing the exact DaVinci Resolve tools, settings, node architecture, scope targets, and warnings.

---

### 1. Project Setup & Input Conversion (V-Log to Rec.709)
* **Color Science Setup (Edit Page):**
  * **Seen:** In the Media Pool, the instructor right-clicks the timeline and opens **Timeline Settings** $\rightarrow$ **Color** tab (01:02–01:08).
  * **Settings:** **Color science** is set to `DaVinci YRGB Color Managed`, with **Automatic color management** checked (01:06). Output color space defaults to `Rec.709` (01:06).
  * **Heard:** The instructor explains that working in this managed color space performs adjustments inside **DaVinci Wide Gamut**, which provides far more dynamic headroom before footage breaks (01:35–01:45).
* **Setting Clip Input Color Space:**
  * **Seen:** In the Media Pool, all clips are selected, right-clicked $\rightarrow$ **Input Color Space** $\rightarrow$ **Panasonic** $\rightarrow$ **Panasonic V-Log** (01:17–01:27).
  * **Heard/Seen:** This immediately transforms the flat V-Log image into a Rec.709 display representation (01:27–01:35). The instructor then switches to the **Color Page** (01:48).

---

### 2. Node Architecture & Order of Corrections
Nodes are added sequentially using the shortcut **Alt + S** (01:58, 05:12, 05:38, 06:33, 07:24, 09:10):
1. **Node 1 (Noise Reduction):** Left blank at the start of the chain. *Heard:* Reserved for noise reduction (01:54–02:00).
2. **Node 2 ("exposure"):** Named via right-click $\rightarrow$ **Node Label** $\rightarrow$ `exposure` (02:00–02:08). Handles overall tonal distribution, window recovery, and midtone detail.
3. **Node 3 ("contrast"):** Named `contrast` (05:10–05:16).
4. **Node 4 ("saturation"):** Named `saturation` (05:38–05:43).
5. **Node 5 ("balance"):** Named `balance` (06:33–06:38).
6. **Node 6 ("curves"):** Named `curves`, placed on a second row below Node 1 for tidiness (07:22–07:33).
7. **Node 7 ("look"):** Named `look` (09:08–09:14). Adds subtle outdoor tint to window highlights.
8. **Node 8 ("skin"):** Added only on shots with a human subject/realtor (21:48–21:51).

---

### 3. Core Tool Settings & Operations (Base Grade)

#### A. Exposure & Window Highlight Recovery (Node 2: `exposure`)
* **Tool:** **HDR Palette** (**High Dynamic Range - Color Wheels**) (02:22).
* **Highlight Wheel:** Lowered (**Exp** slider) to pull back detail in blown-out windows (02:25–03:10).
  * *Visual checks:* Monitor **reflections** (e.g., countertop gloss) and **three-dimensional shapes** (e.g., chair backs); stop lowering before objects lose depth and turn into flat, washed-out silhouettes (02:50–03:05).
* **Light Wheel:** Raised (**Exp** slider) to make the interior feel bright, open, and sunlit without blowing the windows (03:20–03:38).
* **Shadow & Dark Wheels:** Navigated via the arrow buttons to the left wheels (03:40). Lowered slightly to deepen shadows and introduce contrast between darks and lights without crushing outer borders (03:42–04:02).
* **Crucial Midtone Detail Correction:** 
  * *Heard:* Lowering highlights softens/flattens fine textures (04:20–04:35).
  * *Seen/Heard:* On the `exposure` node, switch to **Primaries - Color Wheels** and raise **Mid/Detail** (Midtone Detail) to **50** (or just below 50), which restores crisp architectural detail (04:36–05:05).

#### B. Contrast (Node 3: `contrast`)
* **Tool:** **Primaries - Color Wheels** panel (05:18).
* **Controls:**
  * **Pivot:** Set precisely to **0.336** (05:20).
  * **Contrast:** Adjusted minimally (e.g., ~1.042 to 1.046) to add subtle punch without crushing shadows (05:25–05:36).

#### C. Saturation (Node 4: `saturation`)
* **Setup (HSV Channel Isolation):**
  * Right-click node $\rightarrow$ **Color Space** $\rightarrow$ **HSV** (05:45–05:49).
  * Right-click node $\rightarrow$ **Channels** $\rightarrow$ uncheck **Channel 1** and **Channel 3** (05:50–05:54).
  * *Heard:* Leaving only Channel 2 active isolates Hue Saturation Value's saturation channel, resulting in a cleaner, more filmic saturation increase (05:54–06:01).
* **Adjustment:** In **Primaries - Color Wheels**, raise the **Gain** master wheel/slider to around **1.40 – 1.45** (06:01–06:22).

#### D. White Balance / Mixed Lighting (Node 5: `balance`)
* **Setup (Linear Gamma & Lum Mix):**
  * Right-click node $\rightarrow$ **Gamma** $\rightarrow$ **Linear** (06:40–06:44).
  * In **Primaries - Color Wheels**, turn **Lum Mix** (Luminance Mix, bottom right) all the way down to **0** (06:45–06:49).
  * *Heard:* Described as the cleanest, most accurate method in Resolve to balance color casts without shifting luminance (06:49–06:58).
* **Adjustment:**
  * Push the **Gain** color wheel toward warm or cool/magenta/green to counter casts (06:58–07:07).
  * **Fine Tuning:** Open the **Key Palette** and lower **Key Output $\rightarrow$ Gain** (e.g., from 1.000 down to 0.700 or lower) to blend node strength smoothly (07:07–07:20, 15:55–16:05).
  * *Visual target:* Use ceilings or white cabinetry as neutral references (15:50, 25:10).

#### E. Curves (Node 6: `curves`)
* **Tool:** **Curves Palette** $\rightarrow$ **Hue Vs Hue** (07:38).
  * **Blues $\rightarrow$ Teal:** Click the blue swatch; increase Hue Rotate to around **+10 to +18** (07:44–07:50).
  * **Yellows $\rightarrow$ Orange/Red:** Click the yellow swatch; increase Hue Rotate by around **+5** (+5.15) to push yellowish wood tones toward rich warm orange/red (07:50–08:20).

#### F. Enhancing "Look" Step (Node 7: `look`)
* **Concept:** Unconventional teal-and-orange approach. Rather than cool shadows and warm highlights (which looks moody), warm tones are kept in the room while cool blue is pushed into the bright window highlights, matching the brain's expectation of daylight/blue sky outdoors (08:45–09:35).
* **Tool & Settings:**
  * In the **HDR Palette**, nudge the color tint on the **Highlight** wheel slightly toward blue (09:38–09:45).
  * Move to the **Specular** wheel and nudge it slightly toward blue (09:45–09:50).
  * Open the **Key Palette** and reduce **Key Output $\rightarrow$ Gain** down to roughly **0.100** (0.119 seen at 10:28). This prevents cyan clipping or staining interior furniture (09:55–10:35).

---

### 4. Scenario-Specific Grading Workflows

#### A. Bright Rooms
* **Clip 1 (Kitchen/Dining, 01:50–10:50):** Established the base node grade outlined above.
* **Clip 2 (Living Room with Massive Windows, 13:10–17:05):**
  * Grade pasted from Clip 1 (13:10).
  * **Waveform:** Traces sat in the lower half; HDR **Global Exposure** was raised to bring overall levels into the center (13:40–13:55).
  * **HDR Wheels:** **Darks** raised to reveal the dark door handle; **Shadows** lowered to anchor the bench; **Highlights** lowered cautiously to roughly **-0.70 to -0.80** (Exp) because the bright floor patch was naturally intense and over-recovering looked fake (14:10–15:00).
  * **Balance:** Image had a warm/green tint; Gain wheel was pushed toward magenta/red and Key Output Gain set to **0.7** to render the ceiling neutral white (15:30–16:05).
  * **Curves (Hue Vs Sat):** Selected the wall's greenish-yellow hue and dragged saturation down with a broad curve, checking that indoor green house plants remained unaffected (16:15–16:45).
  * **Look Node:** Disabled because the shot was exposed in-camera to preserve a rich blue sky; adding the Look node made the sky excessively cyan/blue (16:50–17:05).

#### B. Exterior House Shot (Clip 3, 17:10–19:50)
* **Exposure:** HDR Exposure reset. **Dark** and **Shadow** wheels pulled down to add punch and contrast, keeping garage door textures visible (17:25–17:42). Light wheel left untouched; Highlights Exp adjusted cautiously so siding does not look blown (17:45–18:02).
* **Mid/Detail Rule:** Left at **0** (untouched). *Heard:* Raising Mid/Detail on exterior shots creates a harsh, "crunchy" image (18:05–18:22).
* **Saturation & Curves:** Saturation node kept high for lush green grass (18:30–18:50), but this oversaturated the sky. In **Curves $\rightarrow$ Hue Vs Sat**, the sky's blue was sampled and desaturated to create a natural, cinematic sky (19:15–19:38).
* **Look Node:** Disabled (sky was already blue) (19:45–19:52).

#### C. Realtor Shot & Skin Tones (Clip 4, 19:50–23:05)
* **Philosophy:** Always expose for the realtor's face; background windows blowing out is acceptable (20:05–20:18).
* **Exposure:** HDR **Global Exposure** raised (+0.55). **Highlights** lowered (-0.44) and **Specular** lowered (-0.40) to soften background window glare (20:35–21:30). HDR **Shadows** lifted (+0.29) to fill the shadow side of his face (21:35–21:45).
* **Target Levels on Scopes:**
  * **Waveform:** Realtor skin tones should sit between **50 and 80** (or 50 to 90), with the average across highlight and shadow sides landing around **60 to 70** (20:18–20:55).
* **Skin Correction Node (Node 8: `skin`):**
  * Added after the Look node (21:48–21:51).
  * **Vectorscope Setup:** Changed scopes to **Vectorscope**, opened scope settings menu, enabled **Show Skin Tone Indicator**, and set zoom to **2x Zoom** (21:53–22:05).
  * **Curves $\rightarrow$ Hue Vs Hue:** Hovering over the face showed the nose pushing red (right of the indicator line). Clicked the red hue on the curve and pulled it down slightly toward yellow (-4.55 Hue Rotate) until the trace aligned directly with the skin tone line (22:15–22:45).

#### D. Dark / Average House (Clip 5, 23:05–27:25)
* **Philosophy:** Cameras lack dynamic range to balance pitch-black rooms with bright outdoor windows; highlight blowout in windows must be accepted to make the living space bright and inviting (23:15–23:35).
* **Exposure:** HDR **Global Exposure** raised (+0.60 to +0.80) to brighten the room. Highlights Exp pulled down slightly without introducing artifacts; Darks lowered slightly for shadow weight (23:55–24:25).
* **Contrast Node:** **Disabled** entirely. *Heard:* Adding contrast to an already high-contrast, dark room ruins the image (24:25–24:32).
* **Saturation Node:** Reset/reduced near **1.00** (Gain 1.01–1.04). Older oak floors and yellow walls look muddy and harsh when boosted (24:35–25:05).
* **Balance via Waveform:** Examined the white kitchen cabinet. The waveform showed the red trace riding high above blue/green (warm cast). The Gain wheel was pushed toward blue until the RGB traces converged into a clean, aligned white line on the waveform (25:10–26:05).
* **Curves (Hue Vs Sat):** Sampled the yellow walls and reduced yellow saturation partially. *Heard:* Do not completely remove the yellow (which bleaches the walls and fakes the home); desaturate just enough to minimize distraction while remaining true to the property (26:35–27:15).

---

### 5. Target Scope Levels Mentioned

| Measurement | Scope Used | Target Level | Timestamp |
| :--- | :--- | :--- | :--- |
| **Realtor Face Luminance** | Waveform | Range between **50 and 80** (or 50–90); average across face between **60 and 70** | 20:18–20:55 |
| **Realtor Skin Hue** | Vectorscope (2x Zoom) | Traces centered on the **Skin Tone Indicator Line** | 21:55–22:45 |
| **Neutral White Balance** | Waveform | RGB channel traces converge/overlap into a uniform white trace | 25:35–26:05 |
| **Overall Room Exposure** | Waveform | Shift waveform cluster out of the bottom third into the center (~40–60%) | 13:40–13:55 |

---

### 6. Mistakes Warned About
1. **Over-pulling HDR Highlights:** Pulling window highlights too far causes unnatural gray banding, flat planes, and kills 3D form and natural surface reflections (02:35–03:05).
2. **Forgetting Mid/Detail on Interiors:** Lowering highlights softens edges; failing to raise Mid/Detail to ~50 leaves interior shots mushy (04:20–04:45).
3. **Using Mid/Detail on Exteriors:** Applying Mid/Detail to exterior foliage/structures results in a harsh, overly sharp, "crunchy" look (18:05–18:22).
4. **Oversaturating Exterior Skies:** Allowing deep saturated blues in exterior drone/ground shots looks cheap and fake; skies should be selectively desaturated in Hue Vs Sat (18:35–18:55).
5. **Overcooking the "Look" Node:** Setting Key Output Gain too high clips table surfaces cyan/teal; must be kept around ~0.10 and shut off if the sky is naturally blue (09:55–10:20, 16:50–17:05).
6. **Prioritizing Windows Over Talent:** Exposing for windows when a realtor is talking leaves the human underexposed (20:05–20:18).
7. **Applying Contrast Nodes to Dark Rooms:** Adding contrast to already high-contrast, poorly lit spaces crushes shadow detail further (24:25–24:32).
8. **Over-saturating or Stripping Yellow Walls:** Boosting saturation makes older yellow walls look toxic; completely removing yellow desaturates the scene into an unconvincing, washed-out fake (24:35–25:00, 26:40–27:05).

---

### 7. DaVinci Resolve Studio vs. Free Version & Unclear Items
* **Studio Requirements:** The instructor does **not** verbally state that any tool requires DaVinci Resolve Studio. However:
  * **Seen:** The software title bar and lower-left UI label read `DaVinci Resolve Studio 18` (01:50).
  * **Node 1 (Noise Reduction):** Node 1 is explicitly reserved for noise reduction (01:55). While not stated by the presenter, Temporal/Spatial Noise Reduction is a paid DaVinci Resolve Studio feature.
* **Unclear / Not Shown:** 
  * The exact noise reduction settings are never demonstrated; Node 1 remains empty throughout the video.
  * In the curves node, exact numerical anchor points for Hue Rotate are set by clicking the default swatches and dragging by eye rather than entering manual coordinates (approximate readouts of +18.35 for blue and +5.15 for yellow appear on screen at 07:46 and 08:10).
