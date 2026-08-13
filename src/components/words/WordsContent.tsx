import { useGetWordsQuery } from '@/services/words';
import WordsList from './WordsList';
import { Spinner } from '../ui/spinner';
import Pagination from '../../ui/Pagination';
import { useSearchParams } from 'react-router';
import { WORDS_PAGE_SIZE } from '@/constants';

function WordsContent() {
  const [params] = useSearchParams();
  const page = Number(params.get('page')) || 1;

  const { data, isLoading, isFetching } = useGetWordsQuery({
    page: page,
    limit: WORDS_PAGE_SIZE,
  });
  const words = data?.words ?? [];
  const wordsCount = data?.total ?? 0;

  if (isLoading) {
    return (
      <div className="flex flex-1">
        <Spinner className="m-auto size-10" />
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col">
      <div
        className={`transition-opacity duration-200 ${isFetching ? 'opacity-50' : 'opacity-100'}`}
      >
        <WordsList words={words} />
      </div>

      <div
        className={`mt-auto transition-opacity duration-200 ${isFetching ? 'opacity-50' : 'opacity-100'}`}
      >
        {<Pagination count={wordsCount} pageSize={WORDS_PAGE_SIZE} />}
      </div>
    </div>
  );
}

export default WordsContent;
