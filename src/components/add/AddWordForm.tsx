import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { Button } from '../ui/button';
import { Field, FieldLabel } from '../ui/field';
import { Input } from '../ui/input';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';

function AddWordForm() {
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

      <Collapsible>
        <CollapsibleTrigger>
          <Button variant="outline" className="bg-transparent">
            <span>Добавить пример</span> <ChevronDownIcon />
          </Button>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div>
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
          </div>
        </CollapsibleContent>
      </Collapsible>
    </form>
  );
}

export default AddWordForm;
