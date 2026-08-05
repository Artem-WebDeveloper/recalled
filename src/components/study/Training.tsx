import CardWord from './CardWord';
import { useGetTrainingWordsQuery, useUpdateSessionWordsMutation } from '@/services/words';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { startSession } from '@/store/sessionSlice';
import { useEffect } from 'react';
import { Spinner } from '../ui/spinner';
import { calculateReviewPayload } from '@/lib/repetititon';
import StartScreen from './StartScreen';

function Training() {
  const { data: trainingWords, isLoading: isFetching } = useGetTrainingWordsQuery({
    newLimit: 5,
    reviewLimit: 15,
  });

  const [updateSessionWords, { isLoading: isUpdating, isError, error }] =
    useUpdateSessionWordsMutation();

  const queue = useAppSelector((state) => state.session.queue);
  const completedQueue = useAppSelector((state) => state.session.completed);
  const isCompleted = useAppSelector((state) => state.session.isCompleted);
  const currentIndexWord = useAppSelector((state) => state.session.currentIndexWord);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (trainingWords && !isCompleted && queue.length === 0) {
      dispatch(startSession(trainingWords));
    }
  }, [dispatch, trainingWords, queue.length, isCompleted]);

  useEffect(() => {
    if (!isCompleted) return;
    const payload = calculateReviewPayload(completedQueue);
    updateSessionWords(payload);
  }, [isCompleted, completedQueue, updateSessionWords]);

  if (isCompleted)
    return (
      <div className="flex flex-1">
        <p>Сессия завершена!</p>
      </div>
    );

  if (isFetching) {
    return (
      <div className="flex flex-1">
        <Spinner className="m-auto size-10" />
      </div>
    );
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

  return (
    <>
      <StartScreen />

      <div className="flex flex-1">
        <CardWord wordDetail={queue[currentIndexWord]} />
      </div>
    </>
  );
}

export default Training;
