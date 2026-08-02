import { wordsCardMock } from '@/mocks';
import CardWord from './CardWord';
import { useGetPracticingNewWordsQuery, useGetPracticingReviewWordsQuery } from '@/services/words';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { addSessionWords } from '@/store/sessionSlice';
import { useEffect } from 'react';

function Training() {
  const words = wordsCardMock;
  const { data: newWords } = useGetPracticingNewWordsQuery();
  const { data: reviewWords } = useGetPracticingReviewWordsQuery();

  const queue = useAppSelector((state) => state.session.queue);
  const isCompleted = useAppSelector((state) => state.session.isCompleted);
  const currentIndexWord = useAppSelector((state) => state.session.currentIndexWord);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isCompleted && queue.length === 0 && newWords && reviewWords) {
      dispatch(addSessionWords([...newWords, ...reviewWords]));
    }
  }, [dispatch, newWords, reviewWords, queue.length, isCompleted]);

  if (isCompleted)
    return (
      <>
        <p>Сессия завершена!</p>
      </>
    );

  return (
    <div className="flex flex-1">
      <CardWord wordDetail={queue[currentIndexWord]} />
    </div>
  );
}

export default Training;
