'use client';

import { useRouter } from 'next/router';
import { usePagination, DOTS } from './usePagination';
import clsx from 'clsx';
import type { PaginationProps } from './types';
import styles from './Pagination.module.css';

export const Pagination = ({
  currentPage,
  totalPages = 500,
  siblingCount = 1,
}: PaginationProps) => {
  const router = useRouter();

  const paginationRange = usePagination({
    currentPage: Number(router.query.page),
    totalPages,
    siblingCount,
  }) as number[];

  const nextPage = () => {
    router.push({
      query: {
        ...router.query,
        page: currentPage + 1,
      },
    });
  };

  const prevPage = () => {
    router.push({
      query: {
        ...router.query,
        page: currentPage - 1,
      },
    });
  };

  const setPage = (page: number) => {
    router.push({
      query: {
        ...router.query,
        page,
      },
    });
  };

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  return (
    <div className={styles.pagination} role="navigation">
      <button
        aria-label="Previous Page"
        className={clsx(styles.paginationItem, {
          [styles['disabled']]: currentPage === 1,
        })}
        onClick={prevPage}
      >
        <span className={styles.arrow}>&#10094;</span>
      </button>
      {paginationRange?.map((pageNumber: number, idx) => {
        if (pageNumber === DOTS) {
          return (
            <span
              aria-hidden
              key={`pagination-${idx}`}
              className={clsx(styles.paginationItem, styles.dots)}
            >
              ...
            </span>
          );
        }

        return (
          <button
            aria-label={`Page ${pageNumber}`}
            key={`pagination-${idx}`}
            className={clsx(styles.paginationItem, {
              [styles['selected']]: pageNumber === currentPage,
            })}
            onClick={() => setPage(pageNumber)}
          >
            <span>{pageNumber}</span>
          </button>
        );
      })}
      <button
        aria-label="Next Page"
        className={clsx(styles.paginationItem, {
          [styles['disabled']]: currentPage === totalPages,
        })}
        onClick={nextPage}
      >
        <span className={styles.arrow}>&#10095;</span>
      </button>
    </div>
  );
};
