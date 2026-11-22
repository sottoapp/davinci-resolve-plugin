# Post-production workflows worth automating — digest

**Principle:** the agent inspects, classifies, proposes, logs and runs deterministic
operations; a human approves irreversible editorial, color, audio and delivery decisions.
**Used by:** the six workflow skills (see README).

| Workflow | Automate | Human approves |
|---|---|---|
| Ingest / media pool | checksum manifests, metadata extraction, duplicate detection, bin/Smart Bin proposals, offline reports | renames, scene/take inference, metadata overwrites (keep originals + audit log) |
| Proxy / relink | eligibility, naming/path validation, batch gen, proxy↔original match, originals-online gate | relink ambiguities |
| Transcript / notes assembly | transcription, speaker clustering, quote search, markers, selects, candidate assemblies | meaning, attribution, legal, story order |
| Conform (AAF/XML/EDL/OTIO) | interchange inspection, diff/missing-media reports, ref-movie compare | ambiguous matches, unsupported effects |
| Color management | metadata→IDT proposals, double-transform detection, level/gamut scans | color science, aesthetics |
| Grading / shot match | clustering, outlier reports, node naming, propagation candidates | look and final match |
| Fairlight / loudness | silence/click detection, stem routing validation, loudness/true-peak QC | destructive restoration (A/B review) |
| Subtitles / captions | transcription, spotting, line breaks, reading-speed + overlap checks | linguistic and accessibility review |
| Render / delivery | spec→preset, queue versions, filenames, ffprobe/MediaInfo, checksums, manifests | spec conflicts (block, don't silently fix) |

Key numbers (verify against the recipient's spec): EBU R128 −23 LUFS ±0.5 LU, −1 dBTP;
YouTube H.264 High/AAC 48 kHz; DCP 24 fps/48 kHz/JPEG2000-XYZ; ProRes 422 HQ 10-bit 4:2:2 vs 4444 alpha.

## Sources
Blackmagic: Definitive Guide (DR15) https://documents.blackmagicdesign.com/UserManuals/DaVinci-Resolve-15-Definitive-Guide.pdf ·
training https://www.blackmagicdesign.com/products/davinciresolve/training ·
Colorist Guide 18 https://documents.blackmagicdesign.com/UserManuals/DaVinci-Resolve-18-Colorist-Guide.pdf ·
17 New Features https://documents.blackmagicdesign.com/SupportNotes/DaVinci_Resolve_17_New_Features_Guide.pdf ·
18.5 New Features https://documents.blackmagicdesign.com/SupportNotes/DaVinci_Resolve_18.5_New_Features_Guide.pdf ·
Color Correction guide https://documents.blackmagicdesign.com/UserManuals/DaVinci-Resolve-15-Color-Correction.pdf ·
Advanced VFX 20 https://documents.blackmagicdesign.com/UserManuals/DaVinci-Resolve-20-Advanced-Visual-Effects.pdf ·
Fairlight guide https://documents.blackmagicdesign.com/UserManuals/DaVinci-Resolve-15-Fairlight-Audio-Post.pdf ·
Supported codecs 18.5 https://documents.blackmagicdesign.com/SupportNotes/DaVinci_Resolve_18_Supported_Codec_List.pdf.
Media pool / conform manuals: https://ltbits.github.io/davinci-resolve-manuals/ (DR10, DR11, DR15, DR17).
Specs: EBU R128 https://tech.ebu.ch/docs/r/r128.pdf · Tech 3343 https://tech.ebu.ch/docs/tech/tech3343.pdf ·
YouTube https://support.google.com/youtube/answer/1722171 · DCP https://oxido.io/kb/dcp-requirements/ ·
HPA/Deluxe DCP delivery https://hpaonline.com/wp-content/uploads/2022/07/Deluxe_Source-and-DCP_Delivery_Specifications_v5-11_20220314-2.pdf ·
DCP-o-matic manual https://dcpomatic.com/manual/pdf/dcpomatic.pdf · Apple ProRes https://www.apple.com/final-cut-pro/docs/Apple_ProRes.pdf
