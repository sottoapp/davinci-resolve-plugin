---
name: resolve-rough-cut
description: Use when asked for a rough cut, first cut or assembly from a folder of raw behind-the-scenes or vlog footage destined for Reels, TikTok or Shorts.
---


# Resolve Rough Cut
Turns a folder of raw footage into an assembled, gapless timeline. **The
timeline is the deliverable, not a finished video.**

Editorial craft: `upstream/docs/guides/editorial-decision-guide.md`. Analysis layer: `resolve-media-analysis` skill.

Per-action detail: `references/actions.md` (shot finding, verified traps table, `api_truth` ledger notes, clip_infos code).

## Contract (when NOT to add things)

Do **not** add titles, captions, text cards, effects, transitions, music or grading unless explicitly asked. Text over picture cannot be delivered end-to-end via the API (no track choice, issue #74): leave it to the user's UI pass. Render an mp4 only to preview, and say so.

## Steps

1. **Probe first.** `ffprobe` every clip: `r_frame_rate`, `avg_frame_rate`, `rotation`. Do not reframe rotated phone footage.
2. **Series: add a timeline to the existing project.** Check `project_manager list` first. New project only for a genuinely new series.
3. **New project: set BOTH frame rates before any timeline exists.** `timelineFrameRate` locks at timeline creation; set via `project_manager safe_set_project_settings`. `timelinePlaybackFrameRate` has no API path: ask the user to set it now:
   > Project Settings (gear, bottom-right) → Master Settings → Playback frame rate

   Quote that path as written; never extend it from memory. If not found, say you cannot see their screen and point at Blackmagic's manual (issue #132). Do not defer it or call it cosmetic. Existing project: read both back, raise only if wrong.
4. **Create a bin per episode, `media_pool set_current_folder` to it, THEN import.** `ImportMedia` has no destination and lands in the current folder. Restore the previous folder if it matters.
5. **Analyse:** `media_analysis analyze_bin`, `sampling_mode="adaptive_capped"`. Finish the `commit_vision` loop for every clip; any left in `pending_host_vision_analysis` is a failure (AGENTS.md).
6. **Find shots via contact sheets:** `python3 upstream/scripts/contact_sheet.py <clip_dir> <out_dir>` (needs Pillow). Never read frames one by one.
7. **Assemble in one call:** `media_pool create_timeline_from_clips` with positioned `clip_infos`, named for the episode. Current folder must be the clips' bin. `end_frame` is exclusive (`start_frame + duration`).
8. **Verify:** `timeline detect_gaps_overlaps` returns zero of both; check total duration against target and inspect representative frames.

## Limits

- `adaptive_capped` caps at 80 frames per clip: long takes go partly unseen. Pre-culled footage: scale effort down.
- `start_frame`/`end_frame` are SOURCE frames; mixed fps is floored, so verify slot durations.
- Audio item source frames use the media's rate, not the timeline's: read `source_fps`.
- Every trap row states its build; re-confirm if older than yours. The `api_truth` ledger wins over the table. Check `resolve_control get_version` before trusting an `api_truth` miss.
- Fusion comps: MediaOut must descend from MediaIn.
- Destructive ops leave `*_archived_vNN` timelines: clean up before handover.

## Source-media safety (AGENTS.md)

Never transcode, proxy or relink source media. Analysis frames, contact sheets and previews are scratch: write them to the analysis root or session scratch, never beside the source, never into git.
