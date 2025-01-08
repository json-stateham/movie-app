'use client';

import { usePagination, DOTS } from './usePagination';
import clsx from 'clsx';
import type { PaginationProps } from './types';
import styles from './Pagination.module.css';

export const Pagination = ({
  currentPage,
  totalPages = 500,
  siblingCount = 1,
}: PaginationProps) => {
  const { paginationRange, handlePagination } = usePagination({
    currentPage: Number(currentPage),
    totalPages,
    siblingCount,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <div className={styles.pagination} role="navigation">
      <button
        aria-label="Previous Page"
        className={clsx(styles.paginationItem, {
          [styles['disabled']]: currentPage === 1,
        })}
        onClick={() => handlePagination('prev')}
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
            onClick={() => handlePagination('jump', pageNumber)}
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
        onClick={() => handlePagination('next')}
      >
        <span className={styles.arrow}>&#10095;</span>
      </button>
    </div>
  );
};
