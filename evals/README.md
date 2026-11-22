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

Each case's `prompt.md` frontmatter has `tags: [<skill-name>]`. Run results (workspace, outputs, benchmark) are **not** committed;
summaries go in `docs/research/skill-eval-*.md`. Still to write: trigger/near-miss cases and cases for the MCP-driving skills.
