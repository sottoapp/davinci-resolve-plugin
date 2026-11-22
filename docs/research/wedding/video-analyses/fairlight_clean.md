
# watch: video report

- **Source:** https://www.youtube.com/watch?v=r00ZfXkUA2Y (URL sent to Google)
- **Engine:** gemini-3.7-flash (agentic)
- **Gemini tokens:** 44014

## Answer (from Gemini)

_These are Gemini's observations of the video, not frames you viewed yourself. Relay them as such; rerun with `--engine local` to inspect frames directly._

### Software Used & Proof
* **Software:** **DaVinci Resolve Studio 18.6**
* **Proof:**
  * **Heard:** The creator explicitly refers to the software as DaVinci Resolve throughout the video (e.g., at [00:02], [00:15], [02:11], [06:47], and [08:24]).
  * **Seen:** The product label **"DaVinci Resolve Studio 18.6"** is visible in the bottom-left corner of the workspace (e.g., at [03:06], [03:14], and [10:54]). The dedicated Fairlight and Edit page interfaces and Fairlight audio mixer panels are also clearly visible.

---

### Studio-Only Features Flag
* **None of the tools used in this audio cleanup chain require DaVinci Resolve Studio.** Every processor demonstrated (Clip Normalizer, Mixer Track EQ, Dynamics Compressor/Gate, Fairlight FX De-Esser, Vocal Channel, and Presets Library) is available in the free version of DaVinci Resolve.
* **Seen in UI but unused:** Studio-exclusive features such as *Voice Isolation* and *Dialogue Leveler* appear in the Inspector at [11:02], but the creator does not enable or discuss them.

---

### Mistakes & Traps Warned About
1. **Chasing perfection:** Getting trapped in endless tweaking (*"straatje zonder het einde"* / street without an end), causing frustration instead of aiming for good, clear audio ([00:25]–[00:40], [11:45]).
2. **Expecting software to fix microphone/voice limitations:** Believing editing can turn a natural room mic recording into a deep, boomy radio sound; that requires the right voice and microphone technique ([01:25]–[02:15]).
3. **Skipping room treatment:** Failing to use sound blankets or foam panels to control physical echo and room noise before recording ([02:15]–[02:30]).
4. **Incorrect processing order:** Placing heavy audio effects before dynamics/EQ instead of at the end, or running compression before establishing a clean base EQ ([03:19]–[03:41]).
5. **Over-cutting EQ frequencies:** Pulling notch cuts down excessively, which makes the voice sound hollow, strange, and unnatural ([04:45]–[04:52]).
6. **Over-compressing voice dynamics:** Setting compressor ratios or thresholds too aggressively, which squashes the speaker's natural excitement and expression ([07:15]–[07:30]).
7. **Overdoing the noise gate:** Setting gate thresholds too aggressively, resulting in unnatural, jarring vocal cutoffs ([08:50]–[09:02]).
8. **Clipping make-up gain into the red:** Pushing make-up gain too high into the red indicators, leading to digital clipping and distortion ([09:12]–[09:21]).
9. **Unbalanced background music frequencies:** Leaving high presence frequencies unattenuated in background music, causing them to clash with vocal clarity ([11:20]–[11:42]).

---

### Full Fairlight Audio Cleanup Chain

#### 1. Initial Clip Normalization (Edit Page)
* **Action:** Right-click audio clip $\rightarrow$ *Normalize Audio Level* ([03:07]).
* **Settings (Seen at [03:08]):** Normalization Mode: *Sample Peak Program*, Target Level: `-2.0 dBFS` (spoken: to raise the base volume level before Fairlight processing).

#### 2. Mixer Channel Signal Routing Order (Fairlight Page)
* **Order:** On track `Audio 1`, order is set to **EQ $\rightarrow$ Effects (FX) $\rightarrow$ Dynamics (Dyn)** ([03:20]–[03:32]).
* **Rationale (Heard at [03:25]):** Establishes a clean frequency base first before applying compression/dynamics.

#### 3. Track Equalizer (EQ)
* **Goal (Heard at [03:45]):** Reduce background hum, room echo, and resonant frequencies.
* **Band 1 (High-Pass Filter):** Enabled high-pass cut to remove sub-vocal low rumble below **~90–100 Hz** (spoken at [04:00]; seen set to ~90 Hz at [04:12]).
* **Bands 2–5 (Surgical Notch Cuts):** 
  * Band 2 set to a narrow bell curve (Q-factor pushed to maximum **10.3**, gain boosted to sweep and isolate resonant frequencies at [04:18]–[04:38]), then cut downward moderately ([04:42], seen at ~185 Hz, -4.3 dB).
  * Bands 3, 4, and 5 cut similarly ([04:52]–[04:58]; seen at 453 Hz / -3.8 dB, 948 Hz / -3.6 dB, and 2260 Hz / -3.8 dB).
* **Band 6 (Low-Pass Filter):** Low-pass cut engaged to roll off inaudible high frequencies above the vocal range (seen set around **12.6 kHz** at [05:00]–[05:08]).

#### 4. Fairlight Track Effects (Fairlight FX)
*(Note: In the mixer signal flow, FX sits between EQ and Dynamics; the presenter demonstrates applying them at [09:38] after setting the dynamics).*
* **Effect 1: Fairlight De-Esser** ([09:40]–[10:10]):
  * *Location (Seen at [09:42]–[09:55]):* Track Effects `+` $\rightarrow$ *Restoration* $\rightarrow$ *FairlightFX* $\rightarrow$ *De-Esser*.
  * *Preset:* Set to **Male ESS** (seen with Frequency Range at ~4.50 kHz, Amount at 81.2) to tame harsh sibilance ("s" and "sh" sounds).
* **Effect 2: Vocal Channel** ([10:10]–[10:28]):
  * *Location (Seen at [10:12]–[10:15]):* Track Effects `+` $\rightarrow$ *Channel* $\rightarrow$ *Vocal Channel*.
  * *Settings:* Boosts presence frequencies around **5,000 Hz** (+2.6 dB seen at [10:20]–[10:26]) to add clarity to the voice.

#### 5. Track Dynamics
* **Compressor** ([07:00]–[07:55]):
  * *Ratio:* Set mildly around **2:1 to 3:1** (spoken at [07:30]; seen at ~2.5:1 at [07:18]).
  * *Threshold:* Adjusted to pull down voice peaks (seen at ~ -16.0 dB at [07:36]).
  * *Attack:* Fast/low setting (seen at 1.2–1.4 ms at [07:38]–[07:44]).
  * *Hold & Release:* Kept at defaults (seen at 0.00 hold, 93 ms release at [07:46]).
* **Gate** ([07:55]–[09:05]):
  * *Purpose:* Eliminates heavy breaths, mouth clicks, and pauses automatically ([08:00]–[08:45]).
  * *Settings (Seen at [08:30]–[09:00]):* Threshold ~ -35.0 dB, Range -18.0 dB, Ratio 1:1.1, Attack 1.4 ms, Release 93 ms.
* **Make-Up Gain & Loudness Target** ([09:05]–[09:35]):
  * Gain boosted by roughly +6.8 dB to +7.0 dB (seen at [09:28]).
  * **Loudness Target:** Adjusted so track output consistently peaks around **-5 dB** on the Fairlight meter while remaining below the red clipping line ([09:20]–[09:32]).

#### 6. Global Preset Storage (Fairlight Menu)
* Demonstrated under *Fairlight* $\rightarrow$ *Presets Library* $\rightarrow$ *Global Track Presets* to save track settings for future projects ([10:28]–[10:50]).

#### 7. Background Music Treatment
* **Volume:** Lowered in the Edit page Inspector to around **-25 dB** ([11:04]).
* **Equalization:** Music clip EQ adjusted to pull down frequencies around **7,000 Hz** and high frequencies to prevent clashing with vocal clarity ([11:20]–[11:38]).
