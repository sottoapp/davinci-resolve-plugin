# Settings seen in Resolve real-estate tutorials (via Gemini; one instructor each — adapt to your footage)

Sources: `docs/research/real-estate/video-analyses/` (Van Beek HNvEhGZ2DCU, Resolve Studio 18; Tpz3Zbi-obk, same creator's clean-white method; Marcela 1tJqoS7G5Ks, Resolve 17).
Gemini's statements that a tool "is Studio-only" were its own inference unless the presenter said so — verify (`resolve-edition-features`).

## Van Beek — node tree (Alt+S adds serial nodes; Node Label to name)
NR (empty/reserved) → exposure → contrast → saturation → balance → curves → look → skin (realtor shots only).
- **exposure**: HDR palette — Highlight wheel *Exp* down to recover windows (stop before reflections/3D shape flatten); Light up; Dark/Shadow slightly down. Then Primaries ▸ **Mid/Detail ≈ 50** to restore crispness (interiors only; exteriors 0).
- **contrast**: Pivot 0.336, Contrast ~1.04 (his footage).
- **saturation**: node Color Space **HSV**, Channels: only channel 2 active; Gain ~1.40–1.45; reduced to ~1.0 for dark houses with old oak/yellow walls.
- **balance**: node Gamma **Linear**, **Lum Mix 0**, push the Gain wheel against the cast, **Key ▸ Output Gain** down (0.2–0.7) to fine-tune strength; neutral reference = ceiling or white cabinets, judged on waveform RGB convergence and a 2× zoomed vectorscope.
- **curves**: Hue-vs-Hue — blues toward teal (~+10 to +18), yellows toward orange (~+5); Hue-vs-Sat to reduce green/yellow wall cast and blue sky saturation.
- **look**: HDR Highlight and Specular tints nudged blue, Key Output Gain ~0.1; turn **off** when the sky is already blue.
- **skin**: Hue-vs-Hue red slightly toward yellow until the trace sits on the vectorscope **skin-tone indicator** (Show Skin Tone Indicator, 2× zoom). Face on waveform ~50–80, average 60–70.
- Mistakes warned: over-pulling highlights (gray banding), forgetting Mid/Detail, Mid/Detail on exteriors, oversaturated skies, overcooked look node, exposing for windows over talent, contrast on dark rooms, stripping yellow walls.

## Marcela — Resolve 17
Edit-page Inspector: Transform **Yaw** (≈ −10 in one clip) then **Zoom** (~1.07) to remove blank edges, small **Rotation**; Stabilization mode **Perspective**, Smooth ≈ 0.5, Strength 1.0 (suits static architecture).
Node order: pre-LUT node (WB/exposure/shadow lift) → conversion LUT → Midtone Detail down ("soften") → Custom Curves contrast on deep-shadow/midtone sampled points → Sharpen ×2 (Blur palette; radius ~0.49 then ~0.48, scaling ~23 then ~18–19) → Glow 1 (Resolve FX Light ▸ Glow, Soft Light, low shine threshold, opacity ~0.17) → Glow 2 (Add, opacity ~0.1–0.2).
WB: Camera RAW Color Temp/Tint, or the Primaries WB eyedropper on a white cabinet; confirm on Parade.

## Premiere Pro tutorial (P_QpPR9mzKU) — principles only, not Resolve steps
Hero frame; lock manual Kelvin (avoid auto WB); interior bulk 70–80 IRE, 85 max; Hue-vs-Sat to pull casts halfway (never to grey); 10-bit log beats 8-bit; keep verticals straight at capture.
