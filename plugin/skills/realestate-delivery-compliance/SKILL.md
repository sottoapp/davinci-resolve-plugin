---
name: realestate-delivery-compliance
description: Use when preparing real estate video for the MLS, Zillow, social or an agent website, adding agent branding or text, writing on-screen or voiceover copy, using virtual staging, AI generation or sky replacement, picking music, or publishing drone footage.
---

# Real-estate delivery and compliance

A listing video is advertising for a regulated product. Rules differ by MLS, platform and state, so **never assume one file fits every destination**, and never
let a deadline or an agent's request turn a rule into an afterthought. Specs below are as researched on 2026-11-22 — verify the upload screen and MLS rules before delivery
(`references/platform-specs.md`, the Sotto DaVinci Resolve knowledge base (Notion) › Vertical: Real estate). This is practical guidance, not legal advice.

## Always make two (or more) versions
- **MLS master — unbranded, landscape, MP4/H.264/AAC.** No agent or brokerage name, logo, phone, URL, QR code, social handle, CTA, persistent watermark or lower-third contact info;
  no identifiable people; no copyrighted music; captions if speech. Some MLSs also forbid added text. Check *that* MLS's media rule (ARMLS 8.23, CRMLS, etc.).
- **Branded cuts** for website, social and ads, with the agent's branding, 9:16 / 4:5 / 1:1 as needed.
When asked to put branding on "the MLS version", say why you won't, and deliver both.

## Stop and handle before delivery
| Situation | What to do |
|---|---|
| Copy implies who should live there ("perfect for families", "adults only", "safe neighborhood", "young professionals") | Rewrite to property facts; flag it. Fair Housing covers VO, on-screen text, people shown and targeting. |
| Virtual staging, AI-generated elements, sky replacement, object removal, a changed window view | Allowed only if it doesn't alter material facts; label ("virtually staged", "digitally altered", "AI-generated elements"), keep originals, check MLS/state rules. Never invent or improve a view, add features, hide defects or enlarge rooms. |
| Music | Needs sync + master-use licence covering commercial real-estate, platforms and paid ads. Platform "trending" sounds and personal subscriptions don't cover it. |
| People, plates, access codes, alarm panels, documents, neighbours in frame | Remove or blur; never blur to hide a defect. |
| Drone footage | Part 107 pilot, registration, Remote ID, airspace authorisation, privacy/HOA; label off-property views accurately. |
| Price, address, beds/baths on screen | Verify against the listing sheet immediately before render. |
If the user insists on a non-compliant version, say what the risk is, deliver the compliant one too, and leave the decision and disclosure to the agent/broker.

## Platform sanity
Zillow: landscape only, ≤10 min/500 MB, branding only in first/last 15 s; Showcase ≤120 s muted autoplay. Realtor.com and Redfin: no public upload spec found — follow the MLS feed.
Vertical social: native 9:16 1080×1920 with captions. Run `resolve-qc-gate` on every file; presets in `resolve-delivery-specs`.
