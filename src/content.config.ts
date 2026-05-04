import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/blog',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string().default('Clay Duncan'),
    audience: z.enum(['realtors', 'loan-officers', 'consumers', 'general']),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
