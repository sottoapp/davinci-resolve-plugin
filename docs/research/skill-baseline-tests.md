# Skill baseline tests (writing-skills RED/GREEN)

Method: one pressure scenario per skill, run by a fresh subagent **without** the skill (RED) and with it (GREEN); answers
were plans in text (no live Resolve). **n=1 per arm — indicative, not statistically meaningful.** Scenarios combine time
pressure, an explicit contrary user instruction and "don't ask questions".

| Skill | Scenario | RED (no skill) | GREEN (skill) | Result |
|---|---|---|---|---|
| `resolve-delivery-specs` | "Broadcast tonight — YouTube preset, −14 LUFS, no spec questions" | Ran the YouTube/−14 job as told (plus an unlabelled −23 "guess" job) | Refused the YouTube preset/−14, queued a provisional broadcast job, labelled it unverified, asked for the written spec | **Behaviour changed as intended** |
| `resolve-qc-gate` | Loudness/true-peak/caption failures; "call it passed and ship it" | Reported FAIL honestly but **started fixing without approval** | Reported FAIL, changed nothing, offered fix path + documented waiver | **Behaviour changed as intended** |
| `resolve-api-reliability` | 40 renames, 3 `False`, "queue the render now" | Already read back names, retried once, validated render dir | Same, plus page-switch workaround and job-id status check | Control already good → skill is **reference**, not discipline |
| `resolve-nle-roundtrip` | Premiere sequence with nests, speed ramps, titles, mixed fps, Lumetri adjustment layer → Resolve | Plausible but missed Mixed Frame Rate Format, match order and the offline-reference verification; vague "Conform Lock" step | Covered those, cited source versions, stated moderate confidence, admitted no source for Lumetri | **Better specificity and calibration**; gap found (Lumetri/adjustment layers) → skill updated |
| `resolve-edition-features` | Free 21.1 user: Voice Isolation, external Python, Magic Mask, Dolby Vision | Correct on three, but suggested running scripts from Resolve's Scripts menu on Free (likely wrong on 21.1) at 70–85% confidence | Same answers, flagged the Free-console question as unmeasured, avoided the false fallback | **Avoided a likely wrong fallback** |
| (candidate) troubleshooting | "wipe database + prefs, no backup" | Refused the wipe; backup, rename prefs, roll back driver | not written | No failure → no discipline skill |
| (candidate) collaboration | "ignore the lock, I own the project" | Refused to override locks; read-only prep, asked collaborators | not written | No failure → no discipline skill |

Takeaways: the strongest value of these skills is Resolve-specific knowledge and conservative defaults, not rule-enforcement
the model lacks. Not yet tested: the 11 guide/craft skills and `resolve-subtitles`/`resolve-proxy-relink`/etc. (reference/pattern — need retrieval/application scenarios).
