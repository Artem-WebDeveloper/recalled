import { ArrowPathRoundedSquareIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Button } from '../ui/button';
import { changeMode } from '@/store/sessionSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { useUpdateSessionWordsMutation } from '@/services/words';
import { calculateReviewPayload } from '@/lib/repetititon';
import { Spinner } from '../ui/spinner';

function EndScreen() {
  const mode = useAppSelector((state) => state.session.mode);
  const completedQueue = useAppSelector((state) => state.session.completed);
  const dispatch = useAppDispatch();

  const [updateSessionWords, { isLoading: isUpdating, isError }] = useUpdateSessionWordsMutation();

  async function handleFinishSession() {
    if (mode !== 'training') {
      dispatch(changeMode(null));
      return;
    }

    try {
      const payload = calculateReviewPayload(completedQueue);
      await updateSessionWords(payload).unwrap();
      dispatch(changeMode(null));
    } catch (err) {
      console.error(err);
    }
  }

  if (isUpdating) {
    return (
      <div className="flex flex-1">
        <div className="m-auto flex items-center gap-2">
          <p>Отправка данных...</p>
          <Spinner className="size-10" />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-1 flex-col justify-evenly">
        <p>Произошла ошибка во время отправки данных :(</p>
        <div className="flex gap-2">
          <Button className="flex-1" onClick={handleFinishSession}>
            Попробовать снова
          </Button>
          <Button className="" onClick={handleFinishSession}>
            <span> Сброс </span>
            <XMarkIcon />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col justify-evenly">
      <div className="flex items-baseline justify-between">
        <p className="text-xl">Сессия завершена!</p>
        {mode === 'practice' && (
          <Button
            onClick={() => {
              dispatch(changeMode(null));
              dispatch(changeMode('practice'));
            }}
          >
            Повторить <ArrowPathRoundedSquareIcon />
          </Button>
        )}
      </div>

      <div className="flex">
        <Button className="flex-1" onClick={handleFinishSession}>
          Завершить
        </Button>
      </div>
    </div>
  );
}

export default EndScreen;
