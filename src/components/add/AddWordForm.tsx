import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { Button } from '../ui/button';
import { Field, FieldLabel } from '../ui/field';
import { Input } from '../ui/input';
import AddExample from './AddExample';
import { useState } from 'react';

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
      <Field className="gap-1">
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

      <ul>
        {exampleIds.map((exampleId, i) => (
          <AddExample key={exampleId} num={i + 1} id={exampleId} onDelete={handleDeleteExample} />
        ))}
      </ul>

      <Button type="button" onClick={handleAddExample} variant="outline" className="bg-transparent">
        <span>Добавить пример</span> <ChevronDownIcon />
      </Button>
    </form>
  );
}

export default AddWordForm;
