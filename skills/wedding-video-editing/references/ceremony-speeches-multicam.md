# Ceremony, speeches and multicam — reference

Sources: `docs/research/wedding/editing-workflow.md`, `docs/research/wedding/video-analyses/wedding_features.md`, `docs/research/event/video-analyses/` (multicam). Menu names move between Resolve versions; verify on the installed one.

## Building the multicam
1. Put all simultaneous angles and the reference audio in one bin; set Camera # on clips so several files from one camera share an angle.
2. Create New Multicam Clip Using Selected Clips; set the timeline frame rate deliberately; Angle Sync Timecode / Sound / In-Out / Marker per the situation.
3. Multicam audio option on purpose: reference audio / Angle 1 for one master recorder, source channels to preserve each source, all angles when every source must stay available. Resolve 21 dialog values seen in a tutorial: Angle Sync Sound, Channel Automatic, Multicam Audio Adaptive Tracks.
4. Open it and check sync at the start, middle and end before cutting.
5. Alternative used by one editor: sync on the timeline, make a compound clip per moment, then Convert Compound Clip to Multicam Clip.

## Cutting
- Video Only mode when the master audio must not change; Audio Only to replace the sound source; Audio and Video only when both should switch. A tutorial shows an unlinked, unflattened multicam audio angle switching to the cutting camera's scratch mic; fix by relinking the master audio, flattening the audio angle, or using Video Only.
- Number keys cut live during playback; Cut page Sync Bin is fast for event assembly.
- Multicam tracks open locked; unlock to edit inside. Fairlight **track** effects inside a multicam do not persist; use clip-level effects.
- Sync failure checklist: silent unused channels in a multichannel clip (remove in Clip Attributes > Audio or set the sync channel to Automatic), sync channel pinned to Channel 1, silent camera (no waveform possible), mixed frame rates (60 fps into 24 needs the clip frame rate set to its native rate and an Optical Flow retime; Speed Warp is Studio), VFR phone footage.

## Ceremony order
Venue and room tone, processional, welcome and readings, vows, rings, ritual or cultural element, pronouncement and kiss, recessional, brief applause and reactions. Wide for geography and cover, medium or tight for vows and rings, parents and guests only when the reaction adds meaning, keep eyelines and screen direction, never cut mid-word or mid-laugh.

## Speech order
Introduction, speaker medium, couple reaction, guest reaction, return to speaker for key lines, keep laughter and applause, end on applause or a natural transition. Fewer cuts; the speaker's rhythm leads.

## Voiceover from vows, letters and toasts
Find complete thoughts, assemble with no music, remove repetition but keep breaths and pauses, arrange an arc without changing meaning, add picture after the audio works, keep room tone under it, return to the speaker on camera for authenticity. Studio transcription plus search finds lines in hours of dialogue; an LLM can suggest candidate quotes from an exported transcript but only the editor decides and must send transcripts only where the client's privacy terms allow. Use Match Frame to fetch the source audio for B-roll that was placed without audio.
