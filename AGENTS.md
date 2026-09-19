# BhummiVastu Agent Instructions

## Project overview

This is a static BhummiVastu website built from the AstroWind template.

**Stack:** Astro 7 | Tailwind CSS 4 | TypeScript | Markdown content collections | Sharp

## Working rules

- Preserve the website's content, routes, SEO metadata, structured data, analytics, and deployment settings unless the task explicitly changes them.
- Before a project-specific task, check `.agents/skills/` for a matching workflow and follow it.
- Keep content claims and consultation details grounded in the repository; do not invent services, credentials, or outcomes.
- Run `npm run build` and `npm run check` before handing off a change.
- Run the focused repository checks when they apply: `npm run test:share-metadata` and `npm run test:pricing-copy`.
- Use a separate branch/worktree for substantial changes and summarize the diff, checks, and any environment limitations.

## Quick reference

| Command         | Purpose                                     |
| --------------- | ------------------------------------------- |
| `npm run dev`   | Start the local Astro server                |
| `npm run build` | Create the production static build          |
| `npm run check` | Run Astro type checks, ESLint, and Prettier |
| `npm run fix`   | Apply ESLint and Prettier fixes             |

## Architecture

- `src/config.yaml` is the site configuration loaded through the `astrowind:config` virtual module.
- `src/data/post/` contains Markdown blog posts loaded by the Astro content layer.
- `src/components/widgets/` contains reusable page sections.
- `src/assets/styles/tailwind.css` is the Tailwind v4 CSS-first configuration.
- `vendor/integration/` contains the AstroWind configuration integration.

## Tailwind v4

Tailwind is configured through `src/assets/styles/tailwind.css` and `@tailwindcss/vite`. Do not recreate a `tailwind.config.js` for new work. Use the semantic tokens (`primary`, `secondary`, `accent`, `heading`, `default`, `muted`, and `link`) so the theme remains controlled by `CustomStyles.astro`.

## Verification

After changes, verify the production build, Astro checks, ESLint, Prettier, and the relevant focused scripts. For UI changes, inspect the home page, blog, dark mode, mobile navigation, and the affected route in a browser.
