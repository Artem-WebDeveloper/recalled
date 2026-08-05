import { useEffect } from 'react';
import { useGetRandomWordsQuery, useGetTrainingWordsQuery } from '@/services/words';
import { startSession } from '@/store/sessionSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';

function useSession() {
  const mode = useAppSelector((state) => state.session.mode);

  const { data: trainingWords, isLoading: isTrainingFetching } = useGetTrainingWordsQuery(
    {
      newLimit: 5,
      reviewLimit: 15,
    },
    {
      skip: mode !== 'training',
    },
  );
  const { data: randomWords, isLoading: isRandomFetching } = useGetRandomWordsQuery(
    { wordsLimit: 10 },
    { skip: mode !== 'practice' },
  );

  const dispatch = useAppDispatch();

  const isFetchingWords = isTrainingFetching || isRandomFetching;

  useEffect(() => {
    if (trainingWords && mode === 'training') {
      dispatch(startSession(trainingWords));
    } else if (randomWords && mode === 'practice') {
      dispatch(startSession(randomWords));
    }
  }, [mode, trainingWords, randomWords, dispatch]);

  return { isFetchingWords };
}

export default useSession;
