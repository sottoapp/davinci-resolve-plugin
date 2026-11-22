---
name: resolve-titles-and-lower-thirds
description: Use when adding, styling, animating or templating on-screen text in DaVinci Resolve: titles, lower thirds, name straps, chapter or end cards, Text versus Text+ versus Fusion titles, per-line fonts, drop shadows, safe areas, saving a title for reuse, or bulk-changing title text through the MCP.
---

# Titles and lower thirds in Resolve

Text that is legible, consistent and quiet beats text that is clever. Sources: Blackmagic and Fusion training summaries plus four tutorials analysed by Gemini
(`docs/research/titles-effects/`); sizes, frame counts and offsets are one instructor's example values. Wedding, event and real-estate specifics: `wedding-effects-transitions-titles`, `event-graphics-titles-transitions`, `realestate-video-editing`.

## Pick the tool
| Need | Use | Gotcha |
|---|---|---|
| Quick title, per-line fonts and sizes | Effects > Toolbox > Titles > **Text** (rich text) | styling lines is done in the viewer or Inspector |
| Animated or styled type | **Text+** (Fusion) | Edit-page size changes the whole block; per-line styling needs Character Level Styling in Fusion Modifiers; keyframe timing is edited in Fusion |
| Name and role straps | built-in **Lower 3rd** or a Fusion Titles preset | header and subtext are positioned separately; some presets do not animate out, so check the outro |
| Reusable branded layouts | Fusion composition saved as a title or macro | publish only what editors change |
| Captions for export or toggling | a **subtitle track**, not Text+ (`resolve-subtitles`) | decorative titles cannot be exported as SRT |

## Style rules
- One or two type families; the font fits the film's tone; bold clean sans if unsure. Size it, then reduce toward two-thirds; do not fill the frame.
- Contrast first: backing shape or tinted shadow (sample the background colour, darken it) rather than a pure black shadow. Keep text off faces, hands, microphones and captions.
- Keep names larger than roles; all caps with a little tracking reads as designed; script fonts for short names only.
- Motion: fade, a small move, mask reveal. Ease keyframes (Spline editor, Smooth or **S**). Match entrance and exit and use the same timing everywhere.
- Fonts must be installed at OS level (restart Resolve) and licensed for the work; keep the licence with the project.
- Safe areas: Viewer overlay Action about 93%, Title about 90%; guides do not render. Check vertical crops and a phone.
- Heavy Fusion titles: Playback > Render Cache > Smart (or render in place) before judging playback.

## Reuse
1. Finished title clip dragged into the Media Pool keeps its Inspector settings and keyframes.
2. Drag it into a **Power Bin** (Media Pool menu > Show Power Bins) to share across projects in the same Project Library; right-click **Export Bin** makes a `.drb` that does not carry the media.
3. For controls editors change, build it in Fusion, select the nodes, **Macro > Create Macro**, publish name, role, colour, duration only. Test in a new project, with a long name and a short clip.
4. Keep versioned names; do not overwrite a template another project uses. More: `resolve-templates-and-batching`.

## Through the MCP
The `timeline` tool offers `insert_title`, `insert_fusion_title`, `insert_generator`, `insert_fusion_generator`, `bulk_set_title_text` and `get_title_text`, and `timeline_ai.list_title_presets` lists installed presets. Discover names first; insertion lands where the playhead and tracks put it, so verify on the timeline afterward.
The API cannot author Text+ styling, keyframes or macros; give those as UI steps (`resolve-api-reliability`).

## Mistakes
Text+ resized per line on the Edit page · pure-black shadows · title style that clashes with the subject · dense or huge type · lower thirds over captions · unlicensed or personal-use fonts · a template with dozens of exposed controls · judging an uncached Fusion title · titles built from scratch each time.
