import { useEffect } from 'react';
import { useGetRandomWordsQuery, useGetTrainingWordsQuery } from '@/services/words';
import { startSession } from '@/store/sessionSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { FETCH_NEW_WORDS, FETCH_RANDOM_WORDS, FETCH_REVIEW_WORDS } from '@/constants';

function useSession() {
  const mode = useAppSelector((state) => state.session.mode);
  const queueLength = useAppSelector((state) => state.session.queue.length);
  const isCompleted = useAppSelector((state) => state.session.isCompleted);

  const { data: trainingWords, isLoading: isTrainingFetching } = useGetTrainingWordsQuery(
    {
      newLimit: FETCH_NEW_WORDS,
      reviewLimit: FETCH_REVIEW_WORDS,
    },
    {
      skip: mode !== 'training' || queueLength > 0,
    },
  );
  const { data: randomWords, isLoading: isRandomFetching } = useGetRandomWordsQuery(
    { wordsLimit: FETCH_RANDOM_WORDS },
    { skip: mode !== 'practice' || queueLength > 0 },
  );

  const dispatch = useAppDispatch();

  const isFetchingWords = isTrainingFetching || isRandomFetching;

  useEffect(() => {
    if (trainingWords && !isCompleted && mode === 'training' && queueLength === 0) {
      dispatch(startSession(trainingWords));
    } else if (randomWords && !isCompleted && mode === 'practice' && queueLength === 0) {
      dispatch(startSession(randomWords));
    }
  }, [mode, trainingWords, randomWords, isCompleted, dispatch, queueLength]);

  return { isFetchingWords };
}

export default useSession;
