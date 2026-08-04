import { useEffect } from 'react';
import { useGetTrainingWordsQuery } from '@/services/words';
import { startSession } from '@/store/sessionSlice';
import { useAppDispatch } from '@/store/store';

function useStudySession() {
  const { data, isLoading: isFetching } = useGetTrainingWordsQuery({
    newLimit: 5,
    reviewLimit: 15,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(startSession(data));
    }
  }, [data, dispatch]);

  return { data, isFetching };
}

export default useStudySession;
