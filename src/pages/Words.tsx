import WordsList from '@/components/words/WordsList';

const words = [
  { id: 1, word: 'word', translate: 'слово' },
  { id: 2, word: 'forest', translate: 'лес' },
];

function Words() {
  return (
    <>
      <h1 className="mb-10 text-center text-3xl">Words</h1>
      <WordsList words={words} />
    </>
  );
}

export default Words;
