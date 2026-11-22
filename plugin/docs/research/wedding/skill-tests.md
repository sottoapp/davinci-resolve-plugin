# Wedding skills — RED/GREEN tests

Date: 2026-11-22. Method: for each of three eval cases (`evals/wedding-*`), one subagent answered the prompt from general knowledge (no skill, control) and one read the skill first (with skill). One run each, so this is anecdotal; graded by the
author against the case's assertions, not by blind grader subagents. Answers were capped at 350 words.

| Case | Skill | Without | With | What the skill added |
|---|---|---|---|---|
| wedding-editing-ceremony-sync | wedding-video-editing | 4/4 | 4/4 | explicit start/middle/end sync check, VFR transcoding, Audio Only swap for the clipped lav, unlocked multicam tracks. The control already knew Video Only switching and that a silent camera cannot waveform-sync. |
| wedding-color-skin-mixed-light | wedding-color-audio-in-resolve | 3/4 | 4/4 | the control missed the Studio-only flag for Magic Mask (assertion 4); with-skill also named S-Gamut3 vs S-Gamut3.Cine and "RCM or CST, never both". Neither answer mentioned that the scripting API cannot author grades. |
| wedding-compliance-music-teaser | wedding-delivery-client-care | 4/4 | 4/4 | sync vs master licence, platform-library limits and guardian consent were already in the control; the skill added Content ID is not a licence, a music-free fallback, contract opt-outs and jurisdiction wording. |

Reading: the baseline model is already strong on these traps, so the wedding skills mostly add specificity, edition flags and a consistent checklist rather than preventing failures. No skill text was changed as a result. Next test worth doing: a real wedding project in Resolve.
