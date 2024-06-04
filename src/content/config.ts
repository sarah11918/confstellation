import { defineCollection } from 'astro:content';
import { contentSchema } from '@astrolicious/confstellation/schema';

export const collections = {
  documentation: defineCollection({ schema: contentSchema }),
};
