# Resolve Color: per-action detail

## What this build cannot do (check before you offer it)

The scripting API changes per **patch** release, so "Resolve 21" is not a usable
label. Read `resolve_control get_version` → `build.unavailable_on_this_build`
before offering a gated surface; `check_version_support` asks about one named
symbol. Gated in *this* domain:

| Surface | Needs | If absent |
|---|---|---|
| `TimelineItem.ResetAllNodeColors` | 20.2 | Clear node colors one at a time via the `graph` node-color setter, or leave them |

An empty `unavailable_on_this_build` means **nothing recorded is missing**, not
that everything exists — most of the API has never been version-bisected. A
symbol with no gate returns `unknown`, which means probe it. Probe with
`name in dir(obj)`, never bare `hasattr`: on a Resolve object `hasattr` returns
`True` for every name, real or invented, so it can only say yes.

The offline `drx` / `project_db` routes are **not** version-gated this way —
they read and write files, so they work regardless of the build attached, and
are the fallback when a live surface turns out to be missing.

## Offline grading / QC catalog (`drx` actions)

Frame-stats → arithmetic → `.drx`. All local, deterministic, guarded (they
**refuse** to fabricate a match rather than emit a silent no-op). Extraction and
apply are the caller's job. Pick by intent:

- **Match toward a reference still** — `match_to_reference` (affine mean/std,
  skin-line gated, luma-preserving).
- **Within-camera drift** — `level_clips` (exposure/WB to a group hero).
- **Cross-camera skin cohesion** — `skin_match` (skin-gated; throws on
  log/wrong-space frames).
- **B-roll cohesion** — `shot_match` (gray-world neutralize or hero match).
- **Known-neutral patch / gray card** — `white_balance_match`.
- **Black/white points to a hero** — `contrast_normalize`.
- **Saturation cohesion** — `saturation_match`. **Shadow cast** — `black_balance`.
- **Import ASC CDL** (`.cc`/`.ccc`/`.cdl`) — `cdl_io`. **Copy a Body look** —
  `grade_transfer`. **Attach a `.cube` LUT to a node** — `lut_apply`.
- **Season/host look** — `author_look` / `carry_look`.
- **Read frames** — `scope_read` (parade/vectorscope/black-balance/clip%),
  `intent_tags` (low_key / motivated_warm, to exclude from neutralize),
  `gamut_legal` (broadcast-legal, measurement only).
- **Verify** — `verify_grade` (intended vs applied → landed/drifted/missing).

## Did the grade damage the image? (`media_analysis assess_grade`)

`verify_grade` asks *did Resolve apply what I asked*. This asks *is the result
any good* — a grade can land perfectly and still be flat, milky, crunchy or
banded.

    media_analysis(action='assess_grade', params={
      source_path, graded_path | lut_path, time_seconds, working_space })

Deterministic numpy on a decoded frame of the **real** result (a rendered file,
or the source pushed through the LUT by ffmpeg) — never a simulated transform,
because LUT interpolation and encode rounding are where banding is introduced.
Returns `acceptable`, `flags` (each with a remedy), the raw measurements, and a
`grade_shift_delta_e2000` magnitude.

- Flags: `flat`, `milky`, `washed_out`, `noisy`, `clipped`, `posterized`,
  `banding`. **Read them and reject your own grade** rather than shipping the
  first look that rendered.
- **Display-referred only.** ACEScct / S-Log3 / LogC are *refused*, not
  converted — the right transform depends on camera and project colour
  management, which a frame cannot tell you. Convert first, then re-run.
- `vision` in the result says whether a paid second opinion is warranted.
  Content-dependent flags (`banding` on a real sky gradient, a deliberate
  `washed_out`) escalate; unambiguous damage does not. A clean grade costs zero
  tokens.

## Relayout

- **Relayout ("Cleanup Node Graph," no UI API).** Single clip, live: grab still →
  `drx(action="relayout")` → `graph.reset_all_grades` → `safe_apply_drx` with
  explicit indices (a same-structure apply keeps the OLD layout — the reset is
  required). Whole project, offline: `project_db(action="relayout_node_graphs")`.
