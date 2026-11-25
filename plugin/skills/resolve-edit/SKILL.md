---
name: resolve-edit
description: Use when duplicating or moving clips, copying ranges, building variants, tightening or restructuring a cut, editing selects, or producing an editorial changelist through the MCP, live or offline on .drt files.
---

# Resolve Timeline Edit
Bridges editorial *craft* to this repo's *tools*. Open the right manual; don't
re-derive it here.

- **Craft / story** — `upstream/docs/guides/editorial-decision-guide.md`; global
  `editor` / `assistant-editor` skills for *why to cut*, not tool mechanics.
- **Live tool mechanics** — `upstream/docs/kernels/timeline-edit-kernel.md`.
- **Offline timeline / changelist** — `upstream/resolve-advanced/README.md` → `drt`, `editorial`.

Per-action detail: `references/actions.md`

## Steps
1. Live running timeline: server `davinci-resolve` (`timeline`, `timeline_item`, `edit_engine`, `timeline_markers`). `.drt` file or interchange with no Resolve open: `davinci-resolve-advanced` (`drt`, `editorial`).
2. Before offering a gated surface, read `resolve_control get_version` → `build.unavailable_on_this_build`. Gates: `Timeline.GetSelectedClips` 21.0.4, `TimelineItem.SetName` 20.2. Probe with `name in dir(obj)`, never `hasattr`.
3. Plan, confirm, then execute `edit_engine` flows.

## Safety limits
- Never build a destructive operation on "the selected clips" without reading back what you got; selection is best-effort and version-dependent (issue #131).
- No razor/split. `lift_range` partial overlaps are blocked unless `allow_partial_item_delete=True` (whole-item delete, not a trim).
- No clip-speed API on any build: `set_retime` sets quality only yet returns `True`. Do not offer it for speed, reverse or ramps; say so and route the user to the UI (issue #132).
- Never improvise UI geography: no control locations, menu paths or shortcuts from memory. Name the operation, say you cannot see their screen, and point to Blackmagic's manual, or reuse an existing written pointer verbatim.
- "Mark the dead space for review" means `plan_dead_space_markers`, not a tighten. It writes nothing. Default `tightness` is `generous`; use `tight` only when the editor asks. Guard bands always remain.
- Word-level edits need `transcript_words` (transcribe, then strata backfill).
- Single long recording dead-air pass: `resolve-tighten-recording`. Conform across a re-edit: `resolve-conform`.
- Source media: edits reference existing Media Pool items and never transcode, render, proxy or create derivatives. Probe reports are local scratch, not committed.

## When NOT to use
Offline change lists need no open timeline: use `editorial`, not the live server.
