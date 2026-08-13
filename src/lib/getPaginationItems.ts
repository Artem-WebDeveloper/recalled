import type { PaginationPageItem } from '@/types';

export function getPaginationItems(pages: number[], currentPage: number): PaginationPageItem[] {
  if (pages.length === 0) return [];

  const currentIndex = pages.indexOf(currentPage);

  if (currentIndex === -1) {
    return [pages[0]];
  }

  const firstPage = pages[0];
  const lastPage = pages[pages.length - 1];

  const left = pages.slice(currentIndex - 1, currentIndex);
  const right = pages.slice(currentIndex + 1, currentIndex + 2);

  const paginationPages: number[] = [];
  if (!left.includes(firstPage)) {
    paginationPages.push(firstPage);
  }
  paginationPages.push(...left);
  if (currentPage !== firstPage && currentPage !== lastPage) {
    paginationPages.push(currentPage);
  }
  paginationPages.push(...right);
  if (!right.includes(lastPage)) {
    paginationPages.push(lastPage);
  }

  const result: PaginationPageItem[] = [];
  for (let i = 0; i < paginationPages.length; i++) {
    const current = paginationPages[i];
    const next = paginationPages[i + 1];

    result.push(current);

    if (next !== undefined && next - current > 1) {
      result.push('ellipsis');
    }
  }

  return result;
}
