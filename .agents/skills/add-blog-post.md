# Add a blog post

1. Add a Markdown file under `src/data/post/`.
2. Include `title`, `publishDate`, `excerpt`, `image`, `category`, `tags`, `author`, `contentType`, and the required `contentWorkflow` fields.
3. Keep excerpts concise and claims supportable; do not invent consultation results.
4. Run `npm run build` and inspect the post, its category/tag pages, RSS output, and sitemap.

Posts are loaded at build time through the Astro content layer and receive SEO metadata, JSON-LD, related posts, RSS, and sitemap entries through the existing site components.
