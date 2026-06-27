import { EyeIcon } from '@heroicons/react/24/solid';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Separator } from '../ui/separator';
import { useState } from 'react';

function Training() {
  const [isShowTranslate, setIsShowTranslate] = useState(false);

  return (
    <div className="flex flex-1">
      <Card className="flex-1 gap-0 rounded-xl bg-gray-500/5 px-0 pb-0 text-gray-50">
        <CardHeader>
          <p className="text-2xl">word</p>
        </CardHeader>
        <CardContent className="flex w-full flex-1">
          {isShowTranslate ? (
            <div className="animate-in fade-in slide-in-from-bottom-2 w-full py-3 duration-400">
              <Separator />
              <p className="py-3 text-center text-2xl">слово</p>

              {/* TODO Examles */}
              <div></div>
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
          <Button variant="ghost" className="flex-1 rounded-none py-6 font-semibold">
            Я вспомнил
          </Button>
          <Button variant="ghost" className="flex-1 rounded-none py-6 font-semibold">
            Я не вспомнил
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Training;
