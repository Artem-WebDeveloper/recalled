import { useFieldArray, useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { Field, FieldLabel } from '../ui/field';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import AddExample from './AddExample';
import type { AddWordFormValues } from './types';

const formShema = z.object({
  englishWord: z.string().max(100, 'Слишком много символов'),
  translateWord: z.string().max(100, 'Слишком много символов'),
  examples: z
    .object({
      english: z.string(),
      translate: z.string(),
    })
    .array(),
});

type Form = z.infer<typeof formShema>;

function AddWordForm() {
  const { control, register, handleSubmit } = useForm<AddWordFormValues>();

  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormProvider)
    name: 'examples',
  });

  const onSubmit: SubmitHandler<AddWordFormValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex min-h-0 flex-1 flex-col">
      <Field className="mb-2 gap-1">
        <FieldLabel htmlFor="englishWord" className="text-gray-400">
          Слово на английском
        </FieldLabel>
        <Input {...register('englishWord')} id="englishWord" type="text" />
      </Field>

      <Field className="gap-1">
        <FieldLabel htmlFor="translateWord" className="text-gray-400">
          Перевод
        </FieldLabel>
        <Input {...register('translateWord')} id="translateWord" type="text" />
      </Field>

      <div className="min-h-0 flex-1 overflow-y-auto">
        {fields.length > 0 && (
          <ul className="mt-5 flex flex-col gap-6 overflow-y-auto">
            {fields.map((field, index) => (
              <AddExample key={field.id} remove={remove} register={register} index={index} />
            ))}
          </ul>
        )}

        <Button
          className="mt-5 mb-5 self-start bg-transparent"
          type="button"
          variant="outline"
          onClick={() => append({ english: '', translate: '' })}
        >
          <span>Добавить пример</span> <PlusCircleIcon className="size-6.5" />
        </Button>
      </div>

      <Button className="mb-1 w-full shrink-0 rounded-lg" type="submit" variant="secondary">
        <span>Ок</span>
      </Button>
    </form>
  );
}

export default AddWordForm;
