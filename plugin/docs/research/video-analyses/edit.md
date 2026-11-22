<!-- Gemini (gemini-3.7-flash) observations of a YouTube video, captured 2026-11-22 via the watch skill. Untrusted evidence: not independently verified frame-by-frame. -->
[watch] asking gemini-3.7-flash…

# watch: video report

- **Source:** https://www.youtube.com/watch?v=GzCVxx33yOI (URL sent to Google)
- **Engine:** gemini-3.7-flash (agentic)
- **Gemini tokens:** 112766

## Answer (from Gemini)

_These are Gemini's observations of the video, not frames you viewed yourself. Relay them as such; rerun with `--engine local` to inspect frames directly._

Here is the step-by-step editing workflow taught in the tutorial, detailing the exact menus, panels, tools, keyboard shortcuts, timestamps, and distinctions between what is heard and what is seen.

---

### 1. Project & Timeline Settings
* **Project Creation:**
  * **00:58 – 01:03:** In the initial **Project Manager** window, previous projects are listed.
  * **01:03 – 01:12:** The host clicks **New Project**. He verbally says to call it *"just an edit"*, but types **Justin Edit** into the project name field (*seen at 01:07*). He leaves the default project location and clicks **Create**.
* **Configuring Settings:**
  * **04:26 – 04:30:** The host opens project settings by clicking the gear icon (**Project Settings**) in the bottom-right corner of the interface.
  * **04:55 – 05:04:** In the **Project Settings** window under **Master Settings** $\rightarrow$ **Timeline Format**, click the **Timeline resolution** dropdown. He leaves it set to **3840 x 2160 Ultra HD** (4K), noting it can also be 1080p.
  * **05:05 – 05:14:** Below resolution is the checkbox **Use vertical resolution** for portrait/vertical video. The host checks it briefly to demonstrate, then unchecks it to stay in widescreen.
  * **05:18 – 05:29:** Click the **Timeline frame rate** dropdown. The host instructs matching this to camera settings (e.g., 24 fps or 30 fps) and selects **30**.
  * **05:30 – 05:40:** *Heard:* If you are unsure of your footage frame rate, Resolve will automatically prompt you to match it when you import your video.
  * **05:42:** Click the **Save** button in the lower-right corner of the window.

---

### 2. Difference Between Cut and Edit Pages
* **01:17 – 02:25:** The host reviews the bottom navigation bar pages:
  * **Cut Page (01:54 – 02:14):** Designed as a streamlined workspace to quickly trim down large amounts of raw footage and build out a rapid first rough cut/assembly.
  * **Edit Page (02:14 – 02:25):** The full-featured NLE workspace equivalent to Adobe Premiere Pro or Apple Final Cut Pro. It includes multitrack editing, advanced trimming, media bins, effects, and inspector controls. This is where most of the editing workflow takes place.

---

### 3. Importing Media & Previewing
* **Importing Media:**
  * **05:50 – 05:54:** *Heard:* Importing can be done in the dedicated **Media** page or on the **Cut** page by right-clicking.
  * **05:58 – 06:01:** On the **Edit** page, in the **Media Pool** panel (top-left), right-click empty space and choose **Import Media...**.
  * **06:02 – 06:05:** *Alternative method shown:* Top menu bar $\rightarrow$ **File** $\rightarrow$ **Import** $\rightarrow$ **Media...**.
  * **06:16 – 06:25:** In the system file dialog, hold `Command` (Mac) or `Control` (Windows) to select multiple video/audio files, then click **Open**.
* **Previewing & Setting In/Out Points:**
  * **06:40 – 06:47:** Double-click a clip in the **Media Pool** to open it in the source **Preview Monitor** (viewer).
  * **06:48 – 06:55:** Drag the playhead on the mini-timeline under the preview window to scrub through footage.
  * **07:05 – 07:18:** Press `I` on the keyboard (or drag the left selection marker) to set the **In point**.
  * **07:19 – 07:29:** Press `O` on the keyboard (or drag the right selection marker) to set the **Out point**.
  * **07:33 – 07:44:** Click and drag directly from the preview monitor into the timeline to drop only the marked sub-clip (video and linked audio).
  * **08:00 – 08:08:** Entire clips can also be dragged directly from the **Media Pool** bin straight onto timeline track `V1`/`A1`.

---

### 4. Basic Editing Operations & Keyboard Shortcuts
* **Interface & Zoom Controls:**
  * **08:13 – 08:21:** Zoom out timeline: `Command` + `-` (Mac) / `Control` + `-` (Windows). Zoom in timeline: `Command` + `+` (Mac) / `Control` + `+` (Windows).
  * **08:22:** Timeline zoom can also be controlled using the horizontal **Zoom slider** above the track headers.
  * **08:30 – 08:38:** Click the **Media Pool** button on the top-left toolbar to hide the panel and expand timeline workspace.
  * **08:39 – 08:55:** Click **Timeline View Options** (icon above track headers) to adjust individual video and audio track heights and display waveforms.
* **Trimming & Cutting Operations:**
  * **10:05:** Undo: `Command` + `Z` (Mac) / `Control` + `Z` (Windows) (*shown on on-screen graphic*).
  * **Standard Selection Mode (09:35 – 10:02):** Using the arrow pointer (*Selection Mode*), hover over the start/end edge of a clip until the cursor changes, then drag inward to trim. This leaves an empty gap. Click the empty gap space to select it and press `Delete` (or `Backspace`) to close it.
    * *Shortcut note:* *Seen on screen graphic at 11:13:* `PRESS "V" SELECTION MODE` (host verbally refers to clicking the arrow icon).
  * **Trim Edit Mode (10:11 – 10:32):** Click the **Trim Edit Mode** icon on the timeline toolbar or press `T` (*seen on screen graphic at 10:11*). Dragging the edge of a clip dynamically ripples the timeline, automatically closing gaps without leaving empty space.
  * **Blade Edit Mode (10:42 – 11:15):** Press `B` on the keyboard (or click the razor blade icon on the toolbar; *graphic shows `PRESS "B" BLADE EDIT MODE`*). Click anywhere on a timeline clip to cut/slice. Switch back to selection mode by clicking the arrow tool or pressing `V`.
  * **Blade at Playhead (12:05 – 12:18):** `Command` + `B` (Mac) / `Control` + `B` (Windows) cuts all active clips directly at the playhead position without switching tools.
  * **Ripple Delete (Clips):**
    * **11:20:** Pressing `Delete` deletes a selected clip and leaves a gap.
    * **11:26 – 11:41:** Pressing `Shift` + `Delete` performs a ripple delete: it removes the selected clip(s) and closes the gap automatically. Multi-select clips with `Command`/`Control` + click before pressing `Shift` + `Delete`.
  * **Ripple Edit Left (13:10 – 13:25):** `Command` + `Shift` + `[` (Mac) / `Control` + `Shift` + `[` (Windows). Slices at the playhead, deletes everything back to the previous edit point, and closes the gap in one stroke.
  * **Ripple Edit Right (13:42 – 13:51):** `Command` + `Shift` + `]` (Mac) / `Control` + `Shift` + `]` (Windows). Slices at the playhead, deletes everything forward to the next edit point / clip end, and closes the gap.

---

### 5. Removing Silences
* **14:18 – 14:26:** Select the clip, go to the top menu bar $\rightarrow$ **Clip** $\rightarrow$ **Audio Operations** $\rightarrow$ **Ripple Delete Silence...** (*spoken by the host as "Ripple delete silences"*).
* **14:27 – 14:55:** The **Remove Silence** dialog box opens:
  * **Threshold (14:34):** Sets the decibel silence threshold (default displayed is `-25.0 dB`).
  * **Pre head (14:41 – 14:44):** Buffer before sound begins (adjusted from `0` to `12` frames).
  * **Post tail (14:46 – 14:50):** Buffer after sound ends (adjusted from `0` to `9` frames).
  * *(Visual detail not spoken: The dialog also includes a `Minimum to strip` setting set to 30 frames and a `Cross fade audio` checkbox).*
* **14:55 – 15:05:** Click the **Remove** button. Resolve automatically cuts out all detected quiet segments and ripples the timeline together.

---

### 6. B-Roll, Overlays & Titles
* **Adding & Layering B-Roll:**
  * **16:10 – 16:21:** Drag B-roll clips from the **Media Pool** onto the track above the primary footage (track `Video 2` / `V2`).
  * **16:35, 18:02 – 18:14:** Higher video layers take visual priority over underlying tracks while the underlying primary audio (`A1`) continues to play.
* **Audio Handling for Overlays:**
  * **17:33 – 17:42:** Hover over the center white volume line on a timeline audio clip until the pointer changes to a vertical double arrow, then drag down to lower volume.
  * **17:50 – 18:01:** Select the audio clip, open the **Inspector** panel (top right) $\rightarrow$ **Audio** tab $\rightarrow$ drag the **Volume** slider all the way down to mute.
  * **29:30 – 29:38:** Click the **M** (Mute) button on the track header (e.g., `Audio 2`) to mute all B-roll audio at once.
* **Transforming B-Roll / Overlays:**
  * **18:22 – 18:45:** Select the clip $\rightarrow$ open **Inspector** $\rightarrow$ **Video** tab $\rightarrow$ **Transform**:
    * Adjust **Zoom** (drag slider below 1.0) to shrink the overlay size.
    * Adjust **Position** (X and Y coordinates) to place the overlay in a corner.
  * **Jump Cut / Digital Punch-In (22:50 – 23:35):** On a talking head hard cut, select the second clip $\rightarrow$ **Inspector** $\rightarrow$ **Video** $\rightarrow$ **Transform** $\rightarrow$ increase **Zoom** and adjust **Position Y** to align eye level, simulating a two-camera setup.
* **Adding Titles and Text:**
  * **19:07 – 19:25:** Click **Effects** on the top toolbar $\rightarrow$ expand **Titles** panel on the left. Hover over titles to preview animations.
  * **19:33 – 19:42:** Drag a title preset (the host chooses **Ribbon**) onto a video track above the footage.
  * **19:50 – 20:12:** Select the title clip $\rightarrow$ in **Inspector** under the **Title** tab, edit the text box (changes text to "Justin Brown"), adjust font, size, and change color (selects blue).
  * **20:18 – 20:35:** Switch to the **Settings** tab in the Inspector to modify the title's **Position** coordinates to move it down the screen.
  * **20:48 – 20:55:** Titles can also be transformed directly in the viewer using on-screen bounding box handles.

---

### 7. Transitions
* **21:10 – 21:22:** Click **Effects** (top left) $\rightarrow$ open **Video Transitions** (or **ResolveFX Transitions** below it).
* **21:24 – 21:35:** Hover the mouse cursor over transitions (e.g., *Additive Dissolve*, *Blur Dissolve*, *Cross Dissolve*) to preview the effect in the viewer.
* **21:45 – 22:05:** Drag **Cross Dissolve** from the panel and drop it directly onto the cut point between two timeline clips.
* **22:10 – 22:25:** Drag **Cross Dissolve** onto the beginning or end of an upper B-roll clip to fade the overlay in or out.
* **22:30 – 22:38:** Zoom in on the timeline and drag the outer edge handles of the transition block to lengthen or shorten the fade duration.
* **22:45:** Click the transition icon on the timeline to select it and press `Delete` to remove it.

---

### 8. Speed Changes
* **24:58 – 25:14:** Select a clip on the timeline $\rightarrow$ open **Inspector** $\rightarrow$ **Video** tab $\rightarrow$ click/expand **Speed Change**:
  * **Direction:** Click the right arrow for normal forward playback; click the left arrow for reverse playback.
  * **Freeze Frame:** Click the snowflake icon to freeze the frame at that position.
* **25:15 – 25:38:**
  * **Speeding up:** Drag the **Change Speed** slider above `100.00%`.
  * **Slow motion:** Drag the **Change Speed** slider below `100.00%` (the host demonstrates setting it to `50%` / `49%`).
* **AI Optical Flow / Speed Warp (Studio Version):**
  * **25:54 – 26:10:** In **Inspector** $\rightarrow$ **Video**, scroll down and expand **Retime and Scaling**. Click the **Motion Estimation** dropdown and select an AI option such as **AI Speed Warp Faster** or **AI Speed Warp Better**.
  * *Seen on screen at 26:04:* An on-screen banner states: `PAID: AI SPEED WARP IS STUDIO-ONLY`.

---

### 9. Render & Export Settings
* **36:14 – 36:16:** Click the **Deliver** page icon (rocket ship icon) on the bottom navigation bar.
* **Render Settings Panel (Top Left):**
  * **36:18 – 36:43:** Under **Render Settings**, click the **Preset** dropdown. Presets include **YouTube** (with sub-options for *720p*, *1080p*, *1440p*, *2160p / 4K*), Vimeo, and TikTok.
  * **36:44 – 36:46:** For a general standalone high-quality file, the host chooses the **H.264 Master** preset.
  * **36:46 – 36:51:** Next to **Location**, click **Browse**, navigate to the destination folder (e.g., `Downloads`), and click **Save**.
  * **36:58 – 37:05:** Under the **Video** sub-tab, open the **Format** dropdown to switch between **QuickTime** (.mov) and **MP4** (.mp4).
  * **37:08 – 37:12:** In the **File Name** field, the host enters a file name (*verbally: "Justin edit"*).
* **Render Queue & Export Execution:**
  * **37:12 – 37:14:** Click the **Add to Render Queue** button at the bottom of the **Render Settings** panel.
  * **37:15 – 37:21:** In the **Render Queue** panel (top right), verify `Job 1` is listed, then click **Render All** to start rendering the final video.
