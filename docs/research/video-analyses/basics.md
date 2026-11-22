<!-- Gemini (gemini-3.7-flash) observations of a YouTube video, captured 2026-11-22 via the watch skill. Untrusted evidence: not independently verified frame-by-frame. -->
[watch] asking gemini-3.7-flash…

# watch: video report

- **Source:** https://www.youtube.com/watch?v=SzttF-qnqsM (URL sent to Google)
- **Engine:** gemini-3.7-flash (agentic)
- **Gemini tokens:** 93037

## Answer (from Gemini)

_These are Gemini's observations of the video, not frames you viewed yourself. Relay them as such; rerun with `--engine local` to inspect frames directly._

Below is a complete, structured documentation of the DaVinci Resolve fundamentals taught in the video, detailing each control, on-screen action, and narration with precise timestamps.

---

### 1. Software Version Note & Discrepancies
* **Observed on screen [00:30, 00:32, 00:50, 03:20]:** The startup splash screen and workspace bottom-left badges display **`DaVinci Resolve 20 PUBLIC BETA`**. *(Note: Blackmagic Design URSA Cine 12K splash art corresponds to the Resolve 19 cycle; whether this is an early beta or branded preview title, Resolve 20 Beta is what appears on screen).*
* **Heard [00:15–00:22]:** Narrator Zach states that this tutorial covers the free version (with no watermarks), noting that most advanced AI tools are exclusive to the paid Studio version (though the inspector demonstrates tools labeled with "AI", such as the *AI Dialogue Leveler* at **[08:00]**).

---

### 2. Project Manager & Project Settings

#### Project Manager
* **Seen [00:30–00:41]:** When launched, the **Project Manager** window opens with storage tabs: **`Local`**, **`Network`**, and **`Cloud`**. Existing project tiles (e.g., *Untitled Project*, *Untitled Project 1*) are displayed.
* **Control [00:42]:** Click the **`New Project`** button in the lower-right corner.
* **Seen [00:44]:** A modal labeled **`Create New Project`** appears with a **`Name`** input field (entered as `MyProject`), a default media location path, and **`Cancel`** / **`Create`** buttons.
* **Control [00:50]:** Click the **`Home`** icon button (house symbol in the bottom-right corner of the workspace) at any time to return to the Project Manager.

#### Project Settings
* **Control [03:10]:** Open project settings by clicking the **gear icon (`Project Settings`)** in the extreme bottom-right corner.
* **Seen [03:12–03:19]:** Opens the **`Project Settings: MyProject`** window under **`Master Settings`** $\rightarrow$ **`Timeline Format`**:
  * **`Timeline resolution`** dropdown: Shown set to `1920 x 1080 HD` (options shown include `3840 x 2160 Ultra HD`, `2048 x 858 DCI Scope`, etc.) **[03:14–03:16]**.
  * **`Pixel aspect ratio`**: Set to `Square` **[03:14]**.
  * **`Timeline frame rate`**: Dropdown set to `24` frames per second **[03:16]**.
  * **`Playback frame rate`**: Set to `24` frames per second **[03:18]**.
  * **`Save`** / **`Cancel`** buttons at the bottom right **[03:18]**.
* **Project Saving [03:20–03:28]:**
  * **Heard [03:20]:** Save frequently using `Ctrl + S` (Windows) or `Cmd + S` (macOS).
  * **Seen [03:24–03:28]:** When unsaved changes accumulate, a red **`Edited`** badge appears next to the project name in the top title bar.

---

### 3. Page Layout and Workspace Roles
The bottom navigation bar lists seven workspaces **[00:50–01:25]**:
1. **`Media` [00:58]:** Manage source files, storage drives, metadata, and clone tools.
2. **`Cut` [01:02]:** Fast, streamlined trimming and rough-cut assembly.
3. **`Edit` [01:06]:** Core non-linear editing, multi-track timeline construction, titles, and effects.
4. **`Fusion` [01:10]:** Node-based compositing, motion graphics, and advanced visual effects.
5. **`Color` [01:14]:** Color wheels, curves, LUTs, and color grading.
6. **`Fairlight` [01:18]:** Multi-channel digital audio workstation, track mixing, and sound effects.
7. **`Deliver` [01:21]:** Video/audio rendering, codec configurations, and export presets.

---

### 4. Importing Media
* **Workspace [01:31]:** Switch to the **`Edit`** page.
* **Control / Panel [01:35–01:42]:** Open the **`Media Pool`** panel (top-left button). Drag and drop video, audio, or image files directly from an OS folder into the Media Pool bin area.
* **Source Preview [01:43–01:48]:** Hovering the mouse cursor horizontally across any clip thumbnail in the Media Pool scrubs and previews the footage.
* **Panel Header Toggles [01:54–01:58]:** Any interface panel (e.g., *Media Pool*, *Effects*) can be collapsed or revealed by clicking its title button in the top toolbar.

---

### 5. Timeline Preview & Navigation Controls
* **Clip Color Coding [02:00–02:08]:** Visual media placed on video tracks (`V1`, `V2`) appears in **blue**; audio clips placed on audio tracks (`A1`, `A2`) appear in **green**.
* **Timeline View Options [02:32–02:46]:**
  * Click the **`Timeline View Options`** icon button on the left above the track headers **[02:32]**.
  * Toggles: **`Thumbnail View`**, **`Viewer Background`**, **`Fixed Playhead`**, **`Display Audio Waveforms`**, **`Display Non-Rectified Waveforms`**, **`Display Full Waveforms`**, **`Display Waveform Border`** **[02:34–02:40]**.
  * Sliders: **`Track Height`** sliders for **`Video`** and **`Audio`** adjust vertical track size **[02:42–02:45]**.
* **Navigation Shortcuts [02:44–02:54]:**
  * **Zooming:** Hold `Alt` (or `Option`) and scroll the mouse wheel to zoom in/out **[02:45]**.
  * **Horizontal Scrubbing:** Hold `Ctrl` (or `Cmd`) and scroll the mouse wheel to scroll along the timeline **[02:51]**.
* **Viewer Playback Controls [02:56–03:08]:**
  * The preview viewer sits above the timeline.
  * Transport buttons: **`Play Reverse`**, **`Stop`**, **`Play Forward`** (or spacebar) **[02:58–03:02]**.
  * Red playhead marker: Drag or click along the timeline ruler to position on specific frames **[03:03–03:08]**.

---

### 6. Timeline Editing Steps
* **Selection Mode [03:31–03:34]:** Activate the primary pointer tool (**`Selection Mode - A`**) on the timeline toolbar.
* **Moving Clips [03:35–03:41]:** Click and drag clips horizontally to reposition in time, or vertically to move between tracks.
* **Unlinking Video and Audio [03:42–03:51]:** Right-click a clip with paired audio and click **`Link Clips`** (shortcut `Ctrl + Alt + L`) to deselect it; video and audio can now be moved independently.
* **Clip Overlap Logic [03:52–04:05]:**
  * Across different tracks: Clips on higher tracks (`V2`) obscure clips on lower tracks (`V1`) **[03:52–03:58]**.
  * On the same track: Overlapping an existing clip overwrites/trims the underlying portion **[03:59–04:05]**.
* **Undo [04:06–04:10]:** Press `Ctrl + Z` (or `Cmd + Z`).
* **Trimming Edges [04:12–04:16]:** Hover over the left or right boundary of a clip until the trim bracket appears, then drag inward or outward.
* **Speed / Retime Settings [04:18–04:52]:**
  * Right-click clip $\rightarrow$ select **`Change Clip Speed...`** **[04:18]**.
  * Modal parameters: **`Speed %`** (e.g., set to `250%` or `30%`), **`Frames per Second`**, **`Duration`**, **`Ripple Timeline`**, **`Reverse Speed`**, **`Freeze Frame`**, and **`Pitch Correction`** **[04:20–04:35]**.
  * **Optical Flow for Slow Motion [04:40–04:52]:** For clips slowed down significantly, open the **`Inspector`** panel $\rightarrow$ **`Video`** tab $\rightarrow$ scroll to **`Retime and Scaling`** $\rightarrow$ change **`Retime Process`** dropdown from *Project Settings* to **`Optical Flow`**.
* **Duplicating Clips [04:54–04:59]:** Hold `Alt` and drag a clip to make an immediate duplicate copy.
* **Deleting Clips [05:00–05:03]:** Select the target clip and press the `Backspace` key.
* **Splitting Clips [05:04–05:11]:** Click the razor blade icon (**`Blade Edit Mode - B`**) on the timeline toolbar, then click on any clip to slice it at that point.

---

### 7. Track Controls & Voiceover Recording
* **Voiceover Setup [02:10–02:30]:**
  * Right-click the track header column $\rightarrow$ select **`Add Track`** **[02:12]**.
  * Click the microphone icon (**`Record Voiceover`**) on the timeline toolbar **[02:16–02:18]**.
  * Window controls: Enter **`File Name`** (e.g., `MyRec`), select **`Audio Input`** device, and select destination **`Record Track`** (e.g., `Audio 2`) **[02:19–02:23]**.
  * Click the circular **`Record`** button to start recording, and click again to stop **[02:24–02:28]**.
* **Track Header Controls [05:12–05:39]:**
  * **`Lock Track`** (padlock icon): Locks track to prevent editing **[05:15–05:18]**.
  * **`Disable Video Track`** (film frame icon): Toggles track visibility off/on **[05:22–05:25]**.
  * **`Mute Track`** (`M` button): Mutes audio on that track **[05:26–05:28]**.
  * **`Solo Track`** (`S` button): Solos that audio track, muting all others **[05:30–05:33]**.
  * **Delete Track:** Right-click the track header $\rightarrow$ select **`Delete Track`** **[05:36–05:38]**.

---

### 8. Video, Audio, and Image Inspector

#### Video Tab [05:40–07:48]
* **General Controls:** Curved arrow **revert icon** resets parameters to default **[06:06]**; the **orange toggle switch** next to section headers enables or disables the group **[06:10]**.
* **Playhead Rule [06:14–06:18]:** The red playhead marker must be positioned directly over the clip on the timeline to preview inspector modifications.
* **Sections & Controls:**
  * **`Transform` [05:46–06:05, 06:38–06:43]:**
    * `Zoom` (X / Y linked by chain icon), `Position` (X / Y), `Rotation Angle`, `Anchor Point` (X / Y).
    * `Pitch` and `Yaw` (for 3D tilting/rotation) **[06:38–06:41]**.
    * `Flip` (horizontal and vertical mirror buttons) **[06:42]**.
  * **`Cropping` [06:46–06:50]:** `Crop Left`, `Crop Right`, `Crop Top`, `Crop Bottom`, and `Softness` slider (adds feathering).
  * **`Dynamic Zoom` [06:52, 07:34–07:48]:**
    * Generates animated camera push/pull.
    * Controlled in the viewer via the tool dropdown (bottom left of viewer): A **green box** designates the starting framing; a **red box** designates the end framing **[07:34–07:41]**.
  * **`Composite` [06:22, 06:58–07:01]:** `Composite Mode` (dropdown containing blend modes: *Normal, Add, Color Burn, Color Dodge, Darken, Difference, Multiply*, etc.) and `Opacity` slider (0–100%).
  * **`Stabilization` [07:02–07:05]:** Contains `Mode` dropdown (e.g. *Perspective*) and **`Stabilize`** button to calculate motion smoothing.
  * **`Lens Correction` [07:06–07:09]:** Contains **`Analyze`** button and manual `Distortion` slider.
  * **`Retime and Scaling` [06:24–06:29]:** Contains `Scaling` dropdown (*Fit, Fill, Stretch, Crop*).
* **On-Screen Viewer Overlay Tools [07:10–07:32]:**
  * Dropdown menu at the bottom-left of the viewer window contains: **`Transform`**, **`Crop`**, **`Dynamic Zoom`**, **`Open FX Overlay`**, **`Fusion Overlay`**, **`Annotations`**.
  * Enabling **`Transform`** displays on-screen bounding box handles/nodes to click and drag scale, position, and rotation directly **[07:16–07:28]**.

#### Audio Tab [07:50–08:11]
* **`Volume` [07:54]:** Master gain slider in decibels (dB).
* **`Pan` [07:58]:** Stereo balance slider between Left (-100) and Right (+100).
* **`AI Dialogue Leveler` [08:00–08:05]:**
  * `Mode` dropdown (*Allow wider dynamics, Reduce loud dialogue, Optimize moderate levels, Lift soft dialogue, Lift soft and suppress sources*).
  * Checkboxes for *Background reduction* and numeric field for *Output Gain*.
* **`Pitch` [08:06–08:09]:** Adjust via `Semi Tones` and `Cents`.
* **`Equalizer` [08:10]:** Graphical multi-band parametric EQ display.

#### Image Tab (Camera RAW) [08:16–08:21]
* When selecting a RAW photo (e.g., `.NEF`), the **`Image`** tab provides RAW processing: `Color Space`, `Gamma`, `Temperature`, `Tint`, `Exposure`, `Sharpness`, `Highlights`, `Shadows`, `Color Boost`, `Saturation`, `Lift`, `Gain`.

---

### 9. Keyframes and Automation
* **Keyframes Button [08:26]:** Click the **`Keyframes`** button on the top timeline toolbar to open the Timeline Keyframe Editor panel.
* **Params List [08:28–08:34]:** Lists automatable properties categorized under *Transform*, *Cropping*, *Opacity*, *Distortion*.
* **Curve Editor Toggle [08:34–08:44]:**
  * Click the top-left view dropdown in the editor to switch from track blocks to **`Keyframe Curves`** **[08:34]**.
  * Click the **`Params`** dropdown to check or uncheck individual properties (e.g., isolating *Composite $\rightarrow$ Opacity*) **[08:42]**.
* **Adding & Adjusting Keyframes [08:46–09:15]:**
  * Position the playhead marker at the desired time point **[08:46]**.
  * Hold **`Alt`** (or **`Option`**) and click directly on the parameter line to insert a keyframe point **[08:48–08:52]**.
  * Drag points horizontally to alter timing; drag vertically to change the parameter value **[08:58–09:05]**.
  * Select a keyframe and click the curve interpolation buttons at the top of the curve window to convert sharp angular changes into smooth Bézier curves **[09:08–09:13]**.
* **Removing Keyframes [09:16–09:21]:**
  * Select a point and press `Ctrl + X` (or `Cmd + X` / `Backspace`) **[09:16]**.
  * Or click the curved reset arrow next to the parameter in the parameters list to clear all keyframes on that attribute **[09:18–09:21]**.

---

### 10. Effects
* **Panel Location [09:23]:** Click **`Effects`** on the top toolbar to reveal the library on the left.
* **Toolbox Subcategories [09:24–09:41]:**
  * **`Effects`**: Fusion-based visual effects templates **[09:24]**.
  * **`Open FX` $\rightarrow$ `Filters`**: Professional visual effects (e.g., *Radial Blur*, *Film Damage*, *Box Blur*) **[09:34–09:48]**.
  * **`Audio FX` / `Fairlight FX`**: Audio filtering and dynamics plugins (e.g., *Fairlight FX EQ*, *Reverb*) **[09:38–09:41]**.
* **Preview & Application [09:44–09:51]:**
  * Hovering the cursor over an effect thumbnail live-previews the effect on the timeline clip **[09:44–09:48]**.
  * Drag and drop the effect onto the clip. The clip displays an **`fx`** badge on its timeline block **[09:50]**.
* **Managing Effects in Inspector [09:52–10:05]:**
  * An **`Effects`** / **`Open FX`** tab opens in the Inspector panel.
  * Adjust plugin parameters (e.g., `Smooth Strength`, `Film Blur`, `Tilt Angle`, `Add Dirt`) **[09:56–10:01]**.
  * Use the **up/down arrows** to alter effect stack order **[10:02]**.
  * Click the **trash can / bin icon** (**`Delete Filter`**) to remove the effect **[10:04]**.

---

### 11. Transitions
* **Access [10:08–10:14]:** In the Effects library, open **`Toolbox`** $\rightarrow$ **`Video Transitions`** (or **`Audio Transitions`**).
* **Application [10:20–10:24]:** Drag and drop a transition (e.g., `Circles`, `Cross Dissolve`, `Blur Dissolve`) directly onto:
  1. The cut point between two contiguous clips on the same track, or
  2. The start or end edge of a single clip.
* **Customizing Transitions [10:28–10:45]:**
  * Click the transition block on the timeline to select it, then open the **`Inspector`** panel $\rightarrow$ **`Transition`** tab **[10:28]**.
  * Set timing: **`Duration`** (in seconds / frames) and **`Alignment`** (*Start on Edit*, *Center on Edit*, *End on Edit*) **[10:29]**.
  * Effect-specific parameters (e.g., for `Circles`: `Circle Color`, `Red`, `Green`, `Blue`, `Alpha`, `Circle Thickness`, `Motion Blur`) **[10:30–10:35]**.
  * Trim duration interactively on the timeline by dragging the outer edges of the transition block **[10:36–10:41]**.
  * To delete, select the transition and hit `Backspace` **[10:42–10:45]**.

---

### 12. Text and Titles
* **Access [10:48–10:52]:** In the Effects library, open **`Toolbox`** $\rightarrow$ **`Titles`**.
* **Adding to Timeline [10:52–11:10]:** Drag a title template (e.g., `Digital Glitch`) onto the timeline.
* **Track Stacking Rule [11:00–11:10]:**
  * **Heard & Seen [11:00–11:10]:** The text clip must be positioned on a higher video track (e.g., `V2`) above background video clips (`V1`) so it remains visible without being obscured.
* **Inspector Formatting [11:12–11:26]:**
  * **`Title` Tab $\rightarrow$ `Controls` [11:12–11:21]:**
    * Text entry field: Type custom content (shown replaced with `FLIGHT`) **[11:16]**.
    * Typography: **`Font`** (e.g., *Open Sans*), **`Font Style`** (e.g., *Extrabold*), **`Size`**, **`Tracking`**, **`Line Spacing`**, **`V Anchor`**, **`H Anchor`** **[11:18]**.
    * **`Color`**: Click the color swatch box to open the OS/Resolve color palette picker, select a shade (e.g., Red), and click **`OK`** **[11:19–11:21]**.
  * **`Settings` Tab [11:22–11:26]:** Contains standard video properties (`Transform`, `Position`, `Zoom`, `Opacity`, `Cropping`) applied to the title layer as a whole.

---

### 13. Render and Export Settings
* **Workspace [11:30]:** Click the rocket icon at the bottom of the screen to open the **`Deliver`** page.
* **Timeline In/Out Range [11:31–11:36]:** Drag the gray boundary handles above the timeline ruler to define the specific timeline section to be rendered.
* **Render Settings Panel (Top-Left) [11:38–12:25]:**
  * **Presets Bar [11:38–12:05]:** Top row offers presets: **`Custom Export`**, **`H.264`**, **`H.265`**, **`ProRes`**, **`YouTube`**, **`Vimeo`**, **`TikTok`**, and **`Audio Only`** (exports MP3/WAV audio) **[12:02–12:05]**.
  * **Naming & Location [12:06–12:09]:** Type target file name into **`File Name`** (entered as `MyVideo`) and click **`Browse`** beside **`Location`** to set the output directory.
  * **Render Mode [12:10–12:21]:**
    * **`Single clip`**: Renders the timeline/In-Out range as a single contiguous video file **[12:10]**.
    * **`Individual clips`**: Renders selected source clips as separate, individual output files **[12:16–12:20]**.
  * **Video Sub-tab Parameters [11:44–11:49, 12:22]:**
    * **`Format`** dropdown: QuickTime, MP4, etc. **[11:44]**.
    * **`Codec`** dropdown: H.264, H.265, Apple ProRes, DNxHR, etc. **[11:46]**.
    * **`Resolution`** dropdown: Defaults to *Timeline Resolution* (`1920 x 1080 HD`) or custom dimensions **[11:48]**.
    * **`Frame rate`** dropdown: Set to timeline frame rate (e.g., `24`) **[12:22]**.
    * **`Quality`**: Radio button toggle between *Automatic* and *Restrict to* [bitrate] Kb/s **[11:48]**.
  * **Audio Sub-tab Parameters [11:50–11:54]:**
    * `Codec` (Linear PCM, AAC, MP3) and `Bit Depth` (16, 24, 32).
* **Render Queue & Processing [12:24–12:37]:**
  * Click **`Add to Render Queue`** at the bottom of the Render Settings panel **[12:24]**.
  * The job appears in the **`Render Queue`** panel on the right (labeled `Job 1`) **[12:26–12:30]**.
  * Click the **`Render 1`** (or **`Render All`**) button **[12:32]**.
  * The progress percentage, time elapsed, and estimated time remaining appear while the viewer processes and outputs the final file **[12:34–12:37]**.
