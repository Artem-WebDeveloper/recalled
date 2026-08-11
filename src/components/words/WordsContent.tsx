import { useSearchParams } from 'react-router';
import { useGetWordsQuery } from '@/services/words';
import WordsList from './WordsList';
import { Spinner } from '../ui/spinner';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';

function WordsContent() {
  const [params, setSearchParams] = useSearchParams();
  const page = Number(params.get('page')) || 1;

  const { data, isLoading: isFetchingWords } = useGetWordsQuery({ page: page, limit: 5 });
  const words = data?.words ?? [];
  const total = data?.total ?? 0;

  if (isFetchingWords && words.length === 0) {
    return (
      <div className="flex flex-1">
        <Spinner className="m-auto size-10" />
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col">
      <WordsList words={words} />

      <div className="mt-auto">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

export default WordsContent;
