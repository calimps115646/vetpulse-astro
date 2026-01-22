import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(10, 'Title must be at least 10 characters'),
    date: z.date(),
    excerpt: z.string().min(50, 'Excerpt must be at least 50 characters').max(300, 'Excerpt must be less than 300 characters'),
    cover: z.string().optional(),
    category: z.enum(['WORKFORCE INTELLIGENCE', 'M&A INTELLIGENCE', 'COMMERCIAL INTELLIGENCE']),
    readTime: z.string().regex(/^\d+ MIN READ$/, 'Read time must be in format "X MIN READ"'),
    tags: z.array(z.string()).optional().default([]),
    published: z.boolean().default(true),
    featured: z.boolean().default(false)
  })
});

export const collections = {
  blog
};
