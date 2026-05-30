# skill-change-impact-review

**Purpose:** Evaluate incoming change requests and map impact before content editing starts.

## Input

- New request or modification note
- Existing content link/path (if update)

## Output Contract

- Change type: `new-content` or `modify-content`
- Affected paths
- Required stack depth: `full` or `partial`
- Risk notes (meaning drift, SEO drift, tone drift)

## Procedure

1. Identify whether the request introduces new information or edits existing content.
2. List impacted directories and files.
3. Decide whether to run full stack or partial stack.
4. Record risk areas that need explicit re-check.

## Done When

- Impact summary is available.
- Next skill (`skill-intake-routing`) has clear scope.
