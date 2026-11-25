---
name: resolve-mcp
description: Use when starting any DaVinci Resolve task to find the right skill, choose between the live and offline servers, or when a task spans several Resolve domains.
---

# DaVinci Resolve MCP — Index

> Paths written `upstream/...` are in the upstream repository (https://github.com/samuelgursky/davinci-resolve-mcp, package 5.4.0), not shipped in this plugin; the `resolve_control` tool (`api_truth`) gives the same facts live.

> The offline `davinci-resolve-advanced` tools (DRX, DRP, DRT, AAF, project database, deliverable QC) exist only if the optional add-on plugin is installed: `/plugin install davinci-resolve-advanced@sotto-davinci-resolve`. If a task needs one and it is missing, say so and give that command; do not guess around it.



Orientation for any Resolve MCP task: the **map, not the depth**. Each domain skill triggers on its own `description`. This skill does not auto-load the others; it points at them.

## Two servers — compute offline, apply live

- **Live** — `davinci-resolve` (Python): drives a *running* Resolve via the
  scripting API.
- **Advanced / offline** — `davinci-resolve-advanced` (Node): authors
  `.drp`/`.drt`/`.drx` files and patches the project DB with **no Resolve open**.

Rule of thumb: compute grades, QC, and conform math offline; apply the result
live. Node never drives Resolve.

Tool maps: `references/tool-maps.md`

## Read the build before you promise a capability

**The scripting API changes per PATCH release, not per major one.** "Resolve 21" is too coarse: `GetFairlightPresets` exists on 20.2.2 and not on 19.1.3; three surfaces reported in 21.0.4 are absent from 21.0.2. Guessing the build leads to insisting a method exists when it does not (issue #132).

So, before describing what is possible:

1. `resolve_control get_version` → note **both** `version_string` (the Resolve
   build) and `mcp.version` (this server).
2. `resolve_control check_version_support` → every recorded gate this build does
   **not** clear. With a `symbol`, it answers for one method.
3. `resolve_control api_truth "<topic>"` → each fact now carries a
   `version_context` saying whether it was measured on an older, newer, or
   identical build. **An older measurement is a prior, not a finding.**

Two failure modes worth naming, because neither announces itself:

- **`unknown` is the common answer, and it means probe — not yes.** Only
  surfaces with recorded evidence are gated; most of the API has never been
  version-bisected. Absence from the unavailable list is not a promise that a
  method exists.
- **`mcp.version` is the version this process STARTED with.** A running server
  keeps executing it, so `git pull` does not refresh the ledger until restart —
  an `api_truth` miss may mean "stale server", not "no known issues".

When a build is too old for what was asked, say so and name the floor. Do not
offer the call and let it fail.

## Cross-cutting rules (always)

- **Source media is sacred** (AGENTS.md): never modify, transcode, convert, proxy,
  relink, or derive source media unless explicitly asked. Outputs go to sidecars,
  scratch, or the analysis project root.
- **Frame-first color**: inspect Resolve-rendered frames before applying any
  grade/look/LUT/CDL/DRX, and preserve a recoverable grade version.
- **Guards refuse rather than fabricate** on the advanced server — read a
  "refused" message before retrying (usually wrong value space, log-encoded
  frames, missing media, or a missing optional dep; call the advanced
  `capabilities` tool).

