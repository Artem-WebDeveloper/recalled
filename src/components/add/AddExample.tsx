import { XMarkIcon } from '@heroicons/react/24/solid';
import { Field } from '../ui/field';
import { Input } from '../ui/input';
import type { UseFieldArrayRemove, UseFormRegister } from 'react-hook-form';
import type { AddWordFormValues } from './types';

type AddExampleProps = {
  register: UseFormRegister<AddWordFormValues>;
  remove: UseFieldArrayRemove;
  index: number;
};

function AddExample({ register, remove, index }: AddExampleProps) {
  return (
    <li className="animate-in fade-in duration-400">
      <div className="mb-1 flex justify-between">
        <p className="text-sm text-gray-400">Пример {index + 1}</p>
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
        />
      </Field>

      <Field className="gap-3">
        <Input {...register(`examples.${index}.translate`)} placeholder="Перевод" type="text" />
      </Field>
    </li>
  );
}

export default AddExample;
