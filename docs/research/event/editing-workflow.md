# Event video editing workflow in Resolve — research digest

Date: 2026-11-22. Source: one `deep` You.com run (24 cited sources: event-videography guides, Blackmagic Resolve 20 notes and training, vendor how-tos). Secondary material. Lengths are common practice, not standards.
Resolve 20 feature claims (Multicam SmartSwitch, Reference Audio option, AI Audio Assistant) are from the report; verify on the installed version.

## Deliverables

| Deliverable | Typical length | Purpose |
|---|---|---|
| Same-day recap | 60–90 s | arrival, venue, one or two quotes, energy, closing/logo; played at the event or posted at once |
| Next-day social | 15–60 s | hook, strongest visual or quote, atmosphere, captions, CTA |
| Hero recap | 2–4 min | hook and scale, message, networking/product energy, emotional close and CTA |
| Sizzle / promo | 30–60 s | non-chronological sales piece for registrations, sponsors |
| Full keynote / session | session length | clean start and end, multicam, intelligible audio, slides, speaker strap, chapters |
| Speaker clip | 60–180 s | one complete idea: hook, argument/example, conclusion; captions and strap |
| Sponsor reel | 1–2 min | branding, booth activation, product interaction, testimonials, stage mentions |
| Social cutdowns | 15/30/45/60 s | each stands alone; 16:9, 1:1, 9:16 as required |
| Sports / community / festival | 60 s–3 min | scale, action/performance, reaction, result, CTA |

Build the hero edit first, derive the rest. Starting with the shortest version gives weak story and unusable coverage for longer pieces.

## Pre-event

Run of show, camera plan (locked wide, operated speaker, roaming, optional audience/gimbal), audio plan (board feed, isolated mics, room ambience, backup recorder), slide/screen capture plan, graphics package (opener, session
title, speaker strap, sponsor logos, CTA, end card), delivery matrix (filename, duration, resolution, frame rate, aspect, captions, deadline, approver), media and backup plan. A same-day edit needs a dedicated editor who is not also shooting.
Capture: scratch audio on every camera, jam-sync where possible, matching frame rates, avoid VFR phones in the main multicam, record the clean program feed and, where possible, camera ISOs, slide ISOs and discrete audio;
ask the AV team for separate mic channels; capture slides from the AV system or presenter laptop, not by filming the screen.

## Structure

Folders: cameras, roaming, program feed, slides/screen, board audio, lavs/booms, B-roll, graphics/logos, music/SFX, timelines, exports, project backups. Bins: project info, camera ISOs, program, audio, slides, B-roll,
interviews, graphics, music, selects, multicams, deliverable timelines, exports. Regular bins per project, Smart Bins for metadata collections (Selects, Speaker, B-roll, Vertical, Unused), Power Bins for reusable logos, slates, music beds,
SFX, title templates (shared across projects in the Project Library; not a backup). Keywords at ingest (DAY1_KEYNOTE, PANEL, SPEAKER_X, AUDIENCE, SPONSOR_X, VERTICAL_SAFE, SELECT). Markers for quotes, reveals, applause, awards, sponsor mentions, mistakes, social clips.

## Sync

Order: timecode (only if truly jam-synced), waveform (needs matching scratch audio), in/out/marker (clap, flash, cue), manual. Name angles by function (A_WIDE, B_TIGHT, C_ROAM, D_AUDIENCE, E_SLIDES). Use a reference audio angle or board mix as the
constant audio source. Verify sync at the start, middle and end of a long session; if it drifts look for frame-rate mismatch, VFR or independent clocks rather than nudging. Separate audio-prep timeline for multichannel board feeds.
Program vs ISO: program-only is fastest (limited by the live director, baked-in graphics), ISO rebuilds the edit and enables vertical, hybrid (assemble from program, replace weak shots from ISOs) is normally most efficient. Multicam SmartSwitch
(Resolve 20) can first-pass angles by active speaker; treat as assembly.

## Audio and slides

Track layout: speaker lav/headset, panelists, podium, board mix, audience/room, backup camera, music, atmosphere/applause, SFX. Mix panelists individually; keep desk mix plus room mics for concerts. Highlight audio: anchor soundbite, music bed, natural
applause and crowd, not a music-only montage. Slides: full-frame when content-heavy, PiP when the speaker matters, brief flashes in recaps, never leave a dense slide up in a fast recap. Lower-third templates (event, session, speaker name/role, panel, sponsor,
location/date, CTA); show a speaker strap on first introduction, not on every answer.

## Highlight structure

0:00–0:05 strongest moment (do not open on a slow logo); 0:05–0:20 establish scale (exterior, registration, signage, room, crowd); then message and experience (soundbites woven through B-roll, reactions, networking, product, booths); end with impact and CTA.
Shots 1–3 s in montage, hold key moments; cut on gesture, applause, music change or phrase. B-roll sequence: exterior and set-up, signage/badges/stage/sponsor details, arrival, wide crowd, speaker, reactions, networking, booths and demos, interviews, closing/awards/group,
teardown; shoot wide, medium, close with 10–15 s holds and vertical-safe framing.

## Full sessions, speaker clips, same-day

One timeline per session; trim pre-roll and dead air, default to the cleanest angle, close-ups for emphasis and speaker changes, slides when essential, slate and strap, preserve audience questions, chapter markers, watch the whole export. Speaker clips: self-contained idea,
hook first, remove filler, cover jump cuts with B-roll/slides/angles, strap, burned-in captions, end on a complete thought. Same-day: prebuilt project, templates, music chosen, edit station and transfer tested; parallel operations (verify copies, sync and bin continuously, producer marks moments and confirms names, selects built while
recording continues); one track, one story, few strong quotes, reliable sound, simple titles; export a review early and test on the venue screen.

## Templates and presets

Power Bin: brand logos, openers, lower thirds, sponsor bugs, licensed music, SFX, adjustment clips, social captions, end cards. Timeline templates (recap 16:9 and 9:16, sizzle, speaker clip, sponsor reel, session full, captioned social) preconfigured with frame rate, tracks, buses,
loudness meters, caption style, safe-title guides. Deliver presets (master archive ProRes/DNxHR, review H.264 with watermark/timecode, 16:9 web, 9:16 social, captioned social, audio-only, per-session) saved and added to Quick Export. Predictable filenames with version and aspect.

## QC and mistakes

Picture: bad live cuts, bumps, focus hunts, blocked sightlines, slide flicker/moire, matching cameras, 9:16 crop check, sponsor logos as contracted. Audio: intelligibility on headphones and laptop, clipping/hum/phase/dropped channels, ducking, applause natural, sync start/middle/end,
audience questions kept or removed deliberately. Editorial: hook, not merely chronological, quote accuracy, names/titles/dates, required CTA/sponsor treatment, captions proofread.
Mistakes: editing before defining deliverables; recording only the switched feed; only camera audio; no scratch audio; trusting timecode unverified; slides ignored until post; overusing the wide; under-shooting audience and atmosphere; cutting every shot to music;
starting with the logo; careless vertical crops; social edits as leftovers; no redundant storage; no final playback QC; overpromising same-day.
