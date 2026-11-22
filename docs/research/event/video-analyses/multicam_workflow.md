
# watch: video report

- **Source:** https://www.youtube.com/watch?v=iLCy6tckbAg (URL sent to Google)
- **Engine:** gemini-3.7-flash (agentic)
- **Gemini tokens:** 13093

## Answer (from Gemini)

_These are Gemini's observations of the video, not frames you viewed yourself. Relay them as such; rerun with `--engine local` to inspect frames directly._

### 1. Software Used & Proof
* **Software:** **DaVinci Resolve**
* **Proof:** 
  * **Heard:** The host Kevin explicitly introduces the tutorial stating: *"Today I'm going to show you how to create multicam setups in DaVinci Resolve"* [00:03].
  * **Seen:** The interface displays the standard DaVinci Resolve layout and page navigation bar (Cut page [03:15], Edit page [05:15], and Fairlight page [21:05]).

---

### 2. DaVinci Resolve Studio-Only Feature
* **Speed Warp Motion Estimation:** When fixing mixed frame rates under Inspector > **Retime and Scaling** > **Motion Estimation**, the host notes that **Speed Warp** is a Studio-only feature [19:10–19:22] (he uses *Enhanced Better* instead for speed/standard availability).

---

### 3. Multicam Clip Creation Workflow

#### Bin Organization & Camera Metadata
* **Metadata setup:** In the Media Pool list view, enable the **Camera #** column and tag clips with their respective camera numbers [02:30–02:45]. This ensures clips from the same camera line up on the same track/angle across stops and restarts [02:50–03:10].
* **Parent bin navigation:** When preparing to sync in the Cut page, click and highlight the parent folder/all sub-bins in the Media Pool tree so all camera angles appear simultaneously [03:15–03:32].
* **Bin tidying:** Newly generated multicam clips should be moved from subfolders into the Master bin [04:55–05:07, 18:00–18:07].

#### Sync Options (Timecode, Audio Waveform, In/Out)
* **Audio Waveform (Demonstrated):**
  * *Cut Page Sync Bin:* Select all clips, click **Sync Clips** [03:36], choose **Sync by Audio Waveform** [03:48–03:52], verify alignment, and click **Save Sync** [03:58–04:02].
  * *Timeline Auto-Align:* In the Edit timeline, select clips under the playhead across tracks and execute **Auto-Align Clips Based on Waveform** (assigned to keyboard shortcut `Alt + S`) [02:05–02:15, 17:45–17:55].
* **Timecode / In-Out Points (Not Demonstrated):** The video relies entirely on audio waveform sync and does **not** demonstrate syncing via Timecode or manual In/Out points (the host only notes at [22:10] that manual sync methods exist when cameras lack audio).

#### Angle Sync & Alternate Workflows
* **Direct Sync Bin creation:** Saving sync in the Cut page automatically generates a multicam clip in the Media Pool [04:40–04:52].
* **Compound clip method (music video / take-by-take):** Lay camera angles on video tracks 1–3, align to the music track using waveform sync [17:45], select the video tracks, create a **New Compound Clip** per take [18:10–18:25], then right-click the compound clips in the Media Pool and select **Convert Compound Clip to Multicam Clip** [18:28–18:40].
* **Angle switching & Viewer options:**
  * Toggle the Source viewer to Multicam view [05:22, 13:05] and configure the grid size (e.g., 2×2, 3×3) at the bottom right [13:10–13:22].
  * Use numbered shortcuts (1, 2, 3, etc.) to cut between angles during playback [05:30–05:40], or turn on **Timeline > Selection Follows Playhead** [05:45] to switch active camera angles without cutting [06:05–06:25].

#### Audio Routing & Options
* **Audio Channel Fix:** If a multi-channel recording causes auto-sync to fail, inspect channels in the Source viewer [10:30–10:45], open **Clip Attributes > Audio**, eliminate silent tracks, and map the active track (e.g., Channel 2) [10:50–11:05].
* **Track Configuration:** Ensure imported stereo audio is not placed on a mono track; right-click the track header and select **Change Track Type to Stereo** [17:15–17:28].
* **Switching Multicam Audio Source:** Turn off **Linked Selection** [07:38], select the audio clip, and switch the angle/channel (e.g., pressing `4` or right-click > **Switch Multicam Clip Angle**) to designate the primary audio recording [07:45–08:05].
* **Preventing Audio from Switching with Video Cuts:**
  * *Method 1:* Re-link the primary audio clip to the video cuts using **Link Clips** (`Ctrl + L`) [08:20–08:35].
  * *Method 2:* Flatten the multicam audio clip [08:35–08:45].

#### Flattening
* Right-click the multicam audio clip in the timeline and select **Flatten Multicam Clip** [08:35–08:45, 13:30–13:38]. This locks the audio to the selected angle permanently, isolating it from subsequent video cuts.

---

### 4. Mistakes & Pitfalls Warned About
1. **Sync Bin Tracks Locked by Default:** Opening a multicam clip in a timeline reveals that all audio and video tracks are automatically locked [06:48–07:05]. You must unlock them (recommended via shortcut) before editing inside the multicam [01:10–01:20, 07:00–07:15].
2. **Audio Switching During Video Cuts:** If the audio remains an unflattened, unlinked multicam angle, making video cut edits inadvertently switches the audio track to the video camera's scratch mic [07:20–07:35].
3. **Multi-Channel Silence Causing Sync Failures:** Having unused silent audio channels (e.g., 6 channels recorded with audio only on channel 2) causes Resolve's auto-sync to fail with an error [10:15–10:25]. Silent channels must be removed in Clip Attributes first [10:50–11:05].
4. **Including Pickup Shots in Full Take Multicam:** Including pickup shots or aborted takes when generating full-length multicams creates misaligned segments; pickup clips should be filtered out beforehand [11:20–12:15].
5. **Single-Screen Inspector Viewer Bug:** In a single-screen layout, opening the Inspector hides the Multicam viewer by default [09:00–09:12]. Restore it by pressing `P` or selecting **Workspace > Active Panel Selection > Source Viewer** [09:12–09:22].
6. **Fairlight Track-Level Effects Do Not Save:** In the Fairlight page inside a multicam clip, audio effects placed on **tracks** disappear after closing/switching timelines [21:05–21:35]. Audio effects must be applied at the **clip level** to persist [21:35–21:50].
7. **Mixed Frame Rate Stutter:** Dropping a 60 fps clip into a 24 fps multicam can cause frame cadence jumps [19:50–20:05]. To fix this, change video frame rate in Clip Attributes to 23.976 fps [18:55–19:05], change clip speed back to 59.94 fps [19:05–19:10], and set **Retime Process** to *Optical Flow* with *Enhanced Better* or *Speed Warp* [19:10–19:20].
