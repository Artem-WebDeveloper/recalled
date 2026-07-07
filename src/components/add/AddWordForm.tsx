import { useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { Field, FieldLabel } from '../ui/field';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import AddExample from './AddExample';

function AddWordForm() {
  const [exampleIds, setExampleIds] = useState<string[]>([]);

  function handleAddExample() {
    setExampleIds((examples) => [...examples, crypto.randomUUID()]);
  }

  function handleDeleteExample(id: string) {
    setExampleIds((examplesId) => examplesId.filter((exampleId) => exampleId !== id));
  }

  return (
    <form>
      <Field className="mb-2 gap-1">
        <FieldLabel htmlFor="english-word" className="text-gray-400">
          Слово на английском
        </FieldLabel>
        <Input className="" id="english-word" type="text" />
      </Field>

      <Field className="gap-1">
        <FieldLabel htmlFor="translate-word" className="text-gray-400">
          Перевод
        </FieldLabel>
        <Input className="" id="translate-word" type="text" />
      </Field>

      {exampleIds.length > 0 && (
        <ul className="mt-5 flex flex-col gap-6">
          {exampleIds.map((exampleId, i) => (
            <AddExample key={exampleId} num={i + 1} id={exampleId} onDelete={handleDeleteExample} />
          ))}
        </ul>
      )}

      <Button
        type="button"
        onClick={handleAddExample}
        variant="outline"
        className="mt-5 bg-transparent"
      >
        <span>Добавить пример</span> <PlusCircleIcon className="size-6.5" />
      </Button>
    </form>
  );
}

export default AddWordForm;
