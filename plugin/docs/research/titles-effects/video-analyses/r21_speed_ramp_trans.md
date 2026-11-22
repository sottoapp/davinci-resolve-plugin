
# watch: video report

- **Source:** https://www.youtube.com/watch?v=NW61HS1EBUE (URL sent to Google)
- **Engine:** gemini-3.7-flash (agentic)
- **Gemini tokens:** 50541

## Answer (from Gemini)

_These are Gemini's observations of the video, not frames you viewed yourself. Relay them as such; rerun with `--engine local` to inspect frames directly._

### 1. Software Used, Edition, and Version

* **Software:** DaVinci Resolve.
* **Edition & Version Discrepancy:**
  * **Heard & Overlay Text:** The narrator states, *"This is DaVinci Resolve 21.0.4"* ([00:05]–[00:09]), with on-screen text displaying *"Speed Ramp Transitions DaVinci Resolve 21"* ([00:00]–[00:05]) and *"21.0.4"* ([00:09]–[00:12]).
  * **Seen in UI (Proof):** The Windows taskbar at the bottom-left displays the application name and icon: **`DaVinci Resolve Studio 19`** ([00:06], [00:44], [01:26]). The standard DaVinci Resolve Edit page interface is shown throughout the video.

---

### 2. Workflow Breakdown, Menus, Effects, Settings, and Warnings

* **Third-Party / Studio Status:** 
  * All tools demonstrated are native built-in DaVinci Resolve features (no third-party add-ons or paid plugins are used). The presenter is running the **Studio** edition (seen on taskbar at [00:06]), though Retime controls and Edit page curves are standard native features.
* **Exact Menus & Settings:**
  * **Beats Setup:** Placed blue timeline markers 2 seconds apart to simulate cutting to music beats ([00:50]–[01:00]).
  * **Keyframes / Curves Panel:** 
    * Opened the Keyframes panel via the diamond icon on the upper left of the timeline toolbar ([01:08]–[01:14]).
    * Clicked the 3-dot parameter options menu and selected **`Display parameters with keyframes`** ([01:15]–[01:24]).
    * Toggled the view to **`Curves`** (left icon) rather than the bar view ([01:28]–[01:35]).
  * **Inspector Keyframes:** 
    * Navigated to **`Inspector`** > **`Speed Change`** on the right side of the screen ([02:12]–[02:18]).
    * Clicked the keyframe diamond on the first and last frames of the first clip ([02:18]–[02:42]), and first and last frames of the second clip ([02:44]–[02:52]).
  * **Parameter Selection:** Ensured **`Retime Frame`** was selected (green line) rather than `Retime Speed` ([02:25]–[02:35]).
  * **Speed Adjustment:**
    * *Method 1 (Clip 1):* Pressed `Ctrl + R` (Windows) / `Cmd + R` (Mac) to show Retime Controls ([03:04]–[03:10]), then dragged the top-right corner to the marker ([03:10]–[03:22]).
    * *Method 2 (Clip 2):* Selected the second keyframe in the curve editor, held `Shift`, dragged it left to the marker ([03:26]–[03:40]), then trimmed the clip tail ([03:40]–[03:45]).
  * **Bezier Curves / Ease:** 
    * Selected the first keyframe and clicked **`Ease Out`** ([03:50]–[03:54]).
    * Selected the second keyframe and clicked **`Ease In`** ([03:56]–[04:00]).
    * Dragged handles to ramp Clip 1 slow-to-fast at the cut ([04:00]–[04:15]), and Clip 2 fast-to-slow after the cut ([04:18]–[04:35]).
* **Mistakes & Requirements Warned About:**
  * **Handles Required:** Clips *must* have handles (extra trimmed head/tail footage beyond In/Out points) or the speed ramp cannot extend ([01:40]–[02:02]).
  * **Wrong Retime Parameter:** Must use **`Retime Frame`**, not `Retime Speed` ([02:25]–[02:35]).
  * **Retime Controls Drag Zone:** When using Retime Controls, you must drag from the **top-right corner** where double vertical lines appear ([03:10]–[03:16]).

---

### 3. Summary of the "Resolve 21" Speed Ramp Transition

* **Where Found:** Inside the **Edit Page** timeline. Controls are accessed via the **Timeline Keyframes Panel** (diamond icon on the timeline toolbar) and the **Inspector Panel** (`Video` > `Speed Change`).
* **Requirements:** Extra clip handles at edit points ([01:40]–[02:02]), keyframing `Retime Frame` ([02:25]–[02:35]), and retiming via `Ctrl+R`/`Cmd+R` or Shift-dragging keyframes ([03:04]–[03:40]).
* **Settings:** Exponential curve created using `Ease Out` and `Ease In` handles to accelerate the outgoing clip to max speed at the edit point, then decelerate the incoming clip from max speed back to normal.
* **Edition / Version:** The presenter calls it "DaVinci Resolve 21.0.4" ([00:05]–[00:12]), but the screen captures show **DaVinci Resolve Studio 19** ([00:06], [00:44]). No paid third-party tools are required.
