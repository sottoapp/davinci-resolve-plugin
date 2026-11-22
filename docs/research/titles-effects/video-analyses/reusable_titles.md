
# watch: video report

- **Source:** https://www.youtube.com/watch?v=p39Hu9ThL98 (URL sent to Google)
- **Engine:** gemini-3.7-flash (agentic)
- **Gemini tokens:** 33931

## Answer (from Gemini)

_These are Gemini's observations of the video, not frames you viewed yourself. Relay them as such; rerun with `--engine local` to inspect frames directly._

### 1. Software & Version
* **Software Used:** **DaVinci Resolve** (*heard* at 00:15; *seen* in the top menu bar at 00:42, 00:48).
* **Version/Edition:** **DaVinci Resolve Studio 19** (*seen* on the lower-left corner badge overlay at 00:42–00:47, 15:08–15:20, and 17:36; *heard* as "Resolve 19" at 06:05).
* **Free vs. Studio Note:** The presenter explicitly states that users can follow all steps using the **free version of Resolve** (00:30). None of the demonstrated titles, transitions, or effects require DaVinci Resolve Studio or any paid third-party add-ons.

---

### 2. Tools, Menus, Settings, and Mistakes Warned About

#### A. Standard Rich Text Title ("Text")
* **Location/Menu:** Edit Page $\rightarrow$ *Effects* panel $\rightarrow$ *Toolbox* $\rightarrow$ *Titles* $\rightarrow$ **Text** (00:48–01:05).
* **Timeline Placement:** Double-clicked to open in the Source Viewer and cut to the timeline via a three-point edit (01:05–01:15).
* **Settings (Inspector):**
  * Two text lines entered ("DOWNHILL" and "BIKE RIDE") with independent fonts and colors per line (01:30–01:45).
  * Size adjusted, line spacing brought closer, rotation angle tilted, and stroke/drop shadow enabled (01:50–02:10).
* **Animation & Modifiers:**
  * Keyframes added to *Zoom* and *Rotation Angle* controls (02:15–02:30).
  * Clip opacity handles dragged on the timeline to fade in (~0.5s) and fade out (02:40, 03:05).
  * Clip *Keyframe Editor* opened to adjust timing and copy/paste keyframes (Ctrl/Cmd + C / V) to the clip end (02:48–03:05).
  * Clip *Curve Editor* opened to add easing to keyframes (03:18–03:28).
* **Cost/Edition:** Standard built-in free generator.

#### B. Fusion "Text+" Generator
* **Location/Menu:** Edit Page $\rightarrow$ *Effects* $\rightarrow$ *Titles* $\rightarrow$ **Text+** (05:55–06:05).
* **Settings & Tabs (Inspector & Timeline):**
  * *Fusion Overlays:* Enabled in the Timeline Viewer dropdown to edit and reposition text directly on-screen (06:05–06:20).
  * *Text Tab:* Font and size adjusted (06:35–06:42).
  * *Layout Tab:* Center Z and X Rotation adjusted for perspective (06:55–07:05).
  * *Transform Tab:* Per-character/word/line manipulation (narrator notes double-clicking any parameter name resets it) (07:07–07:18).
  * *Shading Tab:*
    * Element 1 (Face): Color changed to yellow; custom gradient mapping and image fill options demonstrated (07:40–08:30).
    * Element 2 (Red Outline): Enabled, thickness increased, red intensity lowered (08:40–08:55).
    * Element 3 (Black Shadow): Enabled, softness, offset, and Offset Z adjusted to make text float (08:58–09:10).
* **Animation & Fusion Retiming:**
  * Layout keyframes added for Center Z and X Rotation (09:20–09:40).
  * Moved to the Fusion page via the Fusion icon button at the top of the Inspector (10:18).
  * Switched viewer to *Single View* (10:35).
  * Fusion *Keyframe Editor*: Zoomed to fit, retimed intro keyframes (10:55–11:22).
  * Fusion *Spline Editor*: Selected keyframes and clicked *Smooth* (11:28–11:42).
  * Reverse outro animation: Copied and pasted Center Z and Angle X keyframes to the end; selected them and pressed the keyboard shortcut **V** to reverse direction (11:55–12:30).
* **Mistakes/Warnings:** 
  * Playback frame drops on complex Text+ titles: Enable the *Render Cache* to preview smoothly (09:45–09:50).
  * Keyframe pacing for Text+ cannot be edited directly in the Edit page's keyframe editor; you must open Fusion (10:05–10:15).
* **Cost/Edition:** Standard built-in free generator.

#### C. Fusion Title Template ("Horizontal Line Reveal")
* **Location/Menu:** Edit Page $\rightarrow$ *Effects* $\rightarrow$ *Titles* $\rightarrow$ *Fusion Titles* $\rightarrow$ **Horizontal Line Reveal** (13:15–13:30).
* **Placement:** Placed onto the timeline using a *Place on Top* edit (13:38).
* **Inspector Settings:** Upper text changed to website URL and gradient fill; lower text spacing adjusted; line color matched (13:42–14:15).
* **Mistake/Bug Warned About:** The default template has a defect where **the line does not animate off** at the end (14:45–14:55).
* **Fusion Fix & Keyframe Stretcher:**
  * Opened in Fusion (15:00); double-clicked the group node to expand it (15:08).
  * Upper text: Gradient mapping level set to *Text* and mapping angle adjusted; Element 2 enabled for a black outline (15:15–15:45).
  * *Keyframe Stretcher tool:* Holds the animation between set points so timeline clip length can be changed without disrupting intro/outro animations; the outro animation exists at frame 134 in Fusion, not the timeline clip boundary (16:15–17:00).
  * *Fix:* Right-clicked `lineMask_1_1_1` $\rightarrow$ *Select Previous Keyframes* $\rightarrow$ copied (Cmd/Ctrl + C) $\rightarrow$ selected the *Width* track at frame 134 $\rightarrow$ pasted (Cmd/Ctrl + V) $\rightarrow$ selected *Reverse* (17:05–17:28).
* **Cost/Edition:** Standard built-in free template.

---

### 3. Reusable Titles and Templates Workflow

#### Saving to the Edit Page / Media Pool
* Drag the finished, keyframed title clip directly from the Edit timeline into a bin in the **Media Pool** (03:50–04:00).
* The clip can be renamed in the Media Pool (04:00). Opening it in the Source Viewer shows that all Inspector settings, styling, and keyframes are fully preserved and can be edited into any timeline (04:05–04:25).

#### Saving to Power Bins
* Click the Media Pool options menu (three dots) and select **Show Power Bins** (04:33–04:42).
* Power Bins reside outside individual project files and are shared across all projects within the same Project Library (local, network, or cloud) (04:42–05:00).
* Drag the customized title from the timeline directly into a Power Bin folder (e.g., `MY TEMPLATES`) to access it across projects (04:45–05:05, 12:56, 17:50–17:56).

#### Exporting / Sharing Across Project Libraries
* Right-click the bin containing the title templates in the Power Bins panel and select **Export Bin** (05:15–05:25).
* This creates a **`.drb`** (DaVinci Resolve Bin) file that can be imported into another project or another Project Library's Power Bins (05:25–05:32).
* **Mistake/Warning:** Exporting a `.drb` file **does not copy underlying media assets**; any referenced media files must be managed and transferred separately (05:32–05:40).

#### Macros, Published Controls, and File Storage Paths
* **Not Shown/Discussed:** The video **does not** create Fusion Macros, **does not** publish custom controls via the Macro Editor, and **does not** show or mention template file paths on the hard drive (e.g., the Fusion `Templates/Edit/Titles` directory). The entire template creation and distribution method shown relies strictly on dragging clips into the **Media Pool / Power Bins** and exporting them as **`.drb`** bin files.
