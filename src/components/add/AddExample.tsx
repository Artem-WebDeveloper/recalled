import { XMarkIcon } from '@heroicons/react/24/solid';
import { Field } from '../ui/field';
import { Input } from '../ui/input';
import type { FieldErrors, UseFieldArrayRemove, UseFormRegister } from 'react-hook-form';
import type { AddWordFormValues } from './schema';

type AddExampleProps = {
  register: UseFormRegister<AddWordFormValues>;
  remove: UseFieldArrayRemove;
  index: number;
  errors: FieldErrors<AddWordFormValues>;
};

function AddExample({ register, remove, index, errors }: AddExampleProps) {
  const englishError = errors.examples?.[index]?.english;
  const translationError = errors.examples?.[index]?.translation;

  return (
    <li className="animate-in fade-in duration-400">
      <div className="mb-1 flex justify-between">
        <p className="text-sm text-gray-400">Пример {index + 1}</p>
        <span className="text-destructive text-sm">
          {englishError?.message || translationError?.message}
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            remove(index);
          }}
          className="text-gray-400 hover:text-gray-100"
        >
          <XMarkIcon className="size-6" />
        </button>
      </div>

      <Field className="mb-2 gap-3">
        <Input
          {...register(`examples.${index}.english`)}
          placeholder="Текст на английском"
          type="text"
          aria-invalid={!!englishError?.message}
        />
      </Field>

      <Field className="gap-3">
        <Input
          {...register(`examples.${index}.translation`)}
          placeholder="Перевод"
          type="text"
          aria-invalid={!!translationError?.message}
        />
      </Field>
    </li>
  );
}

export default AddExample;
