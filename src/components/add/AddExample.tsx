import { XMarkIcon } from '@heroicons/react/24/solid';
import { Field } from '../ui/field';
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
    <li className="animate-in fade-in duration-400">
      <div className="mb-1 flex justify-between">
        <p className="text-sm text-gray-400">Пример {num}</p>
        {/* <FieldLabel className="text-gray-400">Пример {num}</FieldLabel> */}
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
      <Field className="mb-2 gap-3">
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
    </li>
  );
}

export default AddExample;
