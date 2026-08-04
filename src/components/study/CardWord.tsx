import { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';

import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Separator } from '../ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import type { SessionWord } from '@/types';
import { nextWord } from '@/store/sessionSlice';
import { useAppDispatch } from '@/store/store';

function CardWord({ wordDetail }: { wordDetail: SessionWord | undefined }) {
  const [isShowTranslate, setIsShowTranslate] = useState(false);
  const dispatch = useAppDispatch();
  if (!wordDetail) return '';

  const { word, translation, examples } = wordDetail;

  return (
    <Card className="flex-1 gap-0 rounded-xl bg-gray-500/5 px-0 pb-0 text-gray-50">
      <CardHeader>
        <p className="text-2xl">{word}</p>
      </CardHeader>

      <CardContent className="flex w-full flex-1">
        {isShowTranslate ? (
          <div className="animate-in fade-in w-full py-3 duration-300">
            <Separator />
            <div className="">
              <p className="animate-in fade-in fill-mode-[both] slide-in-from-bottom-3 py-3 text-center text-2xl duration-400">
                {translation}
              </p>

              <Accordion
                multiple
                className="animate-in fade-in fill-mode-[both] delay-400 duration-300"
              >
                {examples.map((example) => {
                  return (
                    <AccordionItem key={example.english} value={example.english}>
                      <AccordionTrigger>{example.english}</AccordionTrigger>
                      <AccordionContent>{example.translation}</AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </div>
        ) : (
          <Button
            className="m-auto rounded-lg border-gray-100/10 bg-slate-950 px-8 py-8 hover:bg-slate-900"
            onClick={() => setIsShowTranslate((show) => !show)}
          >
            <EyeIcon className="size-7 text-gray-100" />
          </Button>
        )}
      </CardContent>

      <CardFooter className="flex px-0">
        <Button
          variant="ghost"
          className="flex-1 rounded-none py-6 font-semibold"
          onClick={() => dispatch(nextWord(true))}
        >
          Я вспомнил
        </Button>
        <Button
          variant="ghost"
          className="flex-1 rounded-none py-6 font-semibold"
          onClick={() => dispatch(nextWord(false))}
        >
          Я не вспомнил
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardWord;
