---
name: resolve-proxy-relink
description: Use when editing is slow, media shows offline, drives or folders moved, proxies must be linked to originals, or before rendering to confirm no proxy leaks into the master.
---

# Proxy and relink

Proxies are an editorial convenience; masters must come from originals. Most
disasters are a proxy rendered as a master, or a relink matched by filename alone.

## Workflow

1. **Fix the timeline raster and frame rate first**, then pick the proxy codec:
   ProRes Proxy/LT or DNxHR LB for responsive edit; a higher tier when image
   inspection matters; H.264/H.265 only when transfer size outweighs edit speed.
2. **Externally generated proxies** must match original *timecode, base filename,
   frame rate and duration*, in a Resolve-supported codec. Avoid variable-frame-rate
   screen recordings as proxies.
3. **Link** with `link_proxy_checked` (validates clip id and proxy path before
   `LinkProxyMedia`; dry-run first). Do not generate proxies from source media
   without being asked — source media is never modified or derived.
4. **Relink by evidence**: path + timecode + reel + duration together, never
   filename alone. Use dry-run relink plans and log every ambiguity.
5. **Gate before color/delivery**: disable proxy use, confirm every original is
   online, toggle a representative timeline proxy↔original and look at frames.
6. **Moving projects**: proxy-only archives omit originals; a `.drb` carries bins
   and metadata, not media.

## Checks
One-to-one proxy↔original; matching TC/fps/duration/audio sync; proxy storage path
documented and backed up; final render not using the proxy override; focus/noise/
chroma judged on originals, not proxies.

Depth: `mcp-server/docs/kernels/media-pool-ingest-kernel.md`.
