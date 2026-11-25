# DaVinci Resolve (advanced, offline tools)

Optional add-on to the `davinci-resolve` plugin. It starts the upstream **offline** Node server (`davinci-resolve-advanced`): DRX/DRP/DRT/AAF handling, project-database reads and patches, conform QC math and deliverable QC, none of which need a running Resolve.
Install it only if you use those tools; the main plugin's skills say when a task needs it.

```
/plugin install davinci-resolve-advanced@sotto-davinci-resolve
```
Requires Node 20+ with `npx`. It runs one pinned upstream npm version (see `scripts/launch-mcp.mjs`), fetched on first start. Source and review copy: `vendor/davinci-resolve-mcp/` in the repository.
