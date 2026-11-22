# Evals

Trigger and behavior cases for the skill library. Format and runner: see
`skills/authoring-resolve-skills` and the `skill-creator` skill. Cases here are
**not yet written** — start with the new skills:

- `resolve-api-reliability`: should fire on "SetClipProperty returned True but nothing changed"; not on "write a Resolve scripting tutorial".
- `resolve-delivery-specs`: should fire on "export this for broadcast"; process check = `list_delivery_targets`/dry-run before `prepare_delivery_job`.
- `resolve-subtitles`: near-miss negative = "add a lower-third title" (→ `resolve-fusion`).
