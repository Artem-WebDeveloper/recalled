import { Link } from 'react-router';
import { Separator } from '../ui/separator';
import WordItem from './WordItem';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import type { WordPreview } from '@/types';

function WordsList({ words }: { words: WordPreview[] }) {
  if (words.length === 0)
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-3 space-x-5 py-20">
        <p className="text-2xl">No words found</p>
        <Link
          to="/add"
          className="text-1xl bg-accent-foreground inline-flex items-center space-x-0.5 rounded-2xl px-4 py-2 transition-colors hover:bg-amber-700"
        >
          <span>Add</span> <PlusCircleIcon className="size-6" />
        </Link>
      </div>
    );

  return (
    <ul className="py-2">
      {words.map((word, i, words) => {
        return (
          <li key={word.id}>
            <WordItem word={word} />
            {i !== words.length - 1 && <Separator />}
          </li>
        );
      })}
    </ul>
  );
}

export default WordsList;
