# Skill library

Generated from `skills/*/SKILL.md`. **New** = authored in this repo from the research in `docs/research/`; **Upstream** = ported from `samuelgursky/davinci-resolve-mcp` (see `UPSTREAM.md`).


## Orientation & safety

| Skill | Origin | Use it for |
|---|---|---|
| `resolve-mcp` | Upstream | Orientation and index for DaVinci Resolve MCP work — grading, editing, conforming, delivery, media analysis, and .drp/.drt/.drx file work, live in a running Resolve or offline with none open. |
| `resolve-session` | Upstream | Start a Resolve working session — connect, confirm the bridge and edition, open the project, and report timeline and media-pool state before any editing begins. |
| `resolve-api-reliability` | New | Guardrails for any DaVinci Resolve scripting or MCP call that mutates state — the scripting API fails silently (False/None, "success" that changed nothing), is page- and UI-state-sensitive, hangs behi |

## Ingest & prep

| Skill | Origin | Use it for |
|---|---|---|
| `resolve-media-pool` | Upstream | Media pool ingest and organization in the DaVinci Resolve MCP. |
| `resolve-media-analysis` | Upstream | Media intelligence layer for the DaVinci Resolve MCP. |
| `resolve-proxy-relink` | New | Proxy media and relink workflows in DaVinci Resolve — choosing proxy codecs, generating or linking external proxies, toggling proxy vs original, relinking offline media by verified identifiers, and th |

## Edit

| Skill | Origin | Use it for |
|---|---|---|
| `resolve-edit` | Upstream | Editing, cutting, trimming, pacing, and timeline restructuring in the DaVinci Resolve MCP. |
| `resolve-rough-cut` | Upstream | Assembling a short-form social rough cut from raw behind-the-scenes or vlog footage in the DaVinci Resolve MCP. |
| `resolve-tighten-recording` | Upstream | Tightening one long single-take recording — talking-head, screencast, tutorial, podcast video — by removing dead air in the DaVinci Resolve MCP. |
| `resolve-transcript-assembly` | New | Build selects and story assemblies in DaVinci Resolve from transcripts, markers or editor notes — interview sound-bite search, speaker-labelled quotes, structured SELECT/B-ROLL/FACT CHECK/LEGAL marker |
| `house-style` | Upstream | The editorial and finishing preferences this project's work is judged against — cut rhythm, shot selection, delivery conventions, and the corrections that have already been given. |

## Conform

| Skill | Origin | Use it for |
|---|---|---|
| `resolve-conform` | Upstream | Conforming, relinking, and finishing prep in the DaVinci Resolve MCP. |

## Color

| Skill | Origin | Use it for |
|---|---|---|
| `resolve-color-management` | New | Decide and verify the color pipeline in DaVinci Resolve before any grading — Resolve Color Management (RCM) vs ACES, input/timeline/output color spaces, camera IDTs, tone mapping, HDR vs SDR output, L |
| `resolve-color` | Upstream | Color grading and look work in the DaVinci Resolve MCP. |

## Audio, captions & Fusion

| Skill | Origin | Use it for |
|---|---|---|
| `resolve-audio` | Upstream | Audio and Fairlight work in the DaVinci Resolve MCP. |
| `resolve-subtitles` | New | Create, time, style, review and export subtitles and closed captions in DaVinci Resolve — transcript-to-subtitle generation, per-language subtitle tracks, SDH/forced/accessibility variants, reading-sp |
| `resolve-fusion` | Upstream | Fusion composition work in the DaVinci Resolve MCP. |

## Deliver & QC

| Skill | Origin | Use it for |
|---|---|---|
| `resolve-delivery-specs` | New | Translate a delivery target — YouTube/web, broadcast (EBU R128 / ATSC), DCP, ProRes/DNxHR master or archive — into exact Resolve render settings and a pass/fail spec, including loudness, codec, color  |
| `resolve-delivery` | Upstream | Delivery, rendering, and deliverable QC in the DaVinci Resolve MCP. |
| `resolve-qc-gate` | New | Run a final exception-driven QC gate on a DaVinci Resolve timeline and its renders before delivery — offline/proxy status, frame rate and timecode, conform conflicts, color-management state, levels/ga |

## Meta

| Skill | Origin | Use it for |
|---|---|---|
| `authoring-resolve-skills` | New | How to add or revise skills, agents and hooks in this DaVinci Resolve plugin — SKILL.md frontmatter and trigger-description writing, progressive disclosure with references/, scoped MCP tool names, saf |
