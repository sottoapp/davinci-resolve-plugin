# Resolve application guides — digest

Five `deep` research runs (You.com via Composio, 2026-11-22, ~$0.10 each) plus Gemini video analyses
(`video-analyses/`). Feeds the `resolve-guide-*` skills. Official Blackmagic manuals are the primary sources; shortcut
lists and a few explainers are secondary (cheat-sheet sites, blogs) — shortcuts are customizable, so skills tell
users to verify in Keyboard Customization.

| Topic | Skill | Key sources |
|---|---|---|
| Project/media/performance/archives/collab | `resolve-guide-project-media` | Reference Manual chapters (mirror https://ltbits.github.io/davinci-resolve-manuals/ DR12–DR18): Project Libraries & Collaborative Workflows, Managing Databases, Import & Conform, Deliver; Resolve 16/17/20/21 New Features Guides; https://docs.imaster.org/davinci-resolve-21-manual/part-2-setup-and-workflows/ch.-6-project-settings; render-cache and playback explainers at davinciresolve21.com |
| Cut & Edit pages | `resolve-guide-cut-edit` | Resolve 20 Reference Manual; Beginner's Guide https://documents.blackmagicdesign.com/UserManuals/DaVinci-Resolve-17-Beginners-Guide.pdf; New Features 19/20/20.2 https://documents.blackmagicdesign.com/SupportNotes/DaVinci_Resolve_20_New_Features_Guide.pdf , …_20.2_New_Features_Guide.pdf; Cut/Edit product pages; shortcut sheets (editorskeys.com, tutorialtactic.com, obsbot.com) |
| Color page | `resolve-guide-color` | Colorist Guide to DaVinci Resolve 20 https://documents.blackmagicdesign.com/UserManuals/DaVinci-Resolve-20-Colorist-Guide.pdf ; Colorist Guides 17/18; Color Correction with DaVinci Resolve (15) |
| Fusion & Fairlight | `resolve-guide-fusion`, `resolve-guide-fairlight` | Visual Effects Guide 20 https://documents.blackmagicdesign.com/UserManuals/DaVinci-Resolve-20-Fusion-Visual-Effects.pdf ; Advanced Visual Effects 20 …/DaVinci-Resolve-20-Advanced-Visual-Effects.pdf ; Fairlight Audio Guide 20 …/DaVinci-Resolve-20-Fairlight-Audio-Post.pdf ; Introduction to Fairlight Audio Post (15) |
| Deliver | `resolve-guide-deliver` | Deliver chapters DR11/DR15/DR18 (ltbits mirror); Resolve Studio 20 features PDF (hardware codec support) |

## Notes and uncertainty
- Resolve 20.2 changes (Sync Lock separated from Auto Select, Trim Editor auto-opens in dynamic trim, Source Track
  Selector) and Resolve 20 items (Cut-page dynamic trim, AI Music Editor, Smooth Cut via AI Speed Warp, MultiText) come
  from the New Features Guides; edition (Free/Studio) gating is only called out where the sources say so.
- Voice Isolation, Dialogue Separator, Magic Mask, AI Speed Warp, Smart Reframe: Studio per sources/videos.
- Graham Hunt's CST-last method is a non-color-managed workflow and conflicts with RCM/ACES advice; the skill says so.
