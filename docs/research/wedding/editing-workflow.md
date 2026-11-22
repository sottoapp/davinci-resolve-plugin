# Wedding video editing workflow in Resolve — research digest

Date: 2026-11-22. Source: one `deep` You.com research run (29 cited sources: wedding-videography blogs and guides, Blackmagic manual and training pages, forum threads). Secondary
practitioner material. Runtimes and turnaround are ranges, not standards. Resolve behaviour comes from the Blackmagic manual summaries in the report; check the installed version.

## Deliverables (typical, as reported)

| Deliverable | Typical length | Note |
|---|---|---|
| Teaser / trailer | 30–90 s | one strong image and one memorable line; often delivered first |
| Highlight film | 3–8 min (range 3–10) | music-led, selective, vows/speech excerpts carry the story |
| Feature / extended highlight | 10–20 min | longer vow and toast excerpts, mostly chronological |
| Documentary / full-day | 30–60 min (up to 1–3 h) | chronological, natural audio leads |
| Full ceremony | actual length, often 20–45 min | completeness over effects; restrained multicam |
| Full speeches / toasts | actual length | cleanest source as continuous audio bed |
| Same-day edit (SDE) | 2–6 min, usually 3–5 | dedicated editor; stop accepting footage 60–120 min before screening |
| Social vertical cuts | 15–60 s, 9:16 | reframe every shot, do not crop the 16:9 |

"Feature film" means 10–20 min to one studio and 30–60 min to another, so contracts state runtimes as ranges.

## Pre-flight

Checksum-verified copy of every card, two independent backups, never edit from cards. Log each camera's frame rate, resolution, profile and audio sample rate. Transcode
variable-frame-rate phone footage to constant frame rate before syncing. Check external audio for clipping, mutes and early stops. Duplicate the first timeline before big changes.

## Structure

Suggested bins: Preparations, First look / portraits, Ceremony, Couple session, Cocktail / details, Speeches / toasts, First dance / parent dances, Reception, Exits, Audio, Music,
Graphics, Selects, Multicams, Timelines. Metadata: Camera #, Angle, scene, event. Master template project plus Power Bin (titles, logos, adjustment clips, SFX, house transitions);
client media stays out of Power Bins; duplicate the template per wedding.

## Sync

| Situation | Method |
|---|---|
| Real jam-synced timecode | Create Multicam Clip, Angle Sync: Timecode |
| Cameras have scratch audio matching the recorder | Sound (waveform) |
| A clap, flash or marker exists | In point, Out point or Marker |
| Nothing reliable | manual with waveform and visual cue |

A silent camera cannot be waveform-synced. Check sync at the start and end of long takes; a constant offset and progressive drift are different faults.
Capture practice: jam and re-jam, scratch audio on every camera, same sample rate, recorders running continuously, redundant sources (officiant lav, partner recorder, board feed).
Ceremony source order: close body-worn first, second recorder second, camera/room as ambience and sync reference.

## Multicam

Create with all simultaneous angles plus reference audio; set the timeline frame rate deliberately; use camera-detection metadata when one camera made several files; choose the multicam audio
option on purpose (reference audio / Angle 1, source channels, all angles). In the Multicam Viewer switch **Video Only** when the master audio must not change, **Audio Only** to replace the
sound source, **Audio and Video** only when both should change. The Cut page Sync Bin is a fast assembler. Do not flatten the only multicam timeline.

## Story craft

Selects timelines by event; tag clips Hero / Story / Reaction / Texture / Transition. Transcribe or log vow, letter and speech lines. Five-part highlight arc: Hook, Anticipation, Commitment,
Release, Payoff. Voiceover from vows: complete thoughts, no-music assembly first, do not change the speaker's meaning, return to the speaker on camera, never use a line over footage that
contradicts its context. Music-first for montage, dialogue-first for vows/speeches; duck or remove music for speech and bring it back at a sentence end, breath, applause or visual change.
Rhythm: details 2–5 s, vows longer holds, reception shorter as energy rises; alternate dense and textural passages.

## Transitions, slow motion, speed ramps

Default to clean cuts; J/L cuts and short dissolves for time passing; dip to colour only for chapters. Slow motion from high-frame-rate sources (60 fps in a 24 fps timeline is about 40%,
120 fps about 20%). Retime Controls speed points with eased ramps; use for a kiss, reveal or dance move, not decoration. Check rolling-shutter and optical-flow artefacts.

## Vertical

Duplicate the highlight, change the timeline to 1080×1920, reframe each shot, keyframe walking subjects, replace wides that exclude a partner, add captions, keep text clear of platform UI,
watch the export on a phone.

## Proxies and SDE

Generate proxies before editorial for 4K+/RAW/H.265/multicam (ProRes Proxy, DNxHR LB/SQ); relink to originals for colour and export; test one full proxy-to-original relink first.
SDE: prebuilt shell, work in passes (block about six sections, fill, refine, export and test) so a complete film always exists.

## Sequence and QC

Ingest and verify, organise, proxies, sync, selects, transcribe, music licensed, paper edit, highlight rough, feature/documentary/ceremony/speeches, picture lock, audio, colour, titles and
speed effects, verticals, master and QC, controlled revisions, archive. Dialogue, music and ambience on separate buses. QC the exported file, not the timeline: first and last 30 s,
audio after upload, TV/phone/computer playback, every contracted deliverable present.

## Mistakes

Editing before verifying backups; unrelated clips in a multicam or no reference audio; trusting sync without checking the end of a long take; one clipped lav as the only source; switching
both audio and video when only picture should change; cutting every shot to the beat; music over vows; pretty shots that do not serve the story; transition packs; grading before the story
is stable; treating a documentary like a highlight; cropping 16:9 into vertical; untreated VFR phone footage; SDE without a locked plan and hard cutoff; no timestamped revision process;
not archiving project, licence info, masters and source.
