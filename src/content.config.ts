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
    updatedDate: z.date().optional(),
    author: z.string().default('Clay Duncan'),
    audience: z.enum(['realtors', 'loan-officers', 'consumers', 'general']),
    category: z
      .enum([
        'ai-for-realtors',
        'events-recaps',
        'mortgage-strategy',
        'loan-officer-growth',
      ])
      .default('ai-for-realtors'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
