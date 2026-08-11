import z from 'zod';

export const WordSchema = z.object({
  id: z.number(),
  word: z.string(),
  translation: z.string(),
  examples: z.object({ english: z.string(), translation: z.string() }).array(),
  repetitions: z.number(),
  created_at: z.string(),
  next_review_at: z.string(),
});

export const WordsSchema = z.array(WordSchema);
