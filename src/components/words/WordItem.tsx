import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import type { IWord } from './types';
import { EyeIcon } from '@heroicons/react/24/solid';
import { Button } from '../ui/button';

function WordItem({ word }: { word: IWord }) {
  const [isShowTranslate, setIsShowTranslate] = useState(false);

  return (
    <div className="flex items-center py-1 text-lg">
      <p className="w-[40%] text-center">{word.word}</p>
      <Separator orientation="vertical" />

      <div className="flex flex-1 justify-center">
        {isShowTranslate ? (
          <p className="animate-in fade-in slide-in-from-bottom-2 duration-200">{word.translate}</p>
        ) : (
          <Button
            onClick={() => setIsShowTranslate((show) => !show)}
            variant="ghost"
            className="h-auto py-0.5 hover:bg-gray-300/10"
          >
            <EyeIcon className="size-5.5 text-gray-500" />
          </Button>
        )}
      </div>
    </div>
  );
}

export default WordItem;
