# Content Lifecycle Workflow (AI + Manual)

Use this workflow for any new or modified content in BhummiVastu.

## Phase Flow

1. **Change Impact Review** (`skill-change-impact-review`)  
   Identify what changed, what directories are affected, and whether this is net-new content or an update.
2. **Intake & Routing** (`skill-intake-routing`)  
   Convert request into a structured brief and route it to the right destination directory.
3. **Domain Classification** (`skill-domain-classifier`)  
   Assign one primary content type: `astrology | numerology | vastu | spiritual | misc`.
4. **Knowledge Verification** (`skill-knowledge-verifier`)  
   Validate factual claims and ensure each claim is verified or clearly marked as verifiable.
5. **Humanized Drafting** (`skill-humanized-writer`)  
   Produce clear, natural, human-like language.
6. **Social Media Gate** (`skill-social-media-gate`)  
   Adapt copy for engagement, attention hooks, and platform fit without changing meaning.
7. **Essence Re-Verification** (`skill-essence-reverify`)  
   Compare social-optimized copy against the domain-approved draft and restore any semantic drift.
8. **Publish Integration** (`skill-publish-integrator`)  
   Place final output in the correct directory and update metadata.

## Directory Routing Rules

| Request type | Place content in |
| --- | --- |
| Blog / educational article | `src/data/post/*.md` |
| Main site page edits | `src/pages/**/*.astro` |
| Social feed card updates | `src/data/media.ts` |
| Testimonial cleanup | `src/data/testimonials.ts` |
| Skill/process updates | `.github/skills/**` |

## Future Change Integration Protocol

1. Start every change with `skill-change-impact-review`.
2. Preserve prior `contentType` unless intent has clearly changed.
3. If social edits are requested, re-run both `skill-social-media-gate` and `skill-essence-reverify`.
4. For major rewrites, reset workflow stage to `draft` and rerun full stack.
5. Update `.github/skills/stack.yml` whenever stack order or required gates change.

## Required Post Metadata

For `src/data/post/*.md`, frontmatter must include:

- `contentType`
- `contentWorkflow.stage`
- `contentWorkflow.domainSkill`
- `contentWorkflow.socialSkill`
- `contentWorkflow.finalSkill`
- `contentWorkflow.claimStatus`
- `contentWorkflow.humanized`
- `contentWorkflow.claimReferences`
