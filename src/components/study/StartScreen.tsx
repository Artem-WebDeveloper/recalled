import { Button } from '../ui/button';
import { useAppDispatch } from '@/store/store';
import { changeMode } from '@/store/sessionSlice';

function StartScreen() {
  const dispatch = useAppDispatch();

  return (
    <>
      <p>Выбрать режим</p>
      <Button variant="ghost" onClick={() => dispatch(changeMode('training'))}>
        Обучение
      </Button>
      <Button variant="ghost" onClick={() => dispatch(changeMode('practice'))}>
        Свободная практика
      </Button>
    </>
  );
}

export default StartScreen;
