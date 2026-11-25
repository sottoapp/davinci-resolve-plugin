---
name: resolve-tighten-recording
description: Use when asked to tighten a long single-take recording, remove dead air or silences, or turn a raw talking-head, screencast, tutorial or podcast video into a first cut.
---

# Resolve Tighten Recording
Turns one long raw take into a tightened variant timeline. **The variant is the
deliverable; the original timeline is never touched.**

Per-action detail: `references/actions.md`

## Rule
Plan → review → confirm. Pure subtraction: no grading, captions or additions.
Variant runs generous on purpose (over-cut is slow to recover, trimming is fast).
Hand the editor, with the variant: the largest lifts (a lift is only silence to
the microphone; anything over ~15s needs a human look) and the limits of
silence-driven tightening (fillers, real retakes, retakes whisper never
reports — see reference).

## Steps
1. `media_analysis set_caps_preset {preset: "unlimited"}` (standard has a 90s wall clock).
2. Transcribe: `media_analysis start_batch_job` `{clip_id, vision: false, transcription: {enabled: true, ...}}`, then `run_batch_job_slice {job_id}`. Jobs do not advance themselves; the slice blocks (~4-7x realtime), so run it in background. Copy `clip_id` from `media_pool probe_media_pool`, never from memory.
3. `edit_engine plan_tighten {timeline_name}`: dry run. Raise `min_pause_seconds` if cuts are too fine.
4. Review with editor: lift count, removed seconds, largest lifts. Approval gate; never skip.
5. `edit_engine execute_tighten {plan_id}` returns `confirm_token` (TTL 300s); re-call with it, same MCP session.
6. Verify in order: `timeline detect_gaps_overlaps` on variant is 0 / 0; `readback.after.clip_count` ≈ 2x video keep-ranges (if it equals video count alone, variant is silent: stop and say so); spot-check `timeline clip_where` (current timeline only, `set_current` first) against plan keep ranges; duration ≈ original − estimated_removed_seconds.
7. Restore `set_caps_preset {preset: "standard"}`, `project_manager save`, list timelines. `execute_tighten` archives the source once (`*_archived_vNN`); surface it, deletion is the editor's call.

## Coordinates
Plan `keep_ranges` are source frames (`end_frame` exclusive). `structural_diff.added` are record frames of the variant. Never use `structural_diff.added` as a source range: wrong content, no error. If in doubt, place one range, read back with `clip_where`, then batch.

## When NOT to use
- Instructional material: pauses while the presenter operates the screen are pacing; raise `min_pause_seconds`, review big lifts.
- Multicam compound clips: transcription is silently skipped.
- Stacked layers (V1+V2): only the analyzed source is kept, other layer silently dropped; see reference recipe.

## Safety
- Do not trust `detect_gaps_overlaps` alone; count audio items.
- Name the variant for the action, not the default.
- Never leave caps on `unlimited`.
- Pipeline only reads source media and writes analysis artifacts to the analysis root; no transcode, proxy or relink; original timeline archived, never mutated (AGENTS.md).
