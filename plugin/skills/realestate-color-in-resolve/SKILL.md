---
name: realestate-color-in-resolve
description: Use when color grading or correcting real estate footage in DaVinci Resolve: blown-out windows, mixed lighting, dull or tinted walls, crooked verticals, wide-angle distortion, drone log footage, twilight exteriors, or rooms that do not match each other.
---

# Real-estate colour in Resolve

**Simple and true to life.** Cameras see windows far brighter than eyes do, so interiors look dark and harsh on video; the job is to restore what a visitor would see —
bright, clean, believable — not to stylise. Wall and floor colours are facts about the property. (Honesty limits: `realestate-delivery-compliance`.)
Resolve has no API for wheels, curves, qualifiers or windows (`resolve-api-reliability`): these are **UI steps to give the user**, or use DRX/LUT via `resolve-color`.

## Order
1. **Pipeline first** (`resolve-color-management`): DaVinci YRGB Color Managed with each clip's Input Color Space, Rec.709 out — or a manual CST — never both. Confirm D-Log vs D-Log M (not interchangeable).
2. **Fix framing in the Edit page**: Inspector ▸ Video ▸ Transform (Yaw/Pitch/Rotation, then Zoom to hide blank edges). **Every correction crops the frame and costs resolution**, so check the source is wide enough; Studio Lens Correction handles distortion. Keep verticals parallel; don't stretch rooms bigger.
3. **Exposure + windows**: HDR palette — lower Highlights/Specular to pull window detail *just* until surfaces lose depth; raise Light for an open feel. A clipped window cannot be recovered.
   Hard windows: separate node, feathered Power Window + Tracker (`resolve-guide-color`).
4. **White balance** on a known neutral (ceiling, white cabinet): check **RGB Parade**. Mixed light: balance the dominant source, treat the other with a Qualifier or window; don't sterilise warm lamps.
5. **Contrast / saturation / curves** in separate labelled nodes; fix casts with Hue-vs-Sat or Hue-vs-Hue, **broad smooth points**, protecting wood, brass and plants.
6. **Look last and light**; sharpen last; match rooms to a hero room with a still/PowerGrade, then per-room trims; watch the whole tour for jumps.
7. **Skin** (agent on camera): expose for the face, let windows blow; correct hue on a vectorscope with the skin-tone line.

## Rules that came out of the tutorials
- Interior detail: restore midtone detail after pulling highlights; **exteriors: leave it at 0** (crunchy foliage). Dark/high-contrast houses: skip extra contrast; don't strip yellow walls — reduce, don't erase.
- Skies: selectively desaturate over-saturated blue; don't replace. Drone: CST per camera, grade sky and ground to agree.
- Noise reduction (Studio) conservative and ghost-checked; two gentle sharpen passes beat one heavy one.
Specific numbers (pivot, saturation gain, radii, IRE targets) and each tutorial's node tree: `references/tutorial-settings.md` — **one instructor's example values, not targets**.
Check before delivery: toggle every node, compare adjacent rooms, inspect window edges and verticals, view the real window view, keep the ungraded master.
