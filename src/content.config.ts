import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pageSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  slug: z.string().optional(),
  location: z.string().optional(),
  audience: z.string().optional(),
  groupPolicy: z.string().optional(),
  bikePolicy: z.string().optional(),
  lastUpdated: z.string().optional(),
});

const rides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/rides' }),
  schema: pageSchema,
});

const location = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/location' }),
  schema: pageSchema,
});

const knowledge = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/knowledge' }),
  schema: pageSchema,
});

export const collections = { rides, location, knowledge };