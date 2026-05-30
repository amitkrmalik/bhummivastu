import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const contentTypeDefinition = () => z.enum(['astrology', 'numerology', 'vastu', 'spiritual', 'misc']);

const workflowStageDefinition = () =>
  z.enum(['draft', 'domain-reviewed', 'humanized', 'social-gated', 'essence-reverified', 'approved']);

const contentWorkflowDefinition = () =>
  z.object({
    stage: workflowStageDefinition(),
    domainSkill: z.string().min(1),
    socialSkill: z.string().min(1),
    finalSkill: z.string().min(1),
    claimStatus: z.enum(['verified', 'verifiable']),
    humanized: z.boolean(),
    claimReferences: z.array(z.string().min(1)).min(1),
  });

const postCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/post' }),
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),

    contentType: contentTypeDefinition(),
    contentWorkflow: contentWorkflowDefinition(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),

    metadata: metadataDefinition(),
  }),
});

export const collections = {
  post: postCollection,
};
