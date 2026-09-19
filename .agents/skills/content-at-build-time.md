# Content at build time

Blog content in `src/data/post/` is read during the static build. A content edit requires a new deployment to appear on the live site.

When changing the content schema, update `src/content.config.ts`, all affected frontmatter, and any CMS configuration together. Run `npm run build` to catch schema and route failures.
