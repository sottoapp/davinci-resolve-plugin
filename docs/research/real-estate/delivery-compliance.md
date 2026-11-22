# Real-estate delivery and compliance — digest (as of 2026-11-22; verify before use)

There is **no single national MLS video spec**. Keep a clean unbranded MLS master and separate branded masters. MLS-safe cut: no agent/brokerage logo, name, phone, URL, QR, CTA, identifiable people, persistent watermark.
Examples: ARMLS Rule 8.23 (watermarks, contact info prohibited); CRMLS (branding broadly prohibited); some MLSs have separate branded/unbranded fields.

| Destination | Spec (as researched) |
|---|---|
| Zillow listing video | landscape only, 1280×720 or 1920×1080, MP4/H.264, 30 fps, ≤10 min / 500 MB (recommended <2 min); no copyrighted music, slideshows, simulations, text-dominant video, persistent lower-third contact info; branding only first/last 15 s |
| Zillow Showcase | one video ≤120 s, autoplays muted, no persistent agent/brokerage logos |
| Zillow 3D Home | app-generated tour, no audio; use unbranded MLS link |
| Realtor.com / Redfin | no public upload spec found — follow the MLS feed; do not infer Zillow limits |
| YouTube | 16:9 typical; H.264 High, AAC 48 kHz; 8 Mbps for 1080p SDR; verified accounts up to 256 GB/12 h |
| Instagram Reels | aspect 1.91:1–9:16, ≥720 px, ≥30 fps; up to 20 min; boosted ≤90 s 9:16; disclosures in-video for paid endorsement |
| Facebook Reels | any length/orientation (June 2025 guidance); 9:16 recommended |
| TikTok in-feed ads | 9:16 min 540×960; 5–60 s, ≤500 MB, min 516 kbps, needs sound |
Suggested masters: MLS/Zillow MP4 H.264 AAC 1080p 30 fps 8–12 Mbps; vertical 1080×1920; portrait 1080×1350; square 1080×1080. No platform source gave a loudness target.

Compliance: Fair Housing Act covers words, VO, on-screen text, people shown and ad targeting (HUD 29 Apr 2024 digital-platform guidance) — avoid familial-status/religion/national-origin/disability preference language ("perfect for families", "adults only", "safe", coded phrases).
Virtual staging/AI: preserve originals, label materially altered media ("virtually staged / digitally altered / AI-generated elements"), never add/remove/alter material features or views; Zillow bans videos from 3D renderings/simulations and defect-hiding blur. Privacy: people, plates, access codes, security panels, documents, neighbours.
Music: sync licence + master-use licence required (Copyright Office); Zillow prohibits copyrighted music; library licence must cover commercial real-estate use and paid ads. Drone: Part 107 pilot, registration, Remote ID, airspace authorisation, privacy/HOA; label off-property views accurately.
Website: dedicated watch page, captions/transcript, VideoObject markup, no autoplay with sound.

## Sources
armls.com/watermarks · faq.listedsimply.com (CA media violations) · zillow.com/z/video-upload/guidelines · zillow.com/z/photographer/zillow-certified-photographer-rules-and-guidelines · grow.zillow.com showcase guide · zillow 3D Home FAQ ·
support.redfin.com Agent FAQ · redfin.com/news (video tours) · support.google.com/youtube (1722171, 71673, 6373554, 2734796) · help.instagram.com (1038071743007909, 225190788256708, 570215404599013) ·
ftc.gov endorsement guides + Disclosures 101 · facebook.com/business/help (2683452421955589, 103816146375741, 447121939935381) · ads.tiktok.com help (video-ads-specifications, reservation in-feed) ·
berkshirerealtors.net branded/unbranded MLS media · archives.hud.gov/news/2024/FHEO_Guidance_on_Advertising_through_Digital_Platforms.pdf · copyright.gov musicians-income.pdf · faa.gov/uas/commercial_operators · faa.gov/uas/getting_started/register_drone ·
developers.google.com/search (video SEO, video sitemaps, VideoObject).
