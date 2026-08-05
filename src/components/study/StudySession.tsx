import { useAppSelector } from '@/store/store';
import CardWord from './CardWord';
import { Progress } from '../ui/progress';

function StudySession() {
  const queue = useAppSelector((state) => state.session.queue);
  const totalWords = useAppSelector((state) => state.session.totalWords);
  const completed = useAppSelector((state) => state.session.completed);
  const currentIndexWord = useAppSelector((state) => state.session.currentIndexWord);

  const progress = (completed.length / totalWords) * 100;

  return (
    <>
      <Progress value={progress} />

      <div className="flex flex-1">
        {queue[currentIndexWord] && <CardWord wordDetail={queue[currentIndexWord]} />}
      </div>
    </>
  );
}

export default StudySession;
