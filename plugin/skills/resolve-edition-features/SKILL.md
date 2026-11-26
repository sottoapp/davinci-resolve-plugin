---
name: resolve-edition-features
description: Use when a task depends on DaVinci Resolve Free versus Studio, such as Neural Engine tools, HDR or Dolby Vision grading, hardware encoding, DCP or IMF output, or external scripting, or when a feature is unexpectedly missing or an API call returns False.
---

# Free vs Studio

Don't promise a Studio feature to a Free user, and don't blame the API for an edition gate. Before relying on any item below,
confirm the edition and build (`resolve-session`, `resolve_control get_version`) and check Blackmagic's compare page.

**What is confirmed:** only items listed on Blackmagic's Resolve 21 Studio / compare pages (and the 21.1 readme for scripting).
Which *version introduced* each feature was **not** verified — don't state one. Findings and sources:
the DaVinci Resolve Context page (Notion) › Research: general > edition features.

## Studio-only (per Blackmagic Resolve 21 pages)
Magic Mask · Voice Isolation · Dialogue Separator · Speed Warp · Smart Reframe · Object Removal · temporal and AI spatial noise
reduction · HDR scopes with Dolby Vision and HDR10+ grading/render · multi-GPU real-time playback · output above UHD/60 fps
(Free: up to 3840×2160 at 60 fps; Studio: up to 32K at 120 fps) · hardware-accelerated H.264/H.265 beyond Free's limited support ·
unencrypted DCP (encrypted needs a separate EasyDCP licence) · native IMF · **external Python/Lua scripting**.

## Scripting change to remember
Resolve 21.1's readme: "advanced scripting" is limited to Studio, and Blackmagic's notes say Python scripting moved to Studio.
Whether the Free **console** keeps Python is unconfirmed — treat Free + 21.1 as "scripting unavailable until measured". This is
why the MCP's free-edition bridge is a 21.0.x path (`resolve-api-reliability`, upstream README).

## Unclear — verify in the UI before stating
IntelliTrack, Relight, Face Refinement (not named on the Studio page); collaboration (compare page says Free includes multi-user;
the Studio page is silent); Fusion edition differences; Smart Reframe and Voice Isolation tiers disagree across secondary sources; Fairlight Noise Reduction and DeHummer tiers are unconfirmed (one video says Free).

## Fallbacks when a Studio tool is missing
Magic Mask → qualifier or Power Window with the Tracker (`resolve-guide-color`); Voice Isolation/Separator → EQ, gate/expander,
DeHummer, Noise Reduction (`resolve-guide-fairlight`); Speed Warp → Optical Flow retime; Smart Reframe → manual reframe in the
Inspector (`editing-short-form-vertical`).
