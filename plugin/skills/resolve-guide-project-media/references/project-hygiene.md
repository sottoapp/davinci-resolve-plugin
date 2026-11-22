# Project hygiene checklist and common mistakes

## Checklist
- Name `CLIENT_PROJECT_EPISODE_VERSION`; set resolution, frame rate, color management first.
- Camera originals immutable; stable volume names; originals/proxies/cache/exports/archives in separate named locations.
- Consistent metadata and keywords; `TIMELINES` bin with dated duplicates; one `PICTURE_LOCK`.
- Live Save + Project Backups on; milestone `.drp` before conform/grade/delivery/upgrade; test a `.dra` before handoff.
- Pre-delivery: offline media, missing fonts/LUTs, render range, audio routing, frame rate, proxy toggle.
- Clear stale render cache periodically (this never deletes source media). Untested backups are assumptions.

## Common mistakes
1. Treating the project library as if it contained media. 2. Moving/renaming sources after import.
3. Confusing optimized media, proxy media, timeline proxy mode and render cache.
4. Mastering with **Use proxy media** on. 5. Reusing a low-quality cache for a master.
6. Individual Clips when one file is required. 7. Stale In/Out range renders part of the timeline.
8. Importing XML/AAF before setting conform rules. 9. Reconforming against bins with duplicate names/timecode.
10. PostgreSQL project with workstations lacking media access. 11. Backing up only the database.
12. Assuming `.drp` or a project backup archives media. 13. Smart Cache filling the system disk.
14. Assuming hardware encode exists for every codec/profile/OS.
