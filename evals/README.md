# Evals

Test cases in skill-creator / `claude plugin eval` format. **Flat layout** (one folder per case, as the CLI expects);
the case-name prefix groups them by skill area.

```
evals/<case-name>/
  prompt.md       settings block + the user's prompt
  case.yaml       name + expected outcome
  graders/NN-*.md one verifiable statement per file
```

| Prefix | Skill under test |
|---|---|
| `project-media-` | resolve-guide-project-media |
| `cut-edit-` | resolve-guide-cut-edit |
| `color-` | resolve-guide-color |
| `fusion-` | resolve-guide-fusion |
| `fairlight-` | resolve-guide-fairlight |
| `deliver-` | resolve-guide-deliver |
| `principles-` | editing-principles |
| `interview-` | editing-interview-documentary |
| `sound-` | editing-sound-music |
| `shortform-` | editing-short-form-vertical |
| `review-` | editing-review-feedback |
| `realestate-compliance-` | realestate-delivery-compliance |
| `realestate-color-` | realestate-color-in-resolve |
| `realestate-editing-` | realestate-video-editing |
| `wedding-editing-` | wedding-video-editing |
| `wedding-color-` | wedding-color-audio-in-resolve |
| `wedding-compliance-` | wedding-delivery-client-care |
| `event-editing-` | event-video-editing |
| `event-color-` | event-color-audio-in-resolve |
| `event-compliance-` | event-delivery-compliance |
| `wedding-effects-` | wedding-effects-transitions-titles |
| `event-graphics-` | event-graphics-titles-transitions |
| `titles-` | resolve-titles-and-lower-thirds |
| `trigger-<short>-hit-N` / `-miss-N` | whether the right colour skill loads (`color`, `colormgmt`, `guidecolor`, `realestate`, `wedding`, `event`); tag = skill under test |

Each case's `prompt.md` frontmatter has `tags: [<skill-name>]`. Run results (workspace, outputs, benchmark) are **not** committed;
summaries go in the Notion knowledge base (Research: general / the vertical's skill tests). Still to write: trigger/near-miss cases and cases for the MCP-driving skills.
