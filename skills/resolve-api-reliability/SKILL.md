---
name: resolve-api-reliability
description: Use when a Resolve scripting or MCP call returns False or None or succeeds without changing anything, a call hangs, before bulk mutations or unattended headless runs, or when asked whether a feature exists on a given Resolve build.
---

# Resolve API reliability

The scripting API is a thin bridge to a *running* Resolve process. It reports
failure through return values, not exceptions, and "True" does not prove the
state changed. Every mutating step below exists because one of these failure
modes has cost real projects work.

## The loop for every mutation

1. **Precondition** — Resolve running, project open (`GetCurrentProject()`
   returning nothing is normal in Project Manager), right timeline current,
   target paths exist and are writable.
2. **Act** — one mutation at a time. The bridge is effectively single-threaded;
   parallel calls or a Python-side timeout do not cancel the native operation.
3. **Read back** — re-read the property/clip/timeline and compare. A
   `SetClipProperty` can return True for a read-only or invalid property.
4. **Decide** — only retry *idempotent* calls. For destructive ones, first
   check whether the mutation already happened despite a False return.
5. **Report** — say what was verified by readback and what was only "returned
   True".

## Know the build before promising a capability

The API changes per patch release. Before saying something is or isn't
possible: `resolve_control get_version`, then `check_version_support`, then
`api_truth "<topic>"` (see `resolve-mcp`). `unknown` means probe, not yes. If the
build is too old, name the floor instead of offering a call that will fail.

## Known silent-failure patterns

| Symptom | Likely cause | Move |
|---|---|---|
| `SetClipProperty` True, nothing changed | read-only/invalid key, or Source Viewer showing frame 0 (Start TC, Resolve 18) | read back; switch to Deliver page, retry |
| Stills export empty / missing after `GrabAllStills` | Gallery persistence race; special *Timelines* album | switch album and back, re-query, retry; `ExportCurrentFrameAsStill` if only an image is needed |
| `InsertAudioToCurrentTrackAtPlayhead` False | wrong page / no explicit track+playhead | open Fairlight, set target track and playhead, verify by reading timeline |
| Marker not visible on Color page | delayed redraw; add-marker may jump to Edit | bounce Edit and back |
| Render "started" but nothing happens | modal dialog, backup in progress, bad TargetDir | check `GetRenderJobStatus` by **job id**; validate dir first |
| Call hangs forever | modal dialog (possibly invisible headless), backup mid-mutation, wrong Python ABI | stop sending calls; clear the dialog; never stack retries |
| Method present in `dir()` but inert | undocumented/disabled call | use only documented methods; `hasattr` is unreliable on proxy objects |

Page switching is a legitimate workaround, but save and restore the user's page
(`GetCurrentPage` / `OpenPage`) and expect asynchronous settling.

## Headless / unattended runs

`-nogui` does not make UI-dependent calls safe; an error dialog can block
forever with nobody to click it. For unattended work: validate every path
first, avoid page/selection/gallery-dependent calls, log every return value and
readback, and wrap the controlling process in a watchdog with a way to kill
Resolve. Use the system Python proven to load the installed fusionscript, not a
shim.

## What the API is not

It is not a general editor. Existing-timeline trim/ripple/move, selected-clip
retrieval, full inspector/keyframe control, wheels/curves/qualifiers/windows
authoring, and Fairlight mixer/bus/automation are absent or conditional on the
public API. Build a new timeline with `AppendToTimeline` + `recordFrame`, import
interchange, use DRX/LUT/CDL/versions for grades, or route to the offline
advanced server. Details and per-area reliability: `references/reliability-matrix.md`.
