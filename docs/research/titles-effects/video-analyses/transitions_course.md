
# watch: video report

- **Source:** https://www.youtube.com/watch?v=ebSTdCWZoVU (URL sent to Google)
- **Engine:** gemini-3.7-flash (agentic)
- **Gemini tokens:** 15947

## Answer (from Gemini)

_These are Gemini's observations of the video, not frames you viewed yourself. Relay them as such; rerun with `--engine local` to inspect frames directly._

### 1. Editing Software Used & Version / Edition
* **Software:** DaVinci Resolve 18.
* **Proof & Edition:**
  * **Heard (00:00, 01:09–01:14):** The host introduces the tutorial as *"DaVinci Resolve 18 transitions for beginners"* and states: *"I'm running on the Studio version. If you've got the free version, it's going to look the same and everything is going to work exactly the same."*
  * **Seen (01:23–01:45, 17:23):** The DaVinci Resolve UI (Edit page, workspace layout, Inspector, and the top-left *DaVinci Resolve* application menu) is displayed throughout.

---

### 2. Menus, Transitions, Settings, Licensing, & Mistake Warnings

#### Menus & Interface Locations
* **Edit Page:** Bottom tab bar *(01:25)*.
* **Reset UI:** `Workspace` > `Reset UI Layout` *(01:41)*.
* **Effects Library:** `Effects` button at top-left > `Video Transitions` / `Audio Transitions` *(02:08, 11:57, 20:38)*.
* **Inspector Panel:** Top-right panel for transition customization *(08:31, 09:05, 12:38)*.
* **Preferences:** `DaVinci Resolve` menu > `Preferences` > `User` tab > `Editing` > `General Settings` *(17:23–17:45)*.
* **Smooth Playback Menus:**
  * `Playback` > `Render Cache` > `Smart` *(03:41)*.
  * `Playback` > `Timeline Proxy Resolution` > `Half` or `Quarter` *(03:59)*.
* **Timeline View Options:** Icon on timeline toolbar to toggle off "Simple View" to expose keyframe controls *(10:29–10:41)*.

#### Effect & Transition Names Mentioned / Demonstrated
* **Video Transitions:**
  * *Cross Dissolve* *(02:20, 04:22, 09:00, 16:05)*.
  * *Arrow Iris* *(12:30)*.
  * *Oval Iris* *(13:54, 14:18)*.
  * *Foreground Wipe* *(16:21)*.
  * Built-in categories noted: Dissolve, Iris, Motion (e.g., Barn Doors, Push), Shapes (e.g., Heart), Wipes, Fusion Transitions *(02:35–03:05)*.
  * Custom user presets created/shown: *Cross Dissolve Custom* *(11:48)*, *Slide Down 12 Frames* *(12:08)*, *Slide Up 12 Frames* *(12:09)*.
* **Audio Transitions:** *Crossfade 0 dB*, *Crossfade -3 dB*, *Crossfade +3 dB* *(20:37–20:47)*.
* **Titles:** *Plain note:* The video does not demonstrate or discuss titles.

#### Transition Settings Demonstrated (Inspector & Timeline)
* **Duration:** Adjusted by scrubbing/typing seconds or frame count in Inspector *(08:33–08:49)*.
* **Alignment:** Centered on cut, start on cut, or end on cut *(09:07–09:15)*.
* **Style:** Style presets dropdown (e.g., Shadows) *(09:18–09:34)*.
* **Start / End Ratio:** In/out timing controls *(09:38)*.
* **Ease & Keyframing:** Easing options (*None, In, Out, In & Out, Custom*) *(09:47–10:18)*; custom curves manipulated using the timeline diamond keyframe icon and curve editor *(10:44–11:22)*.
* **Shape / Iris Controls:** Aspect Ratio *(12:44)*, Center position *(12:56)*, Border Width *(13:00)*, Border Color *(13:08)*, and Feathering *(13:17)*.
* **Transition Type:** Dropdown at the top of the Inspector to swap the transition while preserving custom parameter tweaks *(14:05–14:25)*.

#### Studio-Only vs. Third-Party Add-on
* **All native transitions and features shown are free/built-in:** The host confirms at 01:00–01:18 that all demonstrated tools work identically in both the free version and Studio edition. None are Studio-only or paid third-party add-ons.
* *(Note: Sponsor Motion Array is mentioned at 00:43 and 18:22 as a paid third-party asset subscription, but it is not required for any native Resolve transition shown).*

#### Mistakes & Issues Warned About
1. **No Clip Overlap / Handles:** Attempting to drop a transition on cut points that lack extra frames (handles) prevents the transition from applying *(04:20–04:55)* or forces it onto only one side of the edit *(06:40–07:35)*.
2. **Missing Handles Warning Dialog:** Using keyboard shortcuts when clips have insufficient handles triggers the *"The selected edit points do not have enough handles..."* warning, requiring you to choose *"Trim Clips"* or *"Skip Clips"* *(19:48–20:30)*.
3. **Batch-Editing Different Transitions:** Modifying multiple selected transitions simultaneously in the Inspector requires them to be the exact same transition type, or it will create errors/issues *(15:33)*.
4. **Missing Keyframe Curve Diamond:** If the timeline is set to "Simple View", the transition curve diamond icon will not appear *(10:29–10:41)*.

---

### 3. Built-in Transitions Worth Using, How to Manage Them, & "Amateur" Transitions

* **Transitions Worth Using (Recommended / Used by the Creator):**
  * *Cross Dissolve* for standard smooth video blends *(02:20, 09:00)*.
  * *Foreground Wipe* (creator notes: *"Here's one that I use a lot"*) *(16:21)*.
  * *Slide Down / Slide Up* custom presets (creator notes he uses these 12-frame moves constantly in his YouTube videos) *(12:08–12:20)*.
  * *Crossfade 0 dB* for smoothing dialogue and audio cuts *(20:43, 21:10–21:35)*.

* **How to Add:**
  * **Hover Preview:** Hover the playhead over an edit point, then scrub the mouse over any transition thumbnail in the Effects library to live-preview it before applying *(03:08–03:30)*.
  * **Drag and Drop:** Drag from `Effects` > `Video Transitions` (or `Audio Transitions`) directly onto the timeline cut *(02:18, 20:58)*.
  * **Copy/Duplicate:** Hold `Alt` (Windows) / `Option` (Mac) and drag an existing transition to another cut *(14:46–14:55)*.
  * **Keyboard Shortcuts for Default Transition:**
    * `Alt + T` (Windows) / `Option + T` (Mac): Adds default transition to video only *(19:18–19:35)*.
    * `Shift + T`: Adds default audio crossfade to audio only *(21:28–21:38)*.
    * `Ctrl + T` (Windows) / `Cmd + T` (Mac): Adds default transition to both video and audio cuts simultaneously *(22:00–22:15)*.

* **How to Adjust Duration:**
  * Hover over the outer edge of the transition box on the timeline until the trim cursor appears, then drag in or out *(08:00–08:25)*.
  * Or select the transition and adjust the `Duration` box in the Inspector panel *(08:33–08:49)*.

* **How to Adjust Alignment:**
  * In the Inspector panel, choose one of the three `Alignment` buttons to position the transition centered on the cut, starting at the cut, or ending at the cut *(09:05–09:15)*.

* **How to Set Default Transition & Duration:**
  * **Default Transition:** In `Effects` > `Video Transitions`, right-click any transition and select `Set as Standard Transition` (indicated by a red tick mark) *(16:20–16:33)*.
  * **Default Duration:** Go to `DaVinci Resolve` > `Preferences` > `User` > `Editing` > `General Settings` > change `Standard transition duration` in seconds or frames, then click `Save` *(17:23–18:10)*.

* **Which Look "Amateur":**
  * *Plain note:* The creator **does not** explicitly use the word *"amateur"* or label specific transitions as amateur. He only playfully questions using shape transitions (e.g., *"maybe you want to use a little heart or something, I don't know"*) at *02:50*.
