
# watch: video report

- **Source:** https://www.youtube.com/watch?v=-Oh60O0fsIE (URL sent to Google)
- **Engine:** gemini-3.7-flash (agentic)
- **Gemini tokens:** 61728

## Answer (from Gemini)

_These are Gemini's observations of the video, not frames you viewed yourself. Relay them as such; rerun with `--engine local` to inspect frames directly._

### 1. Software Used & Proof
* **Software:** **DaVinci Resolve** (specifically **DaVinci Resolve Studio 20**).
* **Proof (Heard):** At **00:06–00:13**, filmmaker Brian Rossen states: *"For a long time I used Adobe Premiere, but about two years ago I switched over to DaVinci Resolve..."*
* **Proof (Seen):** At **00:15–00:17**, the Blackmagic Design DaVinci Resolve product page is displayed. Throughout the tutorial (e.g., **00:28–00:36**, **04:08**, **08:34**), the DaVinci Resolve interface is shown, with **"DaVinci Resolve Studio 20"** clearly visible in the lower-left corner (seen at **00:29**).

---

### 2. Mistakes Warned About
1. **Leaving color management on automatic/default:** At **00:58–01:18**, he demonstrates that default settings leave camera log footage completely flat and desaturated; you must uncheck automatic management and configure custom color transforms.
2. **Expecting AI to edit your film:** At **06:05–06:10**, he cautions: *"This is by no means going to edit my wedding film. This is just like a jumping off point"* to identify dialogue candidates rather than replacing storytelling.
3. **Inserting video without audio and hunting for source files manually:** At **08:40–08:52** (and on-screen text at **08:44**), he warns about placing B-roll video clips on the timeline without audio and later needing that exact live audio, which risks losing your place and wasting editing time if not using Match Frame.

---

### 3. The 5 Resolve Features for Wedding Edits

#### Feature 1: Color Management
* **Timestamps:** **00:20 – 02:20**
* **Exact Menus & Settings:**
  * Click the gear icon at the bottom right (**Project Settings** [**00:48**]) $\rightarrow$ **Color Management** tab (**00:54**).
  * **Color science:** `DaVinci YRGB Color Managed` (**01:12**).
  * Uncheck **Automatic color management** (**01:14**).
  * **Color processing mode:** `Custom` (**01:17**).
  * **Input color space:** Camera log profile (e.g., `S-Gamut3.Cine/S-Log3` for Sony cameras) (**01:39–01:44**).
  * **Timeline working luminance:** `HDR 1000` (**01:48–01:50**).
  * **Output color space:** `Rec.709 (Scene)` (**01:51–01:54**).
  * Save as a reusable preset via the three-dot option menu $\rightarrow$ `Save Current Settings as Preset...` (**02:08–02:18**).
* **Why it helps wedding work:** Automatically restores proper contrast, saturation, and base color across all multi-camera log clips across the entire project at once without applying manual conversion LUTs to individual clips (**00:27–00:44**).
* **Version Availability:** Included in both Free and Studio versions.

---

#### Feature 2: Multicam Clip
* **Timestamps:** **02:20 – 03:36**
* **Exact Menus & Settings:**
  * Place and sync audio/video clips on the timeline (**02:44–02:56**).
  * Select all synced camera clips $\rightarrow$ right-click $\rightarrow$ **New Compound Clip...** (e.g., named "Welcome") (**02:59–03:05**).
  * In the **Media Pool**, right-click the compound clip $\rightarrow$ **Convert Compound Clip to Multicam Clip** (**03:09–03:19**).
  * Switch viewer to Multicam mode (2x2 grid) to toggle/cut between angles on the fly (**03:22–03:34**).
* **Why it helps wedding work:** Compresses multi-camera setups (ceremony, speeches, first dances) into a clean, single-track timeline clip while enabling rapid live-switching between different camera angles (**02:24–02:40**).
* **Version Availability:** Included in both Free and Studio versions.

---

#### Feature 3: Audio Transcription (+ ChatGPT Export)
* **Studio-Only Flag:** 🚩 **DaVinci Resolve Studio-Only Feature** *(Built-in speech-to-text / AI transcription is exclusive to DaVinci Resolve Studio).*
* **Timestamps:** **03:36 – 08:10**
* **Exact Menus & Settings:**
  * In the **Media Pool**, select the dialogue timeline/clip $\rightarrow$ click the **Transcribe Audio** button (speech bubble icon) on the toolbar (**04:26–04:32**).
  * In the transcription window:
    * Search dialogue using the search bar (e.g., searching "protective" at **04:52–05:02**).
    * Highlight text to automatically generate timeline In/Out points $\rightarrow$ copy (`Command + C`) and paste (`Command + V`) directly onto the edit timeline (**05:15–05:38**).
    * Click the **Export** icon $\rightarrow$ export transcription as a `.txt` file (**06:18–06:28**).
    * Drop the `.txt` file into ChatGPT with a prompt to identify the top 10 quotes for the wedding film (**06:36–06:56**), then search those quotes back in Resolve to insert them (**07:42–08:08**).
* **Why it helps wedding work:** Wedding edits involve hours of dialogue (toasts, vows, letters, ceremony). Transcription turns hours of audio into searchable text, allowing instant discovery and extraction of emotional narrative hooks without listening through raw footage (**03:40–04:02**, **05:40–06:10**).

---

#### Feature 4: Clip Colors
* **Timestamps:** **08:10 – 08:37**
* **Exact Menus & Settings:**
  * Select clip(s) on the timeline $\rightarrow$ right-click $\rightarrow$ **Clip Color** $\rightarrow$ choose a color (e.g., Navy, Pink, Yellow, Orange) (**08:21–08:32**).
  * User's convention: Blue = groom prep, Pink = bride/bridesmaids prep, Yellow = bride & groom together (**08:23–08:33**).
* **Why it helps wedding work:** Gives an instant visual layout of the wedding day's narrative phases on the timeline, preventing clutter and speeding up clip location (**08:16–08:35**).
* **Version Availability:** Included in both Free and Studio versions.

---

#### Feature 5: Match Frame
* **Timestamps:** **08:37 – 09:32**
* **Exact Menus & Settings:**
  * Park the playhead over a timeline video clip (**08:58–09:04**).
  * Press **C** (the creator's custom hotkey, configured in **Keyboard Customization** [`Option + Command + K`] by searching "Match Frame") (**09:05–09:14**).
  * In the Source Viewer, click and drag the **Audio Waveform icon** directly down to the timeline beneath the video clip (**09:18–09:28**).
* **Why it helps wedding work:** When B-roll is placed into an edit without audio, Match Frame retrieves the synchronized source audio for that exact frame instantly, eliminating the need to search through raw bins (**08:40–08:52**).
* **Version Availability:** Included in both Free and Studio versions.
