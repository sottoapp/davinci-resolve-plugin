# Baseline delivery facts (verify against the recipient's current spec)

Sources: YouTube Help (recommended upload encoding), EBU R 128 / Tech 3343, DCP
guidance (HPA/Deluxe, DCP-o-matic manual), Apple ProRes white paper, Blackmagic
delivery training. See `docs/research/post-production-workflows.md` for the full list.

| Target | Baseline | Watch out for |
|---|---|---|
| **YouTube / web** | MP4; H.264 High, progressive, closed GOP, CABAC, 4:2:0; match source fps, deinterlace first; AAC-LC 48 kHz (YouTube lists 384 kbps stereo, 512 kbps 5.1); correct Rec.709 SDR or HDR tags | interlaced uploads; wrong color tags |
| **Broadcast (EBU R128)** | −23.0 LUFS integrated, typically ±0.5 LU, max true peak −1 dBTP; lossy codecs may need more headroom | regions differ (ATSC etc.); bars/tone/slate/TC only if specified; measure the *exported file* |
| **DCP** | JPEG 2000 in XYZ, MXF-wrapped audio; commonly 24 fps, 48 kHz 24-bit PCM, −20 dBFS reference; confirm standard (SMPTE/Interop), container, aspect, encryption, subtitles | subtitle timing vs DCP fps; validate with a DCP validator/cinema server; some 4K/easyDCP features need Studio or licences |
| **ProRes master/archive** | choose the exact family member: 422 / 422 HQ (10-bit 4:2:2) or 4444 / 4444 XQ (4:4:4:4, alpha); keep raster, fps, bit depth, color tags, channels, timecode | an archive is the project + source manifest + master + stems + captions + LUTs/IDTs/ODTs + fonts/licences + QC report, checksum-verified with an off-site copy |

Versioned preset naming that makes mismatches visible:
`WEB_YT_1080p_H264_AAC_STEREO`, `BROADCAST_REC709_PRORES422HQ_STEREO`,
`ARCHIVE_UHD_PRORES422HQ`, `DCP_2K_FLAT_SMPTE_24P_51`.

Loudness context: theatrical uses cinema reference levels, not streaming targets;
deliver stems (full mix, M&E, dialogue, music, effects, alternate language) when
the contract requires them.
