---
name: event-video-editing
description: Use when editing conference, corporate, keynote, panel, trade-show, festival, concert, gala, sports or community event video in DaVinci Resolve (recap, sizzle reel, full sessions, speaker or sponsor clips, social cutdowns, same-day edits), or when syncing a board feed, camera ISOs and slides in a multicam.
---

# Event video editing

An event is a content system, not one video. Define the deliverables before touching footage; build the hero recap first and derive the rest. Sourced from event-videography guides, Blackmagic material and two multicam tutorials (`docs/research/event/`). Lengths are conventions.

## Deliverables
| Cut | Typical length | Open with |
|---|---|---|
| Same-day recap | 60–90 s | strongest moment, then scale |
| Hero recap | 2–4 min | hook, scale, message, energy, CTA |
| Sizzle / promo | 30–60 s | non-chronological, high energy |
| Full session | session length | slate, strap, clean audio, slides |
| Speaker clip | 60–180 s | the complete idea's hook line |
| Sponsor reel | 1–2 min | contracted branding and activations |
| Social cutdowns | 15–60 s | each stands alone, 9:16 and 1:1 as needed |
Per-deliverable structures, B-roll list and same-day plan: `references/structures-and-same-day.md`.

## Workflow
1. **Brief as a matrix**: filename, length, aspect, frame rate, captions, deadline, approver per deliverable; run of show; sponsor obligations (contracted logo placement is part of the edit, see `event-delivery-compliance`).
2. **Ingest and protect**: verified copies, then bins by session, camera, audio, slides, B-roll, graphics; keywords and markers for quotes, applause, reveals, sponsor mentions.
3. **Sync**: timecode only if truly jam-synced; else waveform (every camera needs scratch audio); else marker or in/out; verify at start, middle and end of long sessions, and investigate drift (frame rate, VFR, independent clocks) rather than nudging.
4. **Program vs ISO**: program feed is fastest, ISOs let you repair bad live cuts and make verticals; the usual best path is hybrid. Keep the clean board feed, lavs and room mics as separate audio, not only the switched mix.
5. **Multicam** with angles named by function (wide, tight, roam, audience, slides) and a reference or board-mix audio angle; switch video only; do not flatten the only copy. Failure modes: `docs/research/event/video-analyses/`.
6. **Slides**: capture from the AV system, not by filming the screen; full-frame when content-heavy, picture-in-picture when the speaker matters, brief flashes in recaps.
7. **Recap**: open on the strongest moment, not a logo; weave soundbites through B-roll; hold key moments; natural applause and crowd under music; end with impact and the required CTA or sponsor card.
8. **Full sessions**: one timeline per session, trim dead air, default to the cleanest angle, strap shown on first introduction, keep audience questions, chapter markers, watch the whole export.
9. **Speaker clips and cutdowns**: self-contained ideas, filler removed, jump cuts covered, burned-in captions; verticals are rebuilds (`editing-short-form-vertical`).
10. **Speed systems**: Power Bin of logos, openers, lower thirds, sponsor bugs, end cards; timeline templates per deliverable; saved Deliver presets (`resolve-templates-and-batching`). Then colour and audio (`event-color-audio-in-resolve`) and QC the export (`resolve-qc-gate`).

## Same-day rules
Dedicated editor who is not also shooting; work in parallel during the event; one track, one story, few strong quotes, simple titles; export a review early; test on the venue screen; set a hard approval cutoff.

## Mistakes
Editing before defining deliverables · only the switched feed · only camera audio · no scratch audio on a camera · trusting timecode unchecked · slides ignored until post · leaning on the wide · no audience or atmosphere coverage · cutting everything to the music · opening on a logo · careless vertical crops · social cutdowns as leftovers · no final playback QC · overpromising same-day.
