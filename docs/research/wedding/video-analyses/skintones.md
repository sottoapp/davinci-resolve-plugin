
# watch: video report

- **Source:** https://www.youtube.com/watch?v=piHz3Yd9s3I (URL sent to Google)
- **Engine:** gemini-3.7-flash (agentic)
- **Gemini tokens:** 48335

## Answer (from Gemini)

_These are Gemini's observations of the video, not frames you viewed yourself. Relay them as such; rerun with `--engine local` to inspect frames directly._

### Software Used & Proof
* **Software:** **DaVinci Resolve** (specifically **DaVinci Resolve Studio 19**).
* **Proof:**
  * **Heard:** The presenter introduces the tutorial stating: *"In this video, I'm going to be showing you five tricks for perfect skin tones in DaVinci Resolve"* [00:04].
  * **Seen:** The interface displays the DaVinci Resolve Color page, and the application name **"DaVinci Resolve Studio 19"** is printed on the bottom-left corner of the workspace [00:18, 00:27, 07:11].

---

### Resolve Studio-Only Feature Flagged
* **Magic Mask** (Tip 3) [04:10–06:21] is an exclusive feature of **DaVinci Resolve Studio** (utilizing the DaVinci Neural Engine) and is not available in the free version.

---

### The 5 Skin Tone Tips (Tools, Settings & Mistakes)

#### Tip 1: Vectorscope Qualifier Focus & Skin Tone Line ("I qualifier focus") [00:15–01:10]
* **Exact Tools & Settings:**
  * Open the **Vectorscope** palette [00:27].
  * Click the Vectorscope settings (three dots/menu) and enable **Display Qualifier Focus** [00:28–00:32]. When hovering the Qualifier eyedropper over the viewer, a targeting circle tracks the exact color position on the scope [00:33–00:43].
  * In Vectorscope settings, enable **Show Skin Tone Indicator** (displays the standard skin tone line) [00:44–00:46].
  * Check **Show Zoom** and use **Alt + Scroll Wheel** to zoom into the scope [00:46–00:52].
  * *Reading:* Skin tones falling off the line toward yellow/green need to be pushed toward magenta [00:54–01:08].
* **Mistakes Warned About:**
  * Colorists often overlook or fail to enable the Qualifier Focus and Skin Tone Indicator, relying on guesswork rather than objective scope data [00:09–00:14].

---

#### Tip 2: HSL Qualifier Selection ("II qualifier") [01:19–04:09]
* **Exact Tools & Settings:**
  * **Node Structure:** A **Serial Node** is added before the final transform node and labeled "Skin" [01:23–01:27]. *(Note: **Parallel nodes are not used** in this setup).*
  * **Qualifier Tool:** Select the eyedropper icon in the Qualifier palette and click the skin [01:29–01:33].
  * Press **Shift + H** to toggle the Highlight/mask overlay [01:34].
  * **Matte Finesse / Refinement Settings:**
    * Adjust Hue, Saturation, and Luminance range limits and Softness handles [01:45–02:18].
    * Adjust **Clean Black** and **Clean White** (mid/black cleanup) [02:19–02:22].
    * Add a small amount of **Blur Radius** [02:23].
    * Adjust **In/Out Ratio** and **Shrink/Grow** [02:28–02:40].
  * **Correction:** Disable the mask view (Shift + H) and use the **Offset**, **Gain**, or **Lift** color wheels to nudge skin tone toward magenta/warmth [03:00–03:35].
* **Mistakes Warned About:**
  * **Using the wrong color wheel:** The presenter warns that *"Gain is probably not the right slider to always use"* [heard at 03:19–03:22], switching to Lift/Offset instead.
  * **Mask Bleed / False Positives:** The qualifier only selects color ranges and cannot distinguish subject skin from dark/similarly colored background elements or clothing [02:43–03:00, 03:48–04:08].
  * **Uneven coverage across dynamic lighting:** Shadowed skin areas may be left out by the qualifier, leaving shadow areas green while highlights are warmed up [03:52–04:08].

---

#### Tip 3: Magic Mask [Studio-Only] ("III magic mask") [04:11–06:21]
* **Exact Tools & Settings:**
  * Reset the qualifier node and open the **Magic Mask** palette [04:26].
  * Select the **+ (plus) eyedropper** tool and stroke across the face [04:30].
  * View mask overlay and apply **Post-Filter** to smooth out borders [04:45–04:55].
  * Click the **Track Forward and Backward** button (bi-directional tracking) to track through the clip [05:18–05:35].
  * *(Optional)* Invert mask if background grading isolation is desired [06:15].
* **Mistakes Warned About:**
  * **Forgetting to track:** Without running the tracker, the mask only works on that single frame and breaks/covers the entire frame when moving along the timeline [05:07–05:16].
  * **Heavy processing overhead:** Tracking 4K or heavily compressed media is resource-intensive and takes noticeable processing time [05:22–05:33].
  * **Unintended selections:** Magic Mask can mistake hands or other body parts for the face when they enter frame due to matching skin color ranges [06:05–06:14].

---

#### Tip 4: Experiment with Other Color Tools ("IV experiment") [06:50–07:53]
* **Exact Tools & Settings:**
  * **Primary Wheels / Temperature:** Experimenting with temperature and wheel offsets [07:00–07:08].
  * **Color Slicer:** Switch to the Color Slicer palette, select the **Skin** slice, and adjust the Hue slider [07:09–07:22].
  * **Curves:** Use **Hue vs Hue** and **Hue vs Sat** curves to specifically target and shift skin tones [07:25–07:33].
  * **Color Warper:** Use the **Chroma Warp** grid to drag skin tone points towards target hues [07:33–07:44].
* **Mistakes Warned About:**
  * **Rigidly using only one method:** Assuming a single tool works for all situations; *"not every method will work on every shot"* [07:48–07:52].

---

#### Tip 5: Don't Fight the Original Lighting & Exposure ("V don't fight the light") [07:58–09:30]
* **Exact Tools & Settings:**
  * Change or adjust the creative PowerGrade/look (e.g., Real Film PowerGrade "Censor 10" / "Novel") [08:33–09:00].
  * Use **Custom Curves** (specifically the **Red curve**) to gently warm the midtones while keeping highlights cooler to respect the overcast environment [09:00–09:25].
* **Mistakes Warned About:**
  * **Forcing an incompatible look:** Applying an aggressively warm look to footage shot on a dark, cold, overcast day [07:56–08:30, 08:44–08:52, 09:22–09:28]. Fighting the camera sensor's original exposure and lighting makes achieving natural skin tones nearly impossible.
