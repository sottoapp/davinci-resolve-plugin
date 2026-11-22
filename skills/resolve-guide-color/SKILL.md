---
name: resolve-guide-color
description: Use when asked how to grade or match shots on Resolve's Color page, what a scope or tool does, how to structure nodes, or why a grade looks wrong.
---

# Resolve guide: the Color page

Sources: Colorist Guide to DaVinci Resolve 20, Reference Manual, and a worked node workflow from a
tutorial analysed with Gemini (`docs/research/resolve-app-guides.md`). Principle: **measure and
balance first; isolate carefully; then design the look.** It is a default order, not a law.

## Layout in one breath
Gallery (stills/PowerGrades) · Viewer (wipe, split screen, Highlight matte) · thumbnail + mini
timeline · **Node Editor** · primaries palettes (Camera Raw, Color Match, Primaries, HDR, RGB Mixer,
Motion Effects) · secondary palettes (Curves, Color Warper, Qualifier, Window, Tracker, Magic Mask,
Blur, Key, Sizing, 3D) · keyframes/scopes/info. Never grade from the viewer alone.

## Scopes — what each answers
**Waveform** (levels/clipping/contrast; 10-bit 0–1023; RGB traces overlap on neutrals) · **RGB
Parade** (casts per channel; reveals single-channel clipping Y hides) · **Vectorscope** (hue =
angle, saturation = radius; skin line is a reference, not a target) · **Histogram** (distribution,
not placement). Leave sensible headroom rather than forcing highlights to the top.

## Tools — when to reach for which
- **Lift/Gamma/Gain/Offset**: broad ranges / whole image. Not independent brightness sliders.
- **Log wheels**: narrower zones when broad wheels touch too much.
- **Contrast + Pivot**: adjust Pivot after Contrast to hold exposure. **Color Boost** is gentler than Saturation.
- **Curves** (custom + Hue/Sat/Lum families): fine tonal shaping or one hue; keep points broad and smooth
  (narrow kinks cause posterization). HSL curves are often faster than a qualifier for skin.
- **Qualifier**: separate serial node → sample → inspect the matte in **Highlight** → refine →
  soften → then correct. Often combine with a **Power Window**; invert/feather/track it.
- **Tracker / Magic Mask (Studio)**: track forward and backward on a stable high-contrast detail,
  check the whole shot, keyframe around occlusions; always inspect the matte.

## Node tree
Image flows input → nodes → output; order matters. Serial nodes for balance/contrast/secondary/look/trim
(label them); parallel + Parallel Mixer for independent corrections from one base; Layer Mixer when
corrections stack like layers; compound nodes to tidy (label them — don't hide work). Typical flow:
`Normalize → Balance/Exposure → Contrast & color → Skin → Sky/Background → Look → Output trim`.

## Order of operations
1 Project setup & color management · 2 technical normalization (RAW/IDT/CST/approved LUT) · 3 exposure ·
4 color balance · 5 shot match · 6 secondaries · 7 look · 8 track/refine · 9 output trim (SDR/HDR) ·
10 review at cuts, in motion, full screen, with a render test.

## Shot matching and groups
Strategies: balance every shot / fix only mismatches / match all to a hero shot (usually a wide).
Workflow: waveform for tonal range → Parade for RGB → vectorscope + viewer for chroma/skin → secondaries →
review across cuts. **Shot Match** is a starting point; automation can't read narrative context.
Groups: Pre-Clip (camera normalization) → Clip (shot fixes) → Post-Clip (scene look); never put a
shot-specific fix at group level. **Versions** = alternate grades per clip; **stills** compare/copy
grades; **PowerGrades** = reusable looks — made for one camera/color space, so verify before reuse.

## With this plugin
Frame-first: look at Resolve-rendered frames before applying any grade (a hook enforces it).
`resolve-color` applies CDL/LUT/DRX/versions; **the API cannot author wheels, curves, qualifiers,
windows or nodes** — give the user those steps from this guide, or use DRX/offline `drx` tools
(`resolve-color`). `references/node-workflows.md` has a worked 6-node system, CST placement caveats
and the mistakes checklist.
