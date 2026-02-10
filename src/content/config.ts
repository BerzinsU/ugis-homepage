import { defineCollection, z } from "astro:content";

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    title: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    location: z.string(),
    keywords: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = { work };
