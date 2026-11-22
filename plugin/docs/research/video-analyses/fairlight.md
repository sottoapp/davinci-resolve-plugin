<!-- Gemini (gemini-3.7-flash) observations of a YouTube video, captured 2026-11-22 via the watch skill. Untrusted evidence: not independently verified frame-by-frame. -->
[watch] asking gemini-3.7-flash…

# watch: video report

- **Source:** https://www.youtube.com/watch?v=ChoOejMwLGw (URL sent to Google)
- **Engine:** gemini-3.7-flash (agentic)
- **Gemini tokens:** 39986

## Answer (from Gemini)

_These are Gemini's observations of the video, not frames you viewed yourself. Relay them as such; rerun with `--engine local` to inspect frames directly._

The DaVinci Resolve Fairlight dialogue repair workflow is presented in **Lesson 6** of the training series in the following chronological order. 

*(Note on terminology: "Dialogue mixer" is taught as a professional role/objective rather than a software plugin, and "declick" is performed manually via sample-level waveform redrawing rather than a dedicated plugin, as confirmed during the end-of-lesson quiz [62:25]).*

---

### 1. Dialogue Mixer (Role & Purpose Overview)
* **Timestamp:** [04:06] – [05:08]
* **Studio-only:** No (concept/role).
* **When to use / Job description:**
  * **Heard:** Jason explains that dialogue is the most critical element in any film or video [04:15 – 04:33]. The dialogue mixer’s responsibility is to deliver clean, balanced audio for the audience [04:15].
  * **Heard:** Address the recording’s wide dynamic range by attenuating overly loud peaks and ensuring quiet passages are audible [04:35 – 04:52].
  * **Heard:** Identify and cut harsh frequencies with equalization while selectively boosting frequencies to improve intelligibility and presence [04:53 – 05:03].
* **Cautions:** Dialogue is king; do not neglect dynamic range differences or leave in harsh frequencies that fatigue the listener [04:35 – 05:03].

---

### 2. Clip EQ (Equalizer & Frequency Analyzer)
* **Timestamp:** [05:13] – [12:05]
* **Studio-only:** No; available in both Free and Studio versions [06:47].
* **When to use:** When specific frequency problems exist that sound bad and need attenuating (demonstrated on low-end rumble from wind/handling and background bird chirping) [01:30 – 01:45, 08:00 – 08:15].
* **Key settings & Interface:**
  * **Seen:** EQ can be accessed on the track strip in the Mixer, on an individual clip in the Inspector, or applied as a Fairlight FX plugin from the Effects Library [05:25 – 06:25]. In this lesson, clip EQ in the Inspector is used [07:35].
  * **Seen/Heard:** The **Frequency Analyzer** plugin is used to identify the low-end rumble visually between 20 Hz and 100 Hz [06:31 – 07:25].
  * **Seen:** The Inspector EQ contains 6 configurable bands spanning 20 Hz to 16 kHz [07:45 – 08:18].
  * **Heard/Seen Filter Types:**
    * *Band 1 (High-Pass):* Shaded blue; cuts all frequencies below the set frequency and passes higher frequencies through [09:25 – 09:44].
    * *Band 2 (Low Shelf):* Creates a shelf to cut or boost low-end frequencies uniformly [09:45 – 10:04].
    * *Band 3 (Bell Curve):* Boosts or cuts around a center frequency; Q-factor / mouse scroll wheel adjusts bandwidth (high Q = narrow/precise; low Q = wide) [10:05 – 10:28].
    * *Notch / Hard Cut:* Deep, narrow cut targeting a specific frequency [10:30 – 10:40].
    * *High Shelf:* Boosts or cuts the high-end frequency spectrum [10:41 – 10:52].
  * **Demonstrated setting:** Sweeping Band 2 (low shelf) downward cuts out the low-end rumble while monitoring the spectral analyzer [11:00 – 11:45].
* **Cautions:** Do not cut blindly. Sweep bands while listening and watching the analyzer to remove unwanted noise without hollowing out speech [11:00 – 12:00]. (Deeper EQ techniques are deferred to Lesson 9 [11:55]).

---

### 3. Gate / Expander (Dynamics Panel)
* **Timestamp:** [12:08] – [18:05]
* **Studio-only:** No; standard Fairlight feature in Free and Studio.
* **When to use:** To suppress low-level background noise (demonstrated on background crackling [12:40 – 13:00] or low fan noise [17:45 – 18:00]) in the pauses between words and phrases.
* **Key settings & Interface:**
  * **Seen:** Opened by double-clicking "Dynamics" on the track strip in the Mixer [13:05 – 13:15].
  * **Heard/Seen:**
    * *Gate Threshold:* Default is -35 dB [13:28]. Audio quieter than the threshold is blocked (gate closed); audio reaching -34 dB or louder opens the gate and passes through [13:30 – 13:48]. Dialed to approximately -39 dB in the lesson [16:08].
    * *Range:* Governs how many dB the audio drops when the gate closes (e.g., dropping quiet passages by -18 dB) [15:00].
    * *Dynamics Meter:* Shows visual gain reduction to verify the gate is triggering [14:45].
    * *Expander:* Similar to the gate but incorporates a ratio control and applies a gentler slope rather than an abrupt shut-off; ideal for subtle reduction of low-level fans or ambient hums [17:30 – 18:05].
* **Cautions:** Avoid being heavy-handed. Setting Range to duck -60 dB acts as a total mute between syllables, sounding jarring, artificial, and distracting [15:20 – 15:35]. Set Threshold as close to the ambient noise floor as possible [15:40, 16:35].

---

### 4. DeHummer (Fairlight FX)
* **Timestamp:** [18:10] – [21:48]
* **Studio-only:** No; built-in plugin in Free and Studio [18:15, 31:05].
* **When to use:** When continuous electrical hum contaminates the entire recording (caused by unshielded cables, AC power cords crossing audio lines, or improper grounding) [18:40 – 19:15].
* **Key settings & Interface:**
  * **Seen:** Dragged directly from the Effects Library onto the clip [19:25 – 19:35].
  * **Heard/Seen:**
    * *Presets:* Buttons for 50 Hz and 60 Hz hum removal (the standard electrical AC frequencies) [19:45 – 20:00].
    * *Amount:* Dial controlling the depth of attenuation (set to ~27 in the demonstration) [20:25].
    * *Slope:* Shifts the filter curve toward higher or lower harmonics to target the hum’s tonal character [20:35 – 21:15].
    * *Hum Only:* Button enabling playback of only the filtered noise to verify speech is not being removed [21:28 – 21:35].
* **Cautions:** Toggle bypass to verify the dehummer removes the hum without stripping natural low-mid body from the actor’s voice [21:20].

---

### 5. Noise Reduction (Fairlight FX) & Multi-Plugin Stacking
* **Timestamp:** [21:50] – [31:35]
* **Studio-only:** No; built-in plugin in Free and Studio [26:45, 31:05].
* **When to use:** For pronounced environmental noise, background chatter, or room movement [21:50 – 22:15, 22:50]. Also used when an incremental multi-stage cleanup is required [28:00 – 28:10].
* **Key settings & Interface:**
  * **Seen:** Located under Effects Library -> Restoration -> Fairlight FX -> Noise Reduction; applied to clips or tracks [23:20 – 23:45].
  * **Heard/Seen Modes:**
    * *Manual Mode:* Used when a room-tone gap exists. Loop a pure noise section, engage the **Learn** button, let the plugin analyze the noise profile (white line = noise floor, purple line = target subtraction curve), and disengage Learn [24:15 – 26:15].
    * *Auto Speech Mode:* Uses automated spectral algorithms to isolate and suppress non-speech noise without capturing a manual noise print [24:25, 27:00 – 27:45].
  * **Incremental Multi-Plugin Workflow Order [28:00 – 30:45]:**
    1. *DeHummer:* Strips continuous electrical hum first [29:45, 30:20].
    2. *Manual Noise Reduction:* Targets broad underlying ambient noise [29:47, 30:25].
    3. *Auto Speech Noise Reduction:* Tightens cleanup immediately around spoken words [29:48, 30:30].
* **Cautions:** Noise Reduction can introduce underwater artifacts or phase distortions compared to AI Voice Isolation [26:30 – 26:45]. Stacking multiple plugins on clips increases CPU processing load significantly [31:40 – 31:55].

---

### 6. Cache Audio Effects
* **Timestamp:** [31:35] – [33:15] *(and revisited at [42:58] – [43:52])*
* **Studio-only:** No; standard Fairlight feature in Free and Studio.
* **When to use:** When multiple plugins or intensive processing (such as Voice Isolation or multi-stage noise reduction) cause timeline playback stuttering or heavy CPU load [31:45 – 32:20, 43:05].
* **Key settings & Method:**
  * **Seen:** Right-click the clip on the timeline -> choose **Cache Audio Effects** [32:25 – 32:38, 43:10].
  * **Seen:** Timeline waveforms re-render to reflect the processed audio visually [32:40 – 32:55, 43:18].
  * **Heard/Seen:** Non-destructive; individual plugins in the Inspector remain active and adjustable [33:05].
  * **Seen:** Right-clicking the clip and unchecking **Cache Audio Effects** disables caching and reverts the waveform display [43:35 – 43:52].
* **Cautions:** Caching is a temporary render. Disabling/unchecking it immediately returns real-time processing demand to your CPU [43:40].

---

### 7. Bounce Audio Effects
* **Timestamp:** [33:15] – [35:15] *(and [43:28])*
* **Studio-only:** No; standard Fairlight feature in Free and Studio.
* **When to use:** When processing must be permanently baked into a new audio file to eliminate CPU load entirely [33:15 – 33:25].
* **Key settings & Method:**
  * **Seen:** Right-click the clip -> select **Bounce Audio Effects** [33:28 – 33:38].
  * **Seen:** To view both the original and bounced audio: View menu -> enable **Audio Track Layers** [33:45 – 34:05]. The bounced audio sits on the upper active layer; the original clip remains underneath.
  * **Seen:** To separate the bounced take: Select the top layer and press `Option + Down Arrow` (Mac) or `Alt + Down Arrow` (Windows) to push it to a new track [34:24 – 34:38].
  * **Seen:** The Inspector on the bounced clip shows no active plugins (they are burned into the audio file) [34:48 – 34:55].
* **Cautions:** Once bounced, plugin parameters can no longer be adjusted or toggled on that bounced file [34:08, 34:57]. Always preserve the original clip in an underlying audio track layer so you can adjust parameters and re-bounce if revisions are needed [35:00 – 35:12].

---

### 8. Voice Isolation (AI Neural Engine)
* **Timestamp:** [35:20] – [43:55]
* **Studio-only:** **YES — DaVinci Resolve Studio only** (powered by the DaVinci Neural Engine) [35:20, 36:48, 41:35].
* **When to use:** To suppress heavy background noise, loud fans, street chatter, or even hum from dialogue [35:35, 40:35, 41:20, 42:10]. Jason notes it is usually the first tool he tries on problematic dialogue [42:40].
* **Key settings & Interface:**
  * **Seen:** Applied at the track level (in Inspector -> Track or the Mixer strip) or clip level (Inspector -> Audio) [35:45 – 36:00, 36:45, 42:55].
  * **Heard/Seen:** Single dial/slider ranging from 0% to 100% [36:48, 38:50].
  * **Demonstrated Settings:**
    * *Outdoor scene:* Set to 23% to reduce street noise while keeping dialogue natural in its environment [39:15 – 39:40].
    * *Low recording with loud fan:* Clip gain increased by +22 dB first to reach -10 dB target, then Voice Isolation set to 78% to remove fan noise completely [40:20 – 41:10].
    * *Hum removal:* Applied directly on clip level at 81%, eliminating hum without needing the DeHummer [42:20 – 42:40].
* **Cautions:**
  * Leaving Voice Isolation at 100% can cause speech to sound artificial, distorted, or "artifacty" [37:55 – 38:05].
  * Start at 0% and dial upward until noise is sufficiently suppressed [38:10 – 38:25]. Only use near 100% if completely replacing ambient room sound with newly designed sound effects and foley [38:30 – 38:42].
  * Processing many clips with Voice Isolation can strain computer hardware; use *Cache Audio Effects* if playback slows down [43:05].

---

### 9. Dialogue Separator (AI Neural Engine)
* **Timestamp:** [43:55] – [48:45]
* **Studio-only:** **YES — DaVinci Resolve Studio only** (powered by the DaVinci Neural Engine) [35:20, 36:48].
* **When to use:** When you need independent three-way control to balance Voice, Background, and Room Ambience/Reverb [44:00 – 44:15, 48:05].
* **Key settings & Interface:**
  * **Seen:** Track-level processor accessed in the Inspector (Track tab) or Mixer track strip (under visible track effects) [36:45, 37:05, 44:20].
  * **Heard/Seen Controls:**
    1. *Voice:* Controls dialogue gain; used to compensate if background attenuation pulls speech levels down [44:08, 48:25].
    2. *Background:* Attenuates environmental background sounds [44:09, 44:45, 48:05].
    3. *Ambience:* Adjusts room reverberation/ambience inherent to the recording space [44:10, 45:15 – 45:25, 48:12].
* **Cautions:**
  * On clips with complex room reflections or outdoor reverberations, manipulating Ambience and Background can introduce phase artifacts or sound unnatural [45:10, 46:15]. In such cases, Voice Isolation is preferred [46:20].
  * Works best when background noise is distinct and room reflections do not excessively smear the speech [48:05 – 48:25].

---

### 10. Declick / Sample-Level Waveform Editing
* **Timestamp:** [49:05] – [52:05]
* **Studio-only:** No; built-in timeline functionality in Free and Studio.
* **When to use:** To remove transient clicks, pops, or short digital spike artifacts [49:05 – 49:30, 49:55].
* **Key settings & Method:**
  * **Heard/Seen (Clarification):** There is no plugin named "Declick" or "Sampler Editor" [62:25]. Instead, sample-level editing is done directly on the Fairlight timeline waveform [50:05, 62:25].
  * **Seen:** Place the playhead at the click/pop location and zoom in repeatedly on the timeline until the waveform turns into an editable line with individual sample point dots [50:05 – 50:30].
  * **Seen:** Click, hold, and drag directly across the sample points to manually flatten the vertical spike horizontally across the top and bottom of the waveform [50:40 – 51:05].
  * **Seen:** Black dots remain displayed on the timeline to indicate original sample coordinates [51:00].
  * **Seen Reset Function:** If an error occurs while redrawing, right-click the edited points and select **Clip Operations -> Reset Edited Samples** to restore the original spike/waveform [51:30 – 52:05].
* **Cautions:** Do not arbitrarily drag samples across large sections; zoomed in this far, minor hand variations are imperceptible, but extensive alterations will distort the audio [50:50 – 51:00]. If a sample edit is botched, use *Reset Edited Samples* rather than attempting to redraw the original wave by hand [51:35 – 52:05].
