import { useAppDispatch, useAppSelector } from '@/store/store';
import StartScreen from './StartScreen';
import StudySession from './StudySession';
import useSession from './useSession';

function StudyFlow() {
  const mode = useAppSelector((state) => state.session.mode);
  const queue = useAppSelector((state) => state.session.queue);
  const completedQueue = useAppSelector((state) => state.session.completed);
  const isCompleted = useAppSelector((state) => state.session.isCompleted);
  const currentIndexWord = useAppSelector((state) => state.session.currentIndexWord);
  const dispatch = useAppDispatch();

  console.log(queue);
  const { isFetchingWords } = useSession();

  return <>{!mode ? <StartScreen /> : <StudySession />}</>;
}

export default StudyFlow;
