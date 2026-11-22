
# watch: video report

- **Source:** https://www.youtube.com/watch?v=NXFZqKttnsQ (URL sent to Google)
- **Engine:** gemini-3.7-flash (agentic)
- **Gemini tokens:** 80602

## Answer (from Gemini)

_These are Gemini's observations of the video, not frames you viewed yourself. Relay them as such; rerun with `--engine local` to inspect frames directly._

### 1. Editing Software & Version/Edition

* **Software used:** **DaVinci Resolve Studio**
  * **Proof (Visual):** In the top menu bar, the application name is explicitly displayed as **"DaVinci Resolve Studio"** [03:16]. Additionally, the bottom-left taskbar label shows **"Studio 19"** [00:15, 10:19].
  * **Version Discrepancy (Heard vs. Seen):**
    * **Heard:** The speaker repeatedly claims throughout the video that these features are from the new **"DaVinci Resolve 20"** / **"DaVinci Resolve Studio 20"** update [00:00, 01:50, 03:45, 07:22, 07:48, 09:39, 10:31].
    * **Seen:** The screen recordings show the DaVinci Resolve Studio 19 interface (e.g., taskbar icon reading "Studio 19" [00:15, 10:19]).

---

### 2. New Features for Wedding Editors, Menus, Settings, and Workflows

#### Feature 1: AI Audio Assistant
* **Tool Name:** 
  * *Heard:* "Audio assistant" [02:11, 03:14].
  * *Seen:* **AI Audio Assistant** [00:09, 03:22].
* **Menu Navigation:** Top menu **Timeline** $\rightarrow$ **Audio Assistant...** [03:20].
* **Settings & Options:**
  * **Delivery Standard:** Set via dropdown (e.g., selects **YouTube** [03:24–03:32]; other visible standards include ITU-R BS.1770-4, ATSC A/85, EBU R128, OP-59, TR-B32, Netflix, Disney 2.0/5.1+ [03:26–03:30]).
  * Click **Auto Mix** button [03:32].
  * Automates **Audio Classification**, **Dialogue Mix** (Normalize, Clean, Levelling, Mix Level), **Music Mix** (Highlight featured, Shaping), **SFX and Ambience Mix**, and **Final Mastering** [00:09–00:14, 03:34–03:38].
* **Studio vs. Third-Party:** Built-in DaVinci Resolve Studio feature (not a third-party plugin).
* **Wedding Use & Mistakes Warned About:**
  * Wedding ceremonies often have 5–6 separate audio sources (lapels, board feeds, ambient mics) that are tedious to balance manually [02:40–03:05]. 
  * Warns against leaving music overpowering dialogue or spending hours manually adjusting gain levels [02:20–02:35]; this mixes all ceremony and background audio automatically in under a minute [03:20–03:30].

---

#### Feature 2: AI Voice Clone / AI Voice Convert
* **Tool Name:**
  * *Heard:* "AI Voice Convert" [04:54] and "voice clone tool" [05:28].
  * *Seen:* Clip named **Matt Voice Clone** [05:22]; **AI Voice Clone** under the Audio Inspector [05:22].
* **Menu Navigation:** Audio Inspector tab on the Edit page [05:22].
* **Workflow & Settings:**
  * Feed clean reference audio of the speaker to create a clone profile [04:59].
  * The editor re-records the flubbed sentence using their own microphone [05:05].
  * Apply voice clone conversion to replace the editor's voice with the client's synthesized voice [05:20–05:30].
* **Studio vs. Third-Party:** Built-in DaVinci Resolve Studio feature.
* **Wedding Use & Mistakes Warned About:**
  * Warns about common wedding flubs (demonstrates a groom misreading his wedding vows/letter: *"even and your work ethic"* [04:02–04:08]).
  * Warns against the painful alternatives: having to bother the client to re-record after the wedding day [04:18] or doing tedious "editing surgery" splicing syllables and single words together [04:22–04:35].

---

#### Feature 3: AI Music Editor / AI Music Remixer
* **Tool Name:**
  * *Heard:* "AI music editor" [05:59] / "music remix tool" [06:17].
  * *Seen:* **AI Music Editor** and **AI Music Remixer** in the Inspector [06:22].
* **Menu Navigation:** Select the music audio clip $\rightarrow$ Open **Inspector** $\rightarrow$ **Audio** tab $\rightarrow$ scroll to **AI Music Editor** [06:20–06:28].
* **Settings & Options:**
  * Enter a manual **Target Length** and click **Adjust**, or check the **Live Trim** box [06:24–06:30].
  * Drag the edge of the audio clip on the timeline to the desired video length [06:34].
  * Analyzes clip speed and displays cut points via squiggly vertical cut lines on the waveform [06:38–06:48].
  * **Versions:** Preview alternative remixes by clicking version buttons **1, 2, 3, or 4** [07:00].
* **Studio vs. Third-Party:** Built-in DaVinci Resolve Studio tool (no third-party add-on needed).
* **Wedding Use & Mistakes Warned About:**
  * Warns against the old time-consuming hassle of manually cutting, looping, and cross-fading songs to fit the length of a wedding film [06:05–06:14].

---

#### Feature 4: Vertical Video Viewer
* **Tool Name:**
  * *Heard:* "vertical video viewer" [07:48].
* **Menu Navigation:** **Cut Page** [07:18] on a vertical timeline [07:59]. Click the **Expand** viewer button in the top right of the Cut preview window [08:00–08:02].
* **Settings & Display:**
  * Switches the Cut page playback viewer into a full, native vertical format labeled **Vertical Timeline** [08:02].
* **Studio vs. Third-Party:** Native DaVinci Resolve interface feature.
* **Wedding Use & Mistakes Warned About:**
  * Wedding clients constantly request vertical social media edits (Instagram/TikTok) alongside horizontal wedding films [07:30–07:42].
  * Solves the mistake/limitation of previewing a vertical video squished horizontally with massive black pillarbox bars [07:48–08:08].

---

#### Feature 5: AI Multicam SmartSwitch
* **Tool Name:**
  * *Heard:* "AI multicam smart switch tool" [10:28].
  * *Seen:* **AI Multicam SmartSwitch** modal dialog [10:02].
* **Menu Navigation:** On the Edit timeline, right-click the multicam sequence clip $\rightarrow$ select **Multicam Smart Switch** [09:59–10:02].
* **Settings (Seen & Explicitly Warned/Advised):**
  * **Angle Switching:** Minimum Edit Duration (1.00 s), Edit Change Delay (0.30 s) [10:02].
  * **Wide Angle Setup:** Advised to set **Wide Angle** dropdown to **None** [10:04].
  * **SmartSwitch Setup:**
    * Switch: **Video only** [10:06].
    * Quality: Explicitly advised to select **Better** (instead of Faster) [10:06].
    * Analysis: Analyzes both the audio track and facial/lip movements before generating camera angle cuts [10:10–10:20].
* **Studio vs. Third-Party Comparison:**
  * **AutoPod** [08:24] is cited as a paid third-party monthly subscription plugin [09:00] exclusive to Premiere Pro [09:18].
  * Blackmagic’s **AI Multicam SmartSwitch** is built natively into DaVinci Resolve Studio at no extra cost [09:38–09:44].
* **Wedding Use:**
  * Automatically cuts multi-camera wedding ceremony angles and vows based on who is actively speaking, saving hours of manual multicam switching [09:44–10:22].
