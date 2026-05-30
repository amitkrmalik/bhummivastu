# skill-essence-reverify

**Purpose:** Verify that social-optimized content still preserves the original domain meaning and intent.

## Input

- Domain-approved draft
- Social-gated draft

## Output Contract

- Delta summary (what changed)
- Drift status: `none` or `corrected`
- `contentWorkflow.stage: essence-reverified`

## Procedure

1. Compare both drafts claim-by-claim.
2. Flag exaggeration, omitted nuance, or misinterpretation.
3. Correct wording while preserving social readability.
4. Set final review metadata.
5. Hand off to `skill-publish-integrator`.

## Done When

- Core meaning is preserved.
- Post-social drift is resolved.
