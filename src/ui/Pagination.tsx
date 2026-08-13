import { useSearchParams } from 'react-router';
import {
  Pagination as PaginationUI,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../components/ui/pagination';
import { getPaginationItems } from '@/lib/getPaginationItems';

type PaginationProps = {
  count: number;
  pageSize: number;
};

function Pagination({ count, pageSize }: PaginationProps) {
  const [params, setSearchParams] = useSearchParams();

  const currentPage = Number(params.get('page')) || 1;

  const pageCount = Math.ceil(count / pageSize);

  if (pageCount === 0) return null;

  function handleChangePage(page: number) {
    params.set('page', String(page));
    setSearchParams(params);
  }

  function handlePrevPage() {
    if (currentPage <= 1) return;
    const next = currentPage - 1;
    params.set('page', String(next));
    setSearchParams(params);
  }

  function handleNextPage() {
    if (currentPage >= pageCount) return;
    const next = currentPage + 1;
    params.set('page', String(next));
    setSearchParams(params);
  }

  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  const paginationPages = getPaginationItems(pages, currentPage);

  return (
    <PaginationUI>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            aria-disabled={currentPage === 1}
            className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
            onClick={(e) => {
              e.preventDefault();
              handlePrevPage();
            }}
          />
        </PaginationItem>

        {paginationPages.map((numPage) => {
          const isActive = numPage === currentPage;

          if (numPage === 'ellipsis') {
            return (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          return (
            <PaginationItem key={numPage}>
              <PaginationLink
                isActive={isActive}
                className={isActive ? 'text-foreground' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleChangePage(numPage);
                }}
              >
                {numPage}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            aria-disabled={currentPage === pageCount}
            className={currentPage === pageCount ? 'pointer-events-none opacity-50' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNextPage();
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationUI>
  );
}

export default Pagination;
