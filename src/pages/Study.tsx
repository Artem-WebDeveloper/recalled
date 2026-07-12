import Training from '@/components/study/Training';
import { addWord, getWords } from '@/services/api';
import { useEffect } from 'react';

function Study() {
  // Test
  useEffect(() => {
    getWords();
    // addWord({
    //   word: 'ambiguous',
    //   translation: 'неоднозначный',
    //   examples: [{ en: 'test', ru: 'тест' }],
    // });
  }, []);
  return (
    <>
      <h1 className="mb-10 text-center text-3xl">Study</h1>
      <Training />
    </>
  );
}

export default Study;
