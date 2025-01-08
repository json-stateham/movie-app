import { useCallback, useMemo } from 'react';
import { range } from 'shared/helpers/range';
import type { PaginationProps } from './types';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const DOTS = 0;

const getPaginationRange = ({
  totalPages = 500,
  siblingCount = 1,
  currentPage,
}: PaginationProps) => {
  const totalPageNumbers = siblingCount + 5;

  if (totalPageNumbers >= totalPages) return range(1, totalPages);

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

  const showLeftDots = leftSiblingIndex > 2;
  const showRightDots = rightSiblingIndex < totalPages - 2;

  const firstPageIndex = 1;

  if (!showLeftDots && showRightDots) {
    const leftItemCount = 3 + 2 * siblingCount;
    const leftRange = range(1, leftItemCount);

    return [...leftRange, DOTS, totalPages];
  }

  if (showLeftDots && !showRightDots) {
    const rightItemCount = 3 + 2 * siblingCount;
    const rightRange = range(totalPages - rightItemCount + 1, totalPages);

    return [firstPageIndex, DOTS, ...rightRange];
  }

  if (showLeftDots && showRightDots) {
    const middleRange = range(leftSiblingIndex, rightSiblingIndex);
    return [firstPageIndex, DOTS, ...middleRange, DOTS, totalPages];
  }

  return [];
};

const usePagination = ({
  totalPages = 500,
  siblingCount = 1,
  currentPage,
}: PaginationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePagination = useCallback(
    (action: 'next' | 'prev' | 'jump', pageNumberToJump?: number) => {
      let page = action === 'next' ? currentPage + 1 : currentPage - 1;
      if (pageNumberToJump && action === 'jump') page = pageNumberToJump;

      const params = new URLSearchParams(searchParams);
      params.set('page', String(page));
      router.push(`${pathname}?${params}`);
    },
    [currentPage, pathname, router, searchParams],
  );

  const paginationRange = useMemo(
    () =>
      getPaginationRange({
        totalPages,
        siblingCount,
        currentPage,
      }),
    [currentPage, totalPages, siblingCount],
  );

  return { paginationRange, handlePagination };
};

export { usePagination, DOTS };
