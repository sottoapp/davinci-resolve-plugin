# Real-estate skills — baseline tests (2026-11-22)

Method as `docs/research/skill-baseline-tests.md`: one scenario per case (`evals/realestate-*`), run by a fresh subagent without and with the skill, graded blind against the saved assertions. **n=1 per arm — indicative only.**

| Case | Skill | With | Without | What the baseline missed |
|---|---|---|---|---|
| realestate-editing-listing-plan | realestate-video-editing | 1.00 | 0.67 | opened on a drone shot with a title card instead of the hero feature; no captions; no price/address check |
| realestate-color-living-room | realestate-color-in-resolve | 0.83 | 0.50 | window method (HDR highlights / tracked window, clipped = unrecoverable), true-to-life restraint, hero-room matching |
| realestate-compliance-mls-branding | realestate-delivery-compliance | 1.00 | 0.83 | never said to keep originals when disclosing sky replacement / staging |
| realestate-compliance-ai-window | realestate-delivery-compliance | 1.00 | 1.00 | nothing — the model already refuses a generated window view |

## Findings
- The skills add specifics (hero-first openings, QC of on-screen facts, Resolve window/verticals method, originals kept) rather than rescuing a behaviour the model gets wrong.
- Compliance is **not** a strong "discipline" skill by this evidence: the baseline already declined the branding/Fair-Housing/AI-view requests. Its value is the checklist and platform facts, which the retrieval tests can't verify (no spec question was asked) — platform specs remain unverified against live sources.
- The one with-skill miss (crop cost of straightening verticals) was a real gap → the colour skill now says every correction crops the frame.
- Not tested: `resolve-speed-ramps-transitions`, `resolve-templates-and-batching`, the reference files, and anything against a live Resolve.
