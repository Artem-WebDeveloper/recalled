import { wordsCardMock } from '@/mocks';
import CardWord from './CardWord';

function Training() {
  const words = wordsCardMock;

  return (
    <div className="flex flex-1">
      <CardWord wordDetail={words[2]} />
    </div>
  );
}

export default Training;
