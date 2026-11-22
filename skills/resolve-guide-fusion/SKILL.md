---
name: resolve-guide-fusion
description: Use when asked how to composite, key green screen, track and attach graphics or build animated titles on Resolve's Fusion page, or why a Fusion comp is blank or slow.
---

# Resolve guide: Fusion

Sources: Visual Effects Guide to DaVinci Resolve 20 and Advanced Visual Effects guide
(`docs/research/resolve-app-guides.md`).

## Mental model
A **node graph**, not layers: nodes are media, effects, generators, masks, transforms, keyers;
connections define image flow and compositing order. Build left → right, name nodes, keep
branches tidy. Basic comp: `MediaIn → Transform → Merge → MediaOut` with `Background → Merge`.

## Facts that prevent the classic mistakes
- **MediaOut disconnected ⇒ the Edit-page clip is blank.** MediaIn has no position controls — add a
  **Transform**.
- **Merge inputs**: yellow = background, green = foreground, blue = effect mask. The **background input
  usually sets output resolution**. Don't confuse it with the *Background node*, which generates pixels.
- **Masks** (Polygon, B-Spline, Ellipse, Rectangle, Bitmap, keyer mattes) go to a node's blue mask
  input. Draw → refine edge/softness → track/animate → connect → inspect the matte by itself.
- **Text+**: custom title animation, per-character treatment, 3D extrusion. Use Edit-page title templates
  for simple text; open a Text+ title in Fusion for deeper work.
- **Tracking**: point, planar, surface, 3D camera. Track a stable, high-contrast feature, verify across the
  whole range, then drive a Transform/mask/Text+ or stabilize. Avoid blurred/occluded features.
- **Keying (Delta Keyer)**: clean the plate → sample screen → inspect matte in B/W → density/holes/edge/
  fringe → despill → garbage mask → merge over background → colour-match → edge treatment/grain/blur.
  Check over bright and dark backgrounds at 100%.
- **3D**: `Text3D/Shape3D/ImagePlane3D → Merge3D (+Camera3D, lights) → Renderer3D → Merge → MediaOut`.
  MediaIn can't go straight into Merge3D (use ImagePlane3D). If lighting "doesn't work", check viewer
  lighting, Renderer3D lighting and light passing through Merge3D.

## Which Fusion object?
| Need | Use |
|---|---|
| Shot-specific comp on one clip | Fusion **effect** (select clip → Fusion page) — has MediaIn/MediaOut |
| Combine several Edit-page layers first | **Fusion clip** (collapses layers; timeline resolution; *Open in Timeline* to expose) |
| Standalone graphic/title/background | **Fusion composition** (blank, MediaOut only) |

## Performance
Cache heavy nodes/range (green cache indicator), design at lower viewer resolution, bypass expensive
branches, pre-render finished sections, avoid repeated scaling, keep graphs modular, remove unused nodes.

## With this plugin
`resolve-fusion` (live `fusion_comp` tools and offline `.comp` authoring). The API can create/import/
export/load/rename/delete comps and reach Fusion's scripting API, but Fusion property scripting is
build-sensitive and crashed on some 20 betas — pin builds (`resolve-api-reliability`).
Other mistakes: foreground/background swapped, one backdrop judged for a key, too many nodes before the base
flow works, no despill/colour-match/grain on a keyed element.
