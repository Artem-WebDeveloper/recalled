import { useFieldArray, useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { Field, FieldLabel } from '../ui/field';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import AddExample from './AddExample';
import { AddWordFormSchema, type AddWordFormValues } from './schema';
import { useAddWordMutation } from '@/services/words';

function AddWordForm() {
  const {
    control,
    formState: { errors, isValid, isSubmitting },
    register,
    handleSubmit,
    reset,
  } = useForm<AddWordFormValues>({
    resolver: zodResolver(AddWordFormSchema),
    defaultValues: {
      englishWord: '',
      translation: '',
      examples: [],
    },
  });
  const [addWord, { isLoading, isError }] = useAddWordMutation();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'examples',
  });

  const onSubmit: SubmitHandler<AddWordFormValues> = (data) => {
    const newWord = {
      word: data.englishWord,
      translation: data.translation,
      examples: data.examples,
    };
    addWord(newWord);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex min-h-0 flex-1 flex-col">
      <Field className="mb-2 gap-1">
        <FieldLabel htmlFor="englishWord" className="flex justify-between text-gray-400">
          <span>Слово на английском</span>
          <span className="text-destructive">
            {errors.englishWord && errors.englishWord.message}
          </span>
        </FieldLabel>
        <Input
          {...register('englishWord')}
          id="englishWord"
          type="text"
          aria-invalid={!!errors.englishWord}
        />
      </Field>

      <Field className="gap-1">
        <FieldLabel htmlFor="translation" className="flex justify-between text-gray-400">
          <span>Перевод</span>
          <span className="text-destructive">
            {errors.translation && errors.translation.message}
          </span>
        </FieldLabel>
        <Input
          aria-invalid={!!errors.translation}
          {...register('translation')}
          id="translation"
          type="text"
        />
      </Field>

      <div className="min-h-0 flex-1 overflow-y-auto">
        {fields.length > 0 && (
          <ul className="mt-5 flex flex-col gap-6 overflow-y-auto">
            {fields.map((field, index) => (
              <AddExample
                key={field.id}
                remove={remove}
                register={register}
                index={index}
                errors={errors}
              />
            ))}
          </ul>
        )}

        <Button
          className="mt-5 mb-5 self-start bg-transparent"
          type="button"
          variant="outline"
          onClick={() => append({ english: '', translation: '' })}
        >
          <span>Добавить пример</span> <PlusCircleIcon className="size-6.5" />
        </Button>
      </div>

      <Button
        disabled={!isValid || isSubmitting || isLoading}
        className="mb-1 w-full shrink-0 rounded-lg"
        type="submit"
        variant="secondary"
      >
        <span>Ок</span>
      </Button>
    </form>
  );
}

export default AddWordForm;
