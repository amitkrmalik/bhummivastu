# skill-intake-routing

**Purpose:** Convert a raw request into a structured content brief and route it to the correct directory.

## Input

- User/content-owner request
- Change impact summary

## Output Contract

- One-line objective
- Audience segment
- Destination directory/file
- Content format (blog, service section, social card, testimonial copy, etc.)

## Procedure

1. Rewrite request as a concise objective.
2. Identify audience and intent (`educate`, `convert`, `engage`, `inform`).
3. Map output to repository location.
4. Pass brief to `skill-domain-classifier`.

## Done When

- Brief is clear enough for independent execution.
- Destination path is unambiguous.
