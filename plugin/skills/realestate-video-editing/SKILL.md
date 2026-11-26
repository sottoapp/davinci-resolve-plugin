---
name: realestate-video-editing
description: Use when editing a property listing video, cinematic home walkthrough, agent introduction, drone or twilight feature, neighborhood video, or vertical social cut for real estate, or when a real estate edit feels slow, generic or cluttered.
---

# Real-estate video editing

Clarity and continuity beat effects. The buyer is "walking" the home: show the best thing first, keep the layout legible, make every fact accurate.
Sourced from practitioner guides and Resolve tutorials (the DaVinci Resolve Context page (Notion) › Vertical: Real estate); lengths and BPM are conventions, not rules.

## Deliverables (one 16:9 master → native variants)
| Cut | Length | Open with |
|---|---|---|
| Listing | 45–90 s | strongest feature, not a logo |
| Cinematic walkthrough | 2–4 min | best visual / emotional moment |
| Agent intro | 30–90 s | agent on camera within 3 s |
| Drone feature / twilight | 15–30 s insert, 30–60 s social | context, then approach |
| Social vertical | 15–60 s | best room in the first 1–2 s |
Room order, per-deliverable shot lists and pacing numbers: `references/deliverable-structures.md`.

## Workflow
1. **Brief first**: address, price, beds/baths/sq ft, agent branding, platforms, runtime, deadline. Treat price and address as QC-critical graphics.
2. **Cull before cutting**: drop shaky starts, bumps, exposure jumps, walking between rooms, duplicates. Build a story-only assembly in buyer-walk order
   (exterior → entry → living → kitchen → primary → other rooms → outdoor), but lead with the hero feature.
3. **Music then pace**: instrumental, licensed; cut to phrases, not every beat; duck 3–6 dB under VO.
4. **Cut length**: hero 3–5 s, wides 2–4 s, details 1–2.5 s; let premium rooms breathe, compress hallways and repeat bedrooms.
5. **Straight cuts by default.** Speed-ramp only to shorten travel or sell a reveal (`resolve-speed-ramps-transitions`); skip zoom-transition packs;
   stabilise selectively — warped doorframes look worse than slight movement.
6. **Colour and match rooms** (`realestate-color-in-resolve`), then titles/lower thirds/CTA, then captions for sound-off viewing.
7. **Verticals are rebuilds**: duplicate, 9:16, reframe each shot, vertical title template (`editing-short-form-vertical`).
8. **QC the rendered file**, not the timeline (`resolve-qc-gate`), and check MLS/branding/AI rules before delivery (`realestate-delivery-compliance`).

## Mistakes that read as amateur
Weak open · equal time on every room · long walking footage · effect and transition overuse · one generic master for every platform · stale price/address ·
mismatched white balance room to room · music over VO · no captions · over-stabilising · no review of the final render.
Titles, lower thirds and CTA cards: `resolve-titles-and-lower-thirds`. Repeat jobs: master template + Power Bins + per-property duplicate (`resolve-templates-and-batching`).
