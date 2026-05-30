# BhummiVastu Skill Stack

This folder defines **stackable skills** that can be executed by an AI agent or followed manually as a checklist.

## Core Goals

1. Ensure every content unit is tagged as one of: `astrology`, `numerology`, `vastu`, `spiritual`, `misc`.
2. Ensure every draft is reviewed for factual quality and verifiability.
3. Enforce a social-media presentation gate for reach and engagement.
4. Re-verify domain essence after social formatting so meaning is preserved.
5. Keep content naturally human-readable (not robotic).

## Stack Order (Default)

1. `skill-change-impact-review`
2. `skill-intake-routing`
3. `skill-domain-classifier`
4. `skill-knowledge-verifier`
5. `skill-humanized-writer`
6. `skill-social-media-gate`
7. `skill-essence-reverify`
8. `skill-publish-integrator`

## Where to Place Output

| Content kind | Directory / file |
| --- | --- |
| Long-form blog posts | `src/data/post/*.md` |
| Service-page copy updates | `src/pages/services/*.astro` |
| Social/media cards | `src/data/media.ts` |
| Review/testimonial tone normalization | `src/data/testimonials.ts` |
| Workflow/skills updates | `.github/skills/**` |

Use `workflows/content-lifecycle.md` as the operating guide.
