---
name: event-graphics-titles-transitions
description: Use when building the graphics package or transitions for event video in DaVinci Resolve: openers and countdowns, session or chapter cards, speaker lower thirds, sponsor bumpers and logo animations, slide picture-in-picture layouts, kinetic type, whip, zoom or speed-ramp transitions in a recap, branded Fusion templates and macros, or captions that collide with graphics.
---

# Event graphics, titles and transitions

Treat motion graphics as one consistent information system, not a pile of effects: hard cuts for most of the programme, designed transitions for structural or musical moments.
Sources: a deep research run, Blackmagic Fusion and macro guidance and four tutorials (the DaVinci Resolve Context page (Notion) › Titles, effects and graphics). Edit structure: `event-video-editing`; text mechanics: `resolve-titles-and-lower-thirds`; sponsor and brand obligations: `event-delivery-compliance`.

## Build the system before the recap
1. Collect brand rules: approved fonts and weights, colours, logo versions, clear space, minimum size, allowed backgrounds, animation behaviour.
2. Make separate 16:9, 1:1 or 4:5, and 9:16 layouts; never shrink a landscape graphic into vertical.
3. Two type families at most, strong contrast, a backing shape or shadow over busy footage.

## The package
| Piece | Rule |
|---|---|
| Opener, 5–12 s | venue, fast details, event name and edition, logo, first beat or speaker line; never a long logo animation first |
| Countdown | dominant number, steady rhythm, clear final transition; 5, 10, 30 minute variants |
| Session and chapter cards | simple, identical in/out timing everywhere |
| Lower thirds | name over role or company; first-ID and repeat-ID versions; inside title safe, away from faces, microphones, slides and captions; short entrance and exit; redesign for vertical |
| Sponsor sting 1–2 s, bumper 3–5 s, slate | supplied artwork, clear space, never stretched, recoloured or effected unless the brand guide allows; contracted prominence and order |
| Slide layouts | speaker large when delivery matters, slide large when content matters; consistent corner, border, shadow, crop; never an unreadable thumbnail |
| Captions | subtitle track (`resolve-subtitles`); one or two lines; above mobile UI; not under lower thirds |
| End card | logo, one action, URL or date, optional sponsor line; variants for recap, registration, replay, social |

## Transitions and effects in the recap
- Hard cuts by default. Ramp (`resolve-speed-ramps-transitions`) on entrances, crowd, performance or a beat drop, anchored to a sound cue, with high-frame-rate headroom.
- **Whip**: match direction, speed, blur, exposure; a whip against the movement reads as an error. **Zoom**: keyframed scale or position centred on the subject within the resolution, short whoosh.
- **Glitch** only for technology branding, chapter breaks or sponsor idents, short, clear of names and legal text. **Light leaks and flares** for concerts, stage-light transitions, stings; not to hide a bad cut.
- Native building blocks (all free per the tutorials): Push transition for repeatable title or graphic moves, Edge Wipe for reveals, Adjustment Clip with a keyframed zoom, Resolve FX Drop Shadow (pastes across clips), Blanking Fill (Fill Mode Zoom, source crop 0, non-white fade) for vertical. Details: `references/templates-and-safe-areas.md`.

## Templates and cost
Build in Fusion, Macro > Create Macro, publish only name, role, headline, style, brand colours, logo toggle, position, duration, entry and exit style, background opacity. One macro per aspect ratio and function (`EVENT_LowerThird_16x9_v01`, session card, sponsor bumper, PIP, end card). Power Bin library with a versioned master; never overwrite a template another project uses (`resolve-templates-and-batching`).
Pre-render openers and sponsor animations (Render Cache Fusion Output or Render in Place), Smart cache on, resize large stills, test a short range first, keep separate master, social, captioned and sponsor timelines. Most graphics need no Studio; motion blur, Speed Warp, Magic Mask and AI tools do.

## Mistakes
A fancy transition on every cut · whip without matched direction · glitch or zoom over a speaker or sponsor message · tiny captions · graphics in the zone phone UI covers · mixed fonts and easing · logo files not approved · too many exposed template controls · lower third under captions · rendering the whole timeline before testing the problem section · not checking the file on a phone with sound off.
