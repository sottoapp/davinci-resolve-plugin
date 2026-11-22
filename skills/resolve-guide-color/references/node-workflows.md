# Worked node workflows and mistakes

## A. Six-node serial system (tutorial by Graham Hunt, via Gemini analysis of the video)
Source: https://www.youtube.com/watch?v=QK6pAiaiXO4 — one instructor's method; treat as an example.
Nodes are added with Right-click ▸ Add Node ▸ Serial (Alt-S) and named with Node Label.

| # | Node | Job | Control |
|---|---|---|---|
| 1 | WB | remove casts | Offset wheel; watch vectorscope/parade |
| 2 | EXPOSURE | set luminance without clipping | Offset master; Highlights slider to protect clipped highlights; confirm on waveform |
| 3 | CONTRAST | depth | Custom Curves with **Editable Splines** → gentle smooth S-curve |
| 4 | HUE ROTATION | restrict palette (e.g. toward orange/teal) | Color Warper, Hue-vs-Hue/Sat, 8×8 grid |
| 5 | SPLIT TONE | colour separation in shadows/highlights | Lift/Gain channel sliders |
| 6 | CST | log → Rec.709 / Gamma 2.4 | Color Space Transform OFX, last node |

**Why CST last (his rationale):** nodes 1–5 work in the wide camera space with more headroom; grading after the
transform works in a compressed display space that clips/tears more easily.
**Caveat:** that is a DaVinci YRGB (not color-managed) method. In **RCM or ACES** the transform is project-level —
do **not** also add a CST (double transform). See `resolve-color-management`.

Matching: copy the graded clip's grade (middle-click or Apply Grade) → **Grab Still** from the reference →
**Image Wipe** on the target → tune WB/Offset until skin, wardrobe and tonality agree.
PowerGrade: reset the clip-specific nodes (WB, Exposure, Contrast), keep the creative nodes, Grab Still into a
PowerGrade album, drag onto other shots.

## B. Common mistakes
Grading by eye without scopes · technical transform confused with a creative LUT · RCM/ACES plus an equivalent
CST/LUT · numeric black/white targets chosen without image context · Y waveform fine while one RGB channel clips ·
raising Saturation when one hue is off · qualifier without viewing the matte · un-inverted/untracked/hard-edged
windows · narrow curve points · matching everything to a close-up · trusting Shot Match unreviewed · shot-specific
fixes in a group node · unlabeled/tangled nodes · too much hidden in compounds · PowerGrade from another
camera/space · HDR judged on SDR (or vice versa) · unstable keys from noise/compression · over-sharpen/saturate/
smooth skin · never reviewing at cuts/in motion · no backups, versions, stills or approved references.
