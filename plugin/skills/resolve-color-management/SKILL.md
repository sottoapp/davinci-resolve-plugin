---
name: resolve-color-management
description: Use when setting up or auditing a project's color pipeline (RCM or ACES), assigning camera input transforms, mixing LUTs with managed footage, or when footage looks washed out, crushed or double-converted.
---

# Color management first, grade second

Grading on top of an undocumented pipeline bakes mistakes into every shot. The
agent's job here is to **propose, verify and document** the pipeline — never to
silently change the project's color science or make aesthetic calls.

## Workflow

1. **Choose and record the system** (ask if unstated): RCM for a Resolve-centred
   job; ACES when the facility/VFX/client requires it. Do not mix RCM, ACES,
   baked LUTs and manual CST nodes without writing down the processing order.
2. **Inventory inputs**: per camera/roll, the input color space and gamma. Assign
   from camera metadata, never from filenames. Pull metadata with
   `resolve-media-analysis`; confirm RAW decode (exposure, WB, debayer) is intentional.
3. **Set working and output spaces**; record tone mapping and gamut compression
   policy. Build separate output transforms per deliverable (Rec.709, HDR, P3/DCI)
   rather than baking one display LUT into the master.
4. **Double-transform scan**: flag any clip where a camera LUT is baked into the
   media *and* an IDT/CST is applied, or a display-referred LUT sits on managed
   footage.
5. **Frame check** (hooks enforce this for grade writes): render frames through
   the intended output transform and look at them; check scopes for clipping,
   gamut excursions, illegal levels, crushed blacks. A computer display is not a
   reference for broadcast/theatrical.
6. **Document** inputs, timeline space, outputs, LUT/IDT/ODT files, monitor path in
   a project note or marker so the next session inherits it.

## Rules of thumb

- A viewing LUT is not a grade; keep it out of the source and out of the master.
- HDR is graded on an HDR-capable, calibrated path; flag SDR-monitor HDR work.
- Changing output space after creative decisions requires re-checking tone mapping.
- ACES IDT/ODT DCTLs load at Resolve startup (`RefreshLUTList` does not pick them up).
- Settings writes are silently rejected when read-only or edition-gated — read back
  (`resolve-api-reliability`).

Depth: `upstream/docs/guides/color-decision-guide.md`, `upstream/docs/kernels/color-grade-kernel.md`.
