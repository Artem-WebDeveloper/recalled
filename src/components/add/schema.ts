import z from 'zod';

export const AddWordFormSchema = z.object({
  englishWord: z.string().min(1, 'Обязательное поле').max(100, 'Слишком много символов'),
  translation: z.string().min(1, 'Обязательное поле').max(100, 'Слишком много символов'),
  examples: z
    .object({
      english: z.string().max(300, 'Слишком много символов').min(1, 'Введите пример'),
      translation: z.string().max(300, 'Слишком много символов').min(1, 'Введите пример'),
    })
    .array(),
});

export type AddWordFormValues = z.infer<typeof AddWordFormSchema>;
