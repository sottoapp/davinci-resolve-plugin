<!-- Gemini (gemini-3.7-flash) observations of a YouTube video, captured 2026-11-22 via the watch skill. Untrusted evidence; not independently verified. Numbers are one instructor's example values. -->
[watch] asking gemini-3.7-flash…

# watch: video report

- **Source:** https://www.youtube.com/watch?v=P_QpPR9mzKU (URL sent to Google)
- **Engine:** gemini-3.7-flash (agentic)
- **Gemini tokens:** 35389

## Answer (from Gemini)

_These are Gemini's observations of the video, not frames you viewed yourself. Relay them as such; rerun with `--engine local` to inspect frames directly._

### 1. Software Used: Premiere Pro vs. DaVinci Resolve
* **Software application:** The presenter is using **Adobe Premiere Pro** (specifically the **Lumetri Color** panel and **Lumetri Scopes**), **not** DaVinci Resolve [01:24, 01:46–01:50]. 
* **Visual/Auditory proof:** At [01:24], an Adobe Premiere Pro "Pr" badge appears on-screen. The presenter verbally states: *"at least how I do it in Premiere Pro... one of the things I don't like about some other editing programs is that you have to go to different windows"* [01:24–01:45].
* **Resolve Studio features:** Because DaVinci Resolve is not used in this video, **no Resolve Studio features are required or mentioned**.

---

### 2. How Log Footage is Converted
* **Footage format:** Shot on a Canon EOS R6 Mark II in **Canon C-Log 3 / Cinema Gamut** in 10-bit color [01:06, 02:29, 12:45].
* **Conversion method:** The creator uses Canon’s official manufacturer conversion LUT (*"LUT (lookup table) for Canon Log Gamma, Canon Log 16 to Rec.709 16 LUT"*) rather than paid third-party LUTs [02:22–02:40].
* **Application method:** 
  * In the Premiere Pro timeline, he creates an **Adjustment Layer** over the clips across the entire sequence on video track V2 [02:18–02:28].
  * He applies the Canon C-Log 3 Rec.709 conversion LUT to this Adjustment Layer under **Lumetri Color > Basic Correction > Input LUT** [02:22–02:40].
  * He then **locks** that Adjustment Layer track so no accidental edits are placed on it [03:25–03:32].

---

### 3. Order of Operations
The creator emphasizes placing the conversion LUT *on top* and grading adjustments *below* it, as running adjustments through the LUT produces cleaner color results [03:30–03:45, 14:10]. The step-by-step workflow:

1. **Find Hero Frame:** Scrub through the shot to locate the single representative frame showing the full room composition [11:08–11:18].
2. **White Balance:** In **Lumetri Color > Basic Correction > White Balance**, click the eyedropper (**WB Selector**) and sample a neutral white/gray element (baseboards) [04:28–04:40]. Fine-tune with the **Temperature** and **Tint** sliders/keyboard arrows [04:40–04:50, 08:25–08:32, 11:25–11:32].
3. **Exposure & Contrast:** In **Lumetri Color > Basic Correction > Exposure** (and **Blacks** if needed), pull down or adjust the exposure while monitoring the waveform in **Lumetri Scopes** [04:52–05:22, 08:05–08:18, 10:52–11:05, 13:58–14:05].
4. **Curves (Hue vs. Saturation):** In **Lumetri Color > Curves > Hue vs Sat**, sample unwanted color casts with the eyedropper, hold `Shift`, and drag the central control point down to partially desaturate unwanted casts while protecting essential interior hues [05:25–06:15, 08:35–09:50, 11:38–12:10, 14:40–15:30].

---

### 4. Handling Green Cast from Grass and Blue Hues from Windows

#### Green Cast from Lawn / Grass (Interiors with Lights Off)
* **White Balance counterbalance:** Sampling the neutral baseboard/wall with the **WB Selector** eyedropper automatically shifts the image toward magenta and slightly cooler tones to counteract the ambient green bounce [11:20–11:32].
* **Hue vs Sat curve reduction:** Under **Lumetri Color > Curves > Hue vs Sat**, he samples the remaining green cast off the wall with the eyedropper. Holding `Shift`, he pulls the green point down to desaturate the grass reflection [11:38–11:55].
* **Protecting interior accents:** He cautions against desaturating brass, gold, or live indoor plants. By adding control points, he leaves those tones untouched or nudges them up slightly to preserve hardware shine and plant life [06:10, 11:55–12:05].

#### Blue Cast from Windows (Mixed Lighting & Golden/Blue Hour)
* **Targeting blue/cyan:** Under **Curves > Hue vs Sat**, he uses the eyedropper to click the blue spill entering from the windows [08:35–08:45, 14:40–14:50].
* **Desaturating with adjacent anchor points:** Holding `Shift`, he pulls the center blue point down roughly halfway [08:45, 14:48]. He places flanking anchor points immediately adjacent into the cyan/blue-green region to ensure all residual fringing along the walls and windows is cleanly suppressed without turning the image grayscale [08:50–09:05, 14:50–15:00].

---

### 5. The 'Hero Frame' Approach
* **Timestamp:** [11:08–11:18]
* **Technique:** On a moving camera pass (especially when lights are off and ambient balance is tricky), scrub through the timeline to identify the **"hero frame of the shot"**—the frame displaying the complete layout (walls, flooring, ceiling, windows, and furnishings) [11:10]. All primary white balance, exposure, and curve adjustments are balanced on this single frame before checking playback across the full move.

---

### 6. Scope Readings and Exposure Targets
* **Scope panel:** **Lumetri Scopes** displaying the **Waveform** monitor [01:46, 05:00, 13:58].
* **Specific exposure readings mentioned:**
  * The creator states his target exposure for the main bulk of an interior room is between **70 IRE and 80 IRE**, or **85 IRE max** [05:06–05:12, 13:58–14:05].
  * At [05:10], the uncorrected clip bulk reads between **80 and 90 IRE**, which he identifies as overexposed; he lowers the **Exposure** slider by roughly half a stop to seat it in the 70–80/85 IRE zone [05:12–05:22].
* **Highlight handling:** He notes that real estate interior windows will inevitably blow out to 100 IRE; the goal is to balance the room walls and shadows properly rather than trying to recover blown window exteriors [10:55–11:10].

---

### 7. Adjustment Layer vs. Clip-Level Application
*(Note: Premiere Pro timeline layers are used; DaVinci Resolve node trees are not present.)*

* **Per-Clip Workflow [02:18–03:45]:**
  * **Video Track V2 (Adjustment Layer):** Houses the Canon conversion LUT across the entire edit; locked.
  * **Video Track V1 (Clip Level):** White Balance, Exposure, and Hue vs Sat curves are adjusted directly on each individual clip under the LUT.
* **Batch / Multi-Clip Workflow [13:10–14:40, 15:35–15:55]:**
  * When multiple shots share uniform lighting (e.g., a sequence of dining and office shots captured at golden hour), a **second adjustment layer** is added on V2 between the clips (V1) and the locked conversion LUT layer (V3). He changes its label color to distinguish it [13:42–13:52].
  * **Clip level (V1):** Exposure is leveled individually for each clip so waveforms match the 70–85 IRE target [13:55–14:05].
  * **Middle Adjustment Layer (V2):** Global White Balance and Hue vs Sat desaturation curves (reducing blue window cast and yellow tungsten) are applied once to affect the whole sequence uniformly [14:10–15:30].
  * **Secondary Clip-level tweaks:** If a specific clip in the sequence still retains excess tint, additional fine-tuning curves can be added directly to that individual clip on V1 [15:38–15:52].

---

### 8. Mistakes Warned About
1. **Shooting with Auto White Balance (AWB):** Warns strongly against AWB [04:00–04:20] because color temperature dynamically drifts mid-shot as the camera pans; always lock Kelvin manually (e.g., 4200K–4500K).
2. **Over-desaturating to Grayscale / Black & White:** Warns against pulling curve points to 0% saturation [05:55–06:05, 08:00, 09:15–09:25]. Total desaturation produces an unnatural, dead image; reduce points roughly halfway.
3. **Accidentally Desaturating Warm Furniture, Wood Floors, and Plants:** Pulling down broad yellow/orange or green curves can inadvertently drain dining tables, wood flooring, brass/gold lighting fixtures, and indoor greenery [06:10, 09:25–09:40, 11:55–12:05, 15:10–15:25]. Always place surrounding anchor points to protect or selectively boost these elements.
4. **Shooting in 8-Bit Standard Profiles:** Warns that 8-bit footage bakes in strong green grass and tungsten casts [12:45–13:02], causing the image to break apart when manipulated, whereas 10-bit log files retain the dynamic range and color data needed for clean white walls.
5. **Crooked / Roaming Camera Verticals:** Warns against tilting up/down or panning freely during capture [12:20–12:45]; keep camera verticals perfectly straight so video grabs resemble architectural photography.
