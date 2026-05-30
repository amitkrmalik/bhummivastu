# skill-domain-classifier

**Purpose:** Assign exactly one primary domain tag to each content unit.

## Allowed Types

- `astrology`
- `numerology`
- `vastu`
- `spiritual`
- `misc`

## Input

- Routed content brief

## Output Contract

- `contentType` (single value)
- Why this type is primary
- Optional secondary notes for cross-domain context

## Procedure

1. Identify core claim set and teaching axis.
2. Select one primary domain type.
3. Add the type to frontmatter metadata.
4. Hand off to `skill-knowledge-verifier`.

## Done When

- `contentType` is set.
- Classification rationale is recorded.
