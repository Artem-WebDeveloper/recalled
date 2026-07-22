import WordsList from '@/components/words/WordsList';
import { useGetWordsQuery } from '@/services/words';

const words = [
  { id: 1, word: 'word', translate: 'слово' },
  { id: 2, word: 'forest', translate: 'лес' },
];

function Words() {
  const { data } = useGetWordsQuery();

  console.log(data);

  return (
    <>
      <h1 className="mb-10 text-center text-3xl">Words</h1>
      <WordsList words={words} />
    </>
  );
}

export default Words;
