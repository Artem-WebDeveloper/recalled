import { useAppSelector } from '@/store/store';
import StartScreen from './StartScreen';
import StudySession from './StudySession';
import useSession from './useSession';
import { Spinner } from '../ui/spinner';
import EndScreen from './EndScreen';

function StudyFlow() {
  const { isFetchingWords } = useSession();
  const mode = useAppSelector((state) => state.session.mode);

  const queue = useAppSelector((state) => state.session.queue);
  const isCompleted = useAppSelector((state) => state.session.isCompleted);

  if (!mode) {
    return <StartScreen />;
  }

  if (isFetchingWords && queue.length === 0) {
    return (
      <div className="flex flex-1">
        <Spinner className="m-auto size-10" />
      </div>
    );
  }

  if (!isCompleted && queue.length === 0 && mode === 'training') {
    return (
      <div className="flex flex-1 flex-col gap-2.5">
        <p className="mb-8 text-center text-xl">Отличная работа! На сегодня все слова повторены.</p>

        <p> Следующее повторение будет доступно завтра.</p>
        <p> Или добавьте новые слова, чтобы продолжить обучение.</p>
      </div>
    );
  }

  if (isCompleted) return <EndScreen />;

  return <StudySession />;
}

export default StudyFlow;
