# skill-knowledge-verifier

**Purpose:** Ensure domain statements are verified or at least explicitly verifiable.

## Input

- Domain-tagged draft

## Output Contract

- `claimStatus`: `verified` or `verifiable`
- `claimReferences`: minimum one supporting source/reference
- Notes for uncertain claims

## Procedure

1. Extract measurable/strong claims from the draft.
2. Validate each against accepted domain knowledge, references, or case-backed observations.
3. Reword over-absolute claims into responsible language where needed.
4. Populate frontmatter verification fields.
5. Hand off to `skill-humanized-writer`.

## Done When

- No unsupported strong claims remain.
- Verification metadata is complete.
