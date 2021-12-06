import { FC } from 'react'
import { useStore } from 'effector-react'
import { useQueryClient } from 'react-query'
import { prevPage, nextPage, setPage, $page, $isAscending } from './model'
import { usePagination, DOTS } from './usePagination'
import { useCustomEventDetail } from 'shared/hooks/useCustomEventDetail'
import { fetchMoviesList } from 'entities/MoviesCardsGrid/model'
import { Text } from 'shared/ui'

import { IPagination } from './types'

import clsx from 'clsx'
import styles from './Pagination.module.scss'

const Pagination: FC<IPagination> = ({ siblingCount = 1 }) => {
  const isAscending = useStore($isAscending)
  const currentPage = useStore($page)

  const totalPages = useCustomEventDetail('gotTotalPages')

  const queryClient = useQueryClient()

  const prefetchPage = async (pageParam: number) => {
    await queryClient.prefetchQuery(['moviesList', pageParam], () =>
      fetchMoviesList(pageParam),
    )
  }

  const paginationRange = usePagination({
    currentPage,
    totalPages,
    siblingCount,
  }) as number[]

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
          onMouseEnter={() => prefetchPage(currentPage - 1)}
          onMouseDownCapture={() => prefetchPage(currentPage - 1)}
        >
          <span className={styles.arrow}>&#10094;</span>
        </li>
        {paginationRange?.map((pageNumber: number, idx) => {
          if (pageNumber === DOTS) {
            return (
              <li
                key={`pagination-${idx}`}
                className={clsx(styles.paginationItem, styles.dots)}
              >
                ...
              </li>
            )
          }

          return (
            <li
              key={`pagination-${idx}`}
              className={clsx(styles.paginationItem, {
                [styles['paginationForward']]:
                  pageNumber > 1 && pageNumber < totalPages && isAscending,
                [styles['paginationBackward']]:
                  pageNumber > 1 && pageNumber < totalPages && !isAscending,
                [styles['selected']]: pageNumber === currentPage,
              })}
              onClick={() => setPage(pageNumber)}
              onMouseEnter={() => prefetchPage(pageNumber)}
            >
              <Text tag="span">{pageNumber}</Text>
            </li>
          )
        })}
        <li
          className={clsx(styles.paginationItem, {
            [styles['disabled']]: currentPage === totalPages,
          })}
          onClick={() => nextPage()}
          onMouseEnter={() => prefetchPage(currentPage + 1)}
          onMouseDownCapture={() => prefetchPage(currentPage + 1)}
        >
          <span className={styles.arrow}>&#10095;</span>
        </li>
      </ul>
    </div>
  )
}

export { Pagination }
