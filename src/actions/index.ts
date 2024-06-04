import { defineAction, z } from 'astro:actions';

export const server = {
  subscribe: defineAction({
    accept: 'form',
    input: z.object({
      email: z.string().email(),
    }),
    handler: async ({ email }) => {
      // TODO: Implement own handler
      console.log('DEBUG:', email, 'subscribed');
      return { success: true };
    },
  }),
};
