---
name: resolve-transcript-assembly
description: Use when assembling selects or a story cut from transcripts, markers or editor notes, pulling the best quotes, or turning notes into a rough cut.
---

# Transcript / marker / notes-driven assembly

Speech recognition is not a legal or factual transcript, and semantic cuts carry
editorial and legal risk. Automate the inspection and the mechanics; **a human
approves meaning, attribution, fairness and story order.**

## Workflow

1. **Frame rate and language first**; transcript timecode must match picture and
   audio (a transcript generated at another frame rate drifts).
2. **Transcribe and verify**; normalise speaker names, mark uncertain words and
   unknown speakers (`UNKNOWN`) rather than guessing.
3. **Turn notes into markers** with machine-readable `customData` ids and a fixed
   vocabulary: `SELECT`, `B-ROLL`, `FACT CHECK`, `LEGAL`, `MUSIC`, `REPEAT`,
   `FOLLOW-UP` (`timeline_markers`). Keep them visible through the cut.
4. **Selects timeline before story timeline.** Place *source ranges with handles*,
   not flattened text; store clip name, source TC, speaker, quote and rationale in
   marker/clip metadata.
5. **Assemble into a NEW timeline.** Never overwrite the source interview or a
   locked sequence; label the result DRAFT.
6. **Verify against media**, not only text: no quote crosses an unexpected cut or
   missing section; negation, sarcasm and out-of-context splices checked; review
   frames (`cut-reviewer` agent).
7. Hand to the editor with the open `FACT CHECK` / `LEGAL` markers listed.

## Never
Invent bridging narration; join quotes from separate contexts into a misleading
statement; auto-remove pauses/breaths that may be intentional; use keyword matches
without reading sentence context.

See also `resolve-edit` (restructuring) and `house-style` (cut preferences).
