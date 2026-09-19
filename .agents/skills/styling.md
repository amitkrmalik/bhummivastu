# Styling guide

Use Tailwind CSS v4 through `src/assets/styles/tailwind.css`. Theme values are CSS variables declared in `src/components/CustomStyles.astro` and mapped to semantic utilities in the `@theme` block.

- Prefer `text-heading`, `text-default`, `text-muted`, `text-primary`, `bg-page`, and `bg-dark` over hard-coded theme colors.
- Use the class-based `dark:` variant; the `.dark` class is applied to `<html>`.
- Use the `intersect-*` utilities for scroll animations and wrap animations in `motion-safe:`.
- Do not add a legacy `tailwind.config.js`; add tokens or utilities to the CSS-first stylesheet.

Run `npm run build && npm run check` after styling changes.
