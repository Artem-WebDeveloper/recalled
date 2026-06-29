import { XMarkIcon } from '@heroicons/react/24/solid';
import { Field, FieldLabel } from '../ui/field';
import { Input } from '../ui/input';

function AddExample({
  id,
  num,
  onDelete,
}: {
  id: string;
  num: number;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="animate-in fade-in duration-400">
      <div className="flex justify-between">
        <FieldLabel className="text-gray-400">Пример {num}</FieldLabel>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            onDelete(id);
          }}
          className="text-gray-400 hover:text-gray-100"
        >
          <XMarkIcon className="size-6" />
        </button>
      </div>
      <Field className="gap-3">
        <Input
          className=""
          id={`example-english-${id}`}
          placeholder="Текст на английском"
          type="text"
        />
      </Field>

      <Field className="gap-3">
        <Input className="" id={`example-translate-${id}`} placeholder="Перевод" type="text" />
      </Field>
    </div>
  );
}

export default AddExample;
