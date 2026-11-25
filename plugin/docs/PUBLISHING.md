# Publishing checklist (public plugin directory)

Based on the official plugin docs and `claude plugin validate .` (see `docs/research/`). Done = enforced by `scripts/validate_plugin.py` (repo root).

| Item | Status |
|---|---|
| Manifest: displayName, homepage, repository, supportUrl, license, engines | done |
| Version only in `plugin.json` (marketplace entry has none) | done, enforced |
| No tracked binaries, `.gitignore` present | done, enforced |
| Hooks: plain `node` commands, no inline env, PreToolUse guards `onFailure: block`, tested on macOS/Windows-safe Node | done, enforced + `node --test` |
| No top-level `bin/` (claude.ai/Cowork installs) | done |
| No unrequested network calls (upstream update check disabled in `.mcp.json`) | done |
| No code runs on install; first-run setup is explicit (`scripts/resolve-doctor.mjs`, `scripts/launch-mcp.mjs setup`) | done |
| Plugin folder is `plugin/` (marketplace `source: ./plugin`): within the 512-file / 256 KiB-per-file directory limits, no server code shipped | done, enforced |
| Offline server is a separate optional plugin `davinci-resolve-advanced` (`plugin-advanced/`), so a default install starts one server | done, enforced |
| MCP servers run through `plugin/scripts/launch-mcp.mjs`, a transparent launcher for ONE pinned upstream npm version (`davinci-resolve-mcp@5.4.0`, source vendored in `vendor/` for review); the directory holds pinned `npx` launchers for reviewer approval, so say so in the submission | done; **npx path not yet run end to end** |
| Sourced facts only; unverified claims flagged | ongoing (`docs/research/`) |
| **`icon`** — square PNG/JPEG, 512–2048 px, <2 MB, set in `plugin.json` | **needs you** (only used the first time the plugin is saved or submitted) |
| **`privacyPolicyUrl`, `termsOfServiceUrl`** (https) | **needs you** |
| README disclosure: hooks and MCP servers run local code with your permissions; the servers drive Resolve via its local scripting API | todo |
| `claude plugin tag --push` per release; run `claude plugin validate --strict` in CI | todo |
| Trigger/near-miss evals and `claude plugin eval` with mock MCP servers | todo |
| Test on a real Windows machine and a live Resolve Studio | todo |
