
# watch: video report

- **Source:** https://www.youtube.com/watch?v=Sqc0_t9SRn0 (URL sent to Google)
- **Engine:** gemini-3.7-flash (agentic)
- **Gemini tokens:** 35021

## Answer (from Gemini)

_These are Gemini's observations of the video, not frames you viewed yourself. Relay them as such; rerun with `--engine local` to inspect frames directly._

### 1. Software Used & Proof
* **Software:** **DaVinci Resolve Studio**
* **Proof:**
  * **Heard:** The presenter repeatedly names the software as *"DaVinci Resolve 21 version"* (00:03, 04:19, 06:51) and *"DaVinci Resolve"* (00:58, 05:07, 07:08).
  * **Seen:** 
    * The lower-left corner of the workspace displays `DaVinci Resolve Studio` (01:05, 04:26, 05:08).
    * DaVinci Resolve’s signature bottom page navigation bar (Media, Cut, Edit, Fusion, Color, Fairlight, Deliver) is visible (01:06–01:08).
    * DaVinci Resolve's three-color wheel icon appears on pop-ups such as the *“Change Project Frame Rate?”* dialog (01:32–01:34) and the *“Auto Sync Failed”* warning (02:48–02:58).

---

### 2. Resolve Studio-Only Features Flag
* **Tutorial Features:** The presenter does **not** identify any multicam features shown (angle sync, adaptive tracks, multicam switching) as Studio-only; standard multicam editing is available in both free and Studio versions.
* **Mention of AI:** At 07:05, the presenter mentions an upcoming video about editing multicam with *AI in DaVinci Resolve* (DaVinci Neural Engine AI tools are typically Studio-only), but it is not demonstrated in this video.

---

### 3. Mistakes Warned About
1. **Missing Reference Audio on All Cameras:** Without timecode, all devices must capture audible audio waveforms for sound sync to work (00:39–00:54, 02:20–02:32).
2. **Project Frame Rate Mismatch:** Failing to match the project frame rate to camera recording frame rates (e.g., 24 fps vs. 25 fps). You must click **Change** when prompted upon clip import (01:31–01:45).
3. **Hardcoding Audio Channel for Sync:** Leaving the sync channel set to **Channel 1** when audio is recorded on another channel (e.g., channels 3/4 on an FX6) causes **“Auto Sync Failed”** (02:35–03:00).
4. **Leaving the Inspector Open:** Leaving the Inspector panel open obstructs the multicam dual viewer layout; it must be closed before switching viewer modes (04:26–04:30).
5. **Staying in Single Viewer Mode:** Multicam angles cannot be monitored alongside timeline playback unless Single Viewer is changed to Dual Viewer mode (04:30–04:44).

---

### 4. Resolve Multicam Guide

#### A. New UI & Timeline Layout
* **Dual Viewer Setup:** Close the Inspector (04:26–04:30), then click the **Dual Viewer Mode** icon at the top right of the viewer panel (04:36–04:44).
* **New Multicam Location:** 
  * *Heard & Seen:* In previous versions, multicam view was selected from the dropdown at the bottom-left of the left/source viewer (04:47–04:55).
  * *Heard & Seen:* In the version demonstrated, the **Multicam** toggle button has moved to the toolbar directly below the right/timeline viewer (04:56–05:11). Clicking it turns the left screen into the multicam angle grid (05:12–05:14).

#### B. Angle Sync Settings
* In the **New Multicam Clip** dialog:
  * Set **Angle Sync** to **Sound** to align clips using audio waveforms (02:18–02:23, 03:09–03:11).
  * Set **Channel** to **Automatic** so Resolve detects audio across all available camera tracks automatically (03:11–03:17).

#### C. Audio Channel Choices
* **Adaptive Tracks during Creation:** In the multicam dialog, set **Multicam Audio** to **Adaptive Tracks** (03:18–03:29).
* **Switching Active Audio Angle on Timeline:** 
  * Right-click the multicam clip’s audio track on the timeline (03:57–04:00).
  * Navigate to **Switch Multicam Clip Angle** and select the angle containing the cleanest master audio (04:00–04:15).

#### D. Switching Angles (Video-Only vs. Audio-Only)
* Above the timeline / below the multicam viewer, select the switching mode icon (05:14–05:22):
  * **Video Only:** Click the filmstrip icon (05:20–05:22) to switch only camera video angles while locking master audio.
  * **Video and Audio:** Click the combined filmstrip/music note icon (05:18).
  * **Audio Only:** Click the music note icon to switch audio channels independently.

#### E. Live Cut Tips
* **Keyboard Hotkeys:** Start timeline playback (Spacebar) and tap number keys (`1`, `2`, `3`, etc.) corresponding to angle numbers to cut live in real time without stopping (05:27–05:46, 06:33–06:44).
* **Mouse Selection:** Alternatively, click directly on any angle quadrant in the multicam viewer during playback to switch angles manually (06:44–06:48).
