---
name: resolve-guide-project-media
description: Use when asked how Resolve handles projects, databases, media and archives, how to set up a project, why playback is slow, what proxy, optimized media or render cache mean, or how to move, relink or share a project.
---

# Resolve guide: projects and media

Based on the official Resolve Reference Manual and Blackmagic training (see
the DaVinci Resolve Context page (Notion) › Research: general > Resolve app guides). Menu names shift slightly between versions —
say so when precision matters, and verify against the user's build.

## Mental model
- **Project Manager holds projects, not media.** A project stores timelines, grades,
  effects, audio work, clip references and metadata. Importing adds a *reference*;
  it never copies, moves or transcodes the source file.
- **Disk database** = one editor/workstation, easy to copy and back up. **PostgreSQL /
  Project Server** = several systems opening one library. Neither solves media
  access — every workstation still needs the same media (identical paths ideally).
  Back up through Database Manager, never by copying database internals.
- **Project settings are per project; Preferences are per workstation.**

## Set up before you edit (changing later alters timing and conform)
1. **Timeline resolution** (finishing raster) and **timeline frame rate**; playback rate
   normally matches. Don't let the first clip define the project unless that is the plan.
2. **Image scaling** policy for mismatched sources — test with a framing check.
3. **Color science**: DaVinci YRGB vs YRGB Color Managed (→ `resolve-color-management`).
4. **Working folders**: cache, gallery, proxy and generated media on fast, roomy SSD/NVMe.
5. **Conform options** *before* importing XML/AAF/EDL: use timecode, reel-name assist,
   mixed-frame-rate format; disable "auto-conform missing clips" for collaborative work.

## Media page and organization
Bins by function (`00_ADMIN`, `01_CAMERA_ORIGINALS`, `02_SYNCED`, `03_SELECTS`,
`04_GRAPHICS`, `05_MUSIC`, `06_VFX`, `07_TIMELINES`, `08_EXPORTS`) or mirror the camera-card
structure when reel identity matters. Use one metadata vocabulary (scene, shot, take,
camera, keywords; e.g. `SELECT`, `BROLL`, `REJECT`) so Smart Bins return what you expect.
Keep a `TIMELINES` bin of versioned duplicates and one clearly named `PICTURE_LOCK`.

## Performance: pick the tool for the actual bottleneck
| Tool | What it fixes | Portable? |
|---|---|---|
| **Optimized media** | hard-to-decode source codec, one workstation | no |
| **Proxy media** | slow source *and* collaboration / remote edit | yes (linkable files) |
| **Render cache** (None/Smart/User) | expensive *effects* (Fusion, NR, FX, retimes) | no |
| **Timeline proxy mode** | quick temporary reduced-resolution playback | n/a |
Diagnose in order: difficult codec → proxies; one heavy section → cache it; whole UI slow →
GPU memory, storage, timeline resolution; temporary relief → timeline proxy mode. Final
delivery uses originals unless **Use proxy media** is ticked; use a high-quality intraframe
cache codec if cached frames may feed delivery.

## Relink and reconform
Prevent offline media: keep originals in stable backed-up folders, never rename/move
after import, keep reel names consistent. If offline: **Relink Selected Clips**, tight
filename match for exact replacements (loose only when changing formats on purpose),
verify timecode/reel/duration on several clips, then review every timeline. For a revised
edit: **Timelines ▸ Reconform From Bins**, search only deliberately chosen bins, match on
timecode plus extra criteria, then lock conformed clips.

## Backups and archives
Turn on **Live Save** and **Project Backups** (to a different physical volume). `.drp` =
project export (instructions + references, not media). `.dra` = archive (can include
media/proxies; a proxy-only archive omits originals but may pull originals for items
without proxies). An archive is not a production backup — also keep media, proxies, LUTs,
fonts, plug-ins, graphics. Test a restore on another machine.

## Collaboration
Shared library + shared/matching media + portable proxies for remote editors; one person
per timeline structure; caches stay local; assign roles by page. Remote pattern: facility
keeps originals → editor gets proxy-only archive → returns timelines/bins → facility relinks.

## With this plugin
`resolve-session` (connect/inspect), `resolve-media-pool` (import, bins, metadata),
`resolve-proxy-relink` (proxy linking, relink dry-runs), `resolve-api-reliability`
(project settings writes can be silently rejected — read back). `references/project-hygiene.md`
has the checklist and the common-mistakes list.
