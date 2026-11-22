# Resolve Python scripting API — digest (18.5 → 21)

**Query:** reliable vs limited surfaces, silent failures, page/UI sensitivity, hangs, headless, workarounds.
**Used by:** `skills/resolve-api-reliability`.

## Key findings
- API is a bridge to a *running* Resolve; external Python needs Studio, matching Python/ABI, `RESOLVE_SCRIPT_API/LIB`, and "External scripting using: Local/Network".
- Reliable: project/media/timeline construction, markers, metadata, render queue, Fusion comp import/export, DRX/LUT/CDL, versions, color groups.
- Conditional: gallery grab/export, playhead ops, Fairlight insert/presets (≈20.2.2+), Fusion UI props, AI features, anything during auto-backup.
- Not a general editor: no dependable trim/ripple/move/reorder, selected-clip retrieval, node authoring, or Fairlight mixer API.
- Failures are return values (False/None) — official README lists Studio-only, system requirements, missing Extras, invalid context. Read back every mutation.
- Hangs: modal dialogs (invisible headless), auto-backup, wrong ABI, UI interaction, Gallery persistence races. Serialize calls; thread timeouts do not cancel native work.
- Undocumented methods were disabled in 18.5; don't rely on `dir()`/`hasattr`.

## Sources
1. https://forum.blackmagicdesign.com/viewtopic.php?f=21&t=175315
2. https://wheheohu.github.io/bmd_doc/ResolveAPI/intro
3. https://gist.github.com/X-Raym/2f2bf453fc481b9cca624d7ca0e19de8 (API doc v21.0.4)
4. https://github.com/leoweyr/DaVinci_Resolve_API_Docs/blob/main/scripting_API/v18/scripting_API-v18.md
5. https://forum.blackmagicdesign.com/viewtopic.php?f=21&t=176687
6. https://forum.blackmagicdesign.com/viewtopic.php?f=21&t=194040
7. https://forum.blackmagicdesign.com/viewtopic.php?f=12&t=225857
8. https://forum.blackmagicdesign.com/viewtopic.php?f=12&t=181466
9. https://wildlion.media/davinci-resolve-python-scripting-the-complete-guide-to-the-api/
11. https://forum.blackmagicdesign.com/viewtopic.php?f=12&t=216993
12. https://forum.blackmagicdesign.com/viewtopic.php?f=21&t=189935
14. https://gist.github.com/mhadifilms/2b84d469135315793220dbf2226cbe63 (API reference v20.3)
17. https://forum.blackmagicdesign.com/viewtopic.php?f=21&t=113040
18. https://forum.blackmagicdesign.com/viewtopic.php?f=33&t=188494
22. https://github.com/postflows/resolve-markers-to-render-queue
24. https://forum.blackmagicdesign.com/viewtopic.php?f=40&t=221843
25. https://extremraym.com/cloud/resolve-scripting-doc/
26. https://forum.blackmagicdesign.com/viewtopic.php?f=21&t=212236
30. https://forum.blackmagicdesign.com/viewtopic.php?t=87555&p=497552
33. https://github.com/samuelgursky/davinci-resolve-mcp/issues/128
36. https://forum.blackmagicdesign.com/viewtopic.php?f=21&t=104557
37. https://forum.blackmagicdesign.com/viewtopic.php?f=12&t=216034
38. https://forum.blackmagicdesign.com/viewtopic.php?f=21&t=215940
39. https://davinciresolveclub.com/davinci-resolve-scripting-api/
