import { FC, useLayoutEffect, useEffect, useRef } from 'react'
import { useStore } from 'effector-react'
import clsx from 'clsx'
import { prevPage, nextPage, setPage, $isAscending } from './model'
import { usePagination, DOTS } from './usePagination'

import { IPagination } from './types'

import styles from './Pagination.module.scss'

const Pagination: FC<IPagination> = ({
  currentPage,
  totalPages,
  siblingCount = 1,
}) => {
  const isAscending = useStore($isAscending)

  useLayoutEffect(() => {
    setTimeout(
      () =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        }),
      420,
    )
  }, [currentPage])

  const paginationRange: any = usePagination({
    currentPage,
    totalPages,
    siblingCount,
  })

  console.log(isAscending)

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null
  }

  return (
    <div className={styles.paginationWrapper}>
      <ul className={styles.pagination}>
        <li
          className={clsx(styles.paginationItem, {
            [styles['disabled']]: currentPage === 1,
          })}
          onClick={() => prevPage()}
        >
          <span className={styles.arrow}>&#10094;</span>
        </li>
        {paginationRange?.map((pageNumber: number) => {
          if (pageNumber === DOTS) {
            return (
              <li
                // @ts-ignore Property 'randomUUID' does not exist on type 'Crypto'.ts(2339)
                key={window.crypto.randomUUID()}
                className={clsx(styles.paginationItem, styles.dots)}
              >
                ...
              </li>
            )
          }

          return (
            <li
              // @ts-ignore Property 'randomUUID' does not exist on type 'Crypto'.ts(2339)
              key={window.crypto.randomUUID()}
              className={clsx(styles.paginationItem, {
                [styles['paginationForward']]:
                  pageNumber > 1 && pageNumber < totalPages && isAscending,
                [styles['paginationBackward']]:
                  pageNumber > 1 && pageNumber < totalPages && !isAscending,
                [styles['selected']]: pageNumber === currentPage,
              })}
              onClick={() => setPage(pageNumber)}
            >
              {pageNumber}
            </li>
          )
        })}
        <li
          className={clsx(styles.paginationItem, {
            [styles['disabled']]: currentPage === totalPages,
          })}
          onClick={() => nextPage()}
        >
          <span className={styles.arrow}>&#10095;</span>
        </li>
      </ul>
    </div>
  )
}

export { Pagination }