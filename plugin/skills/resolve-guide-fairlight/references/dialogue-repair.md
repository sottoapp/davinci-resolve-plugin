# Dialogue repair tools — settings and cautions

Source: Resolve 21 Fairlight lesson (Lesson 6) https://www.youtube.com/watch?v=ChoOejMwLGw, analysed by Gemini
(observations, not verified frame-by-frame by us). Cross-checked against the Fairlight Audio Guide where possible.
**Edition column caveat:** the Free/Studio labels below come from this one video; eval graders flagged that Noise Reduction and DeHummer tier claims are unverified — confirm on Blackmagic's compare page before telling a Free user a plug-in is available.
"Dialogue mixer" is a role, not a plug-in; "declick" is manual sample-level editing, not a plug-in.

| Tool | Edition (per video) | Use for | Key settings / method | Cautions |
|---|---|---|---|---|
| **Clip EQ** (Inspector; also track strip or Fairlight FX) | Free + Studio | rumble, boxiness, harshness | 6 bands 20 Hz–16 kHz: high-pass, low shelf, bells (Q sets width), notch, high shelf; use **Frequency Analyzer** to find rumble (≈20–100 Hz) | don't cut blind — sweep while listening/watching; avoid hollowing speech |
| **Gate / Expander** (Mixer ▸ Dynamics) | Free + Studio | low-level noise between words | Gate default threshold −35 dB (≈ −39 dB in demo); **Range** = how far it ducks; Expander adds a ratio and gentler slope for fans/hum | Range −60 dB acts like a mute and sounds artificial; threshold near the noise floor |
| **DeHummer** | Free + Studio | continuous electrical hum | 50/60 Hz presets, Amount (~27 in demo), Slope, **Hum Only** monitor | bypass-test that body of the voice survives |
| **Noise Reduction** (Effects ▸ Restoration ▸ Fairlight FX) | Free + Studio | broad ambient noise | Manual: loop a noise-only section, **Learn**, stop Learn; or **Auto Speech** mode | can sound underwater/phasey; heavy CPU when stacked |
| Incremental stack | | stubborn noise | order: DeHummer → manual NR → Auto Speech NR | CPU load → cache |
| **Cache Audio Effects** (right-click clip) | Free + Studio | stuttering playback from plug-ins | non-destructive; plug-ins stay editable | temporary; unticking returns CPU load |
| **Bounce Audio Effects** | Free + Studio | permanent bake | view ▸ **Audio Track Layers**; bounced take on top, original underneath; Alt/Opt-Down moves to a new track | parameters locked after bounce — keep the original |
| **Voice Isolation** (Neural Engine) | **Studio** | heavy noise, fans, street, hum | 0–100% dial; start at 0 and raise (demo 23% outdoors; 78% fan after +22 dB clip gain; 81% hum) | 100% sounds artificial; heavy on hardware — cache |
| **Dialogue Separator** (Neural Engine) | **Studio** | independent Voice / Background / Ambience | track-level; Voice gain compensates for background cuts | phase artifacts on reverberant rooms — prefer Voice Isolation there |
| **Sample-level declick** | Free + Studio | clicks/pops | zoom until sample dots show; drag across the spike to flatten; right-click ▸ **Clip Operations ▸ Reset Edited Samples** to undo | don't redraw long spans |

Other video (de-esser, EQ/dynamics for clarity): https://www.youtube.com/watch?v=8DPTayE7sus (free tools on the Edit page, Resolve 20).
