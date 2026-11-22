# Skill backlog (researched, not yet written)

Gap analysis by a research subagent (2026-11-22), then four detail-research runs. Following `superpowers:writing-skills`,
a skill is only written when (a) the facts are verified from fetched sources and (b) for discipline skills, a no-skill baseline
actually fails. Status after the first pass:

| Candidate | Status | Blocker / next step |
|---|---|---|
| `resolve-troubleshooting` | **held** | Baseline: agent already refuses to wipe an un-backed-up database. Research could not reach Blackmagic's manual/support pages (forum 403, mirrors 404) — preference/database paths, log menu and driver minimums are forum-snippet claims. Verify on blackmagicdesign.com (Reference Manual "Managing Databases", Configuration Guide, support notes) before writing. |
| `resolve-collaboration` | **held** | Baseline: agent already refuses to override another editor's lock. Official lock rules unverified; only verified: Resolve 21 collaboration page says bins/timelines are read-only until unlocked by the current user, clips auto-lock while graded, Cloud changes are accepted by the user. Fetch the manual chapter "Project Libraries, Collaborative and Remote Workflows". |
| `resolve-edition-features` | see git log | Only items confirmed on Blackmagic's Resolve 21 Studio/compare pages may be stated; "first version" columns were from memory and are excluded. |
| `resolve-nle-roundtrip` | see git log | Pending research result. |
| `resolve-hdr-dolby-vision` | not researched | sources are mostly 2016–2022; needs a current-version pass. |
| `resolve-linux` | not researched | verify against the current Installation & Configuration PDF. |
| `resolve-fusion-titles-animation` | not researched | demand unverified. |
| `resolve-gallery-powergrades` | not researched | demand unverified. |

Also open: write trigger evals (`evals/`), add `network.hosts` and an `icon.png` (both flagged by `claude plugin validate`),
and split the nine upstream skills over 700 words into SKILL.md + `references/` (validator warns).
