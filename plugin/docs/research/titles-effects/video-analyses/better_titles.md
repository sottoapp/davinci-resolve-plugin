
# watch: video report

- **Source:** https://www.youtube.com/watch?v=vEh1cXNhB1I (URL sent to Google)
- **Engine:** gemini-3.7-flash (agentic)
- **Gemini tokens:** 26752

## Answer (from Gemini)

_These are Gemini's observations of the video, not frames you viewed yourself. Relay them as such; rerun with `--engine local` to inspect frames directly._

### Editing Software and Version
* **Software:** **DaVinci Resolve**
  * *Proof (Seen):* The standard DaVinci Resolve UI workspace is displayed, including the page navigation icons at the bottom (Media, Cut, Edit, Fusion, Color, Fairlight, Deliver) and the top application menus [00:07]. The bottom-left corner explicitly displays the application label **“DaVinci Resolve Studio 18”** [00:07, 08:01].
  * *Proof (Heard):* The host explicitly mentions *“Resolve”* and *“Resolve project”* [00:03, 07:05, 08:29].
* **Edition / Version Visible:** **DaVinci Resolve Studio 18** (seen in the lower-left corner of the window at 00:07 and 08:01).

---

### Menus, Effects, Transitions, Titles, and Settings Used
*(All demonstrated tools on the Edit page are native built-in features available in both the free and Studio editions of DaVinci Resolve; none require paid third-party add-ons.)*

1. **Title Tool:**
   * **Menu / Location (Seen):** Top-left `Effects` > `Toolbox` > `Titles` > **`Text`** [00:08–00:11].
   * **Settings (Inspector > Video > Title) (Seen/Heard):**
     * Text input: *"Awesome Movie"* [00:14], later changed to *"FUN MOVIE"* [06:42].
     * Font Family / Style: Changed from default Open Sans to handwriting *Ink Free* [00:16], then switched to **Poppins**, style **Black** [02:26–02:35].
     * Size: Reduced from ~208 [00:16] down to ~100 [03:19], and finally ~84 [03:52].
     * Tracking: Increased to widen letter spacing (~20) [03:40–03:46].

2. **Background Generator:**
   * **Menu / Location (Seen):** `Effects` > `Toolbox` > `Generators` > **`Solid Color`** [04:49–04:54].
   * **Settings (Seen):** Selected the generator clip > Inspector > Color > used the eyedropper (*Pick Screen Color*) to sample swatches from imported palette images [04:53–05:05].

3. **Transition:**
   * **Menu / Location (Seen):** `Effects` > `Toolbox` > `Video Transitions` > `Edge Wipe` > **`Spiral Wipe`** dragged onto the head of the text clip [06:01–06:08].

4. **Drop Shadow:**
   * **Menu / Location (Seen):** Inspector > `Video` > `Title` > `Drop Shadow` section [07:05].
   * **Settings (Seen/Heard):**
     * **Offset:** Shifted Shadow Offset X and Y slightly (~4.0 and -4.0) [07:08–07:12].
     * **Color:** Changed from default black to a dark, saturated pinkish-purple sampled from the background color using *Pick Screen Color* [07:18–07:37].

5. **Color Palettes & Asset Pack:**
   * **Status:** The host states the color swatches and textures shown in the Media Pool come from his free *Motion Graphics Starter Pack* (linked in his video description; free, not a paid add-on) [04:18–04:30, 08:41–08:47].

---

### Mistakes Warned About
* **Tone-Deaf Fonts:** Choosing stylized fonts that clash with the movie's genre/theme (e.g., using a personal diary handwriting font for an unrelated film, or typewriter/action fonts inappropriately) [00:58–01:25, 01:42–01:55].
* **Oversized Text:** Setting title text unnecessarily massive across the screen, which gives an amateurish look [00:26, 02:44–03:00].
* **Poor Color Harmony:** Picking arbitrary colors without a palette system, leading to clashing or muddy aesthetics [04:08–04:15].
* **Cheesy / Inappropriate Transitions:** Using cartoonish or distracting wipes/pop-ins (like Spiral Wipe) on serious subject matter (e.g., a documentary about disease) [05:58–06:38].
* **Pure Black Drop Shadows:** Leaving drop shadows as harsh, opaque pitch black instead of tinting them to match and enrich the scene's color harmony [07:18–07:25].
* **Insufficient Contrast:** Bright text placed on a bright background without separation, rendering it unreadable [06:50–06:58].

---

### Techniques for Better Text Titles

* **Font:** Match the font strictly to the project's tone, or use a clean, bold, theme-agnostic sans-serif font like **Poppins (Black)** that does not distract with niche stylistic decorations [01:15–02:40].
* **Size:** Keep text small and subtle within the frame. A suggested rule of thumb is to size it to what you think looks right, then reduce it to roughly two-thirds (2/3) of that size [02:45–03:22].
* **Layout & Spacing:** 
  * Use **All Caps** to make layout alignment and structure cleaner [03:23–03:32].
  * Increase **Tracking** (letter spacing) slightly to give titles a deliberate, polished graphic-design feel [03:38–03:52].
* **Color:** Avoid arbitrary color choices by using established color palettes; sample colors directly using the *Pick Screen Color* tool for both the text and background [04:10–05:40].
* **Drop Shadow:** Enable a slight offset to create separation, and sample the background color, darkening and shifting its hue/saturation (e.g., toward dark purple/pink on an orange background) for a richer, more professional look [07:05–07:40].
* **Fusion Nodes Used:**
  * *(Note: The video does not teach or build the Fusion node tree step-by-step; the host presents an already completed composition to demonstrate advanced results and directs viewers to an external free course [08:00–08:42]).*
  * *(Seen in the Fusion node graph [08:01–08:34]):* The composition tree includes **Text1**, **Background1**, **MediaIn1**, **ErodeDilate1**, **MatteControl1**, **Transform1**, **Transform2**, **Transform3**, **Merge1**, **Merge2**, **Merge3**, **Merge4**, and **MediaOut1**, which are used to achieve text animation, edge erosion, surface shine, background texture, and harsh drop shadows [08:08–08:22].
