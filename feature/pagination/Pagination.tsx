import { FC, useState } from 'react'
import { useQueryClient } from 'react-query'
// import { useNavigate, useSearch } from 'react-location'
import { usePagination, DOTS } from './usePagination'
// import { fetchMoviesList } from 'entities/MoviesCardsGrid/model'
import { Text } from 'lib/ui'

import type { IPagination } from './types'
// import type { LocationGenerics } from 'app/Routes'
// import type { TMovieCategory } from 'lib/network/apiConfig'

import clsx from 'clsx'
import styles from './Pagination.module.scss'

const Pagination: FC<IPagination> = ({
  currentPage,
  totalPages,
  siblingCount = 1,
}) => {
  // const [isAscending, setIsAscending] = useState(true)
  // // const { list } = useSearch<LocationGenerics>()
  // const list = 'top_rated';
  // // const navigate = useNavigate<LocationGenerics>()

  // const queryClient = useQueryClient()

  // // const prefetchPage = async (pageParam: number) => {
  // //   await queryClient.prefetchQuery(['moviesList', pageParam], () =>
  // //     fetchMoviesList(pageParam, list as TMovieCategory),
  // //   )
  // // }

  // const paginationRange = usePagination({
  //   currentPage,
  //   totalPages,
  //   siblingCount,
  // }) as number[]

  // const nextPage = () => {
  //   // navigate({
  //   //   search: prev => ({
  //   //     ...prev,
  //   //     page: prev?.page && prev.page + 1,
  //   //   }),
  //   // })
  //   setIsAscending(() => true)
  // }

  // const prevPage = () => {
  //   // navigate({
  //   //   search: prev => ({
  //   //     ...prev,
  //   //     page: prev?.page && prev.page - 1,
  //   //   }),
  //   // })
  //   setIsAscending(() => false)
  // }

  // const concretePage = (pageNumber: number) => {
  //   // navigate({
  //   //   search: prev => ({
  //   //     ...prev,
  //   //     page: pageNumber,
  //   //   }),
  //   // })
  //   if (currentPage && currentPage < pageNumber) {
  //     setIsAscending(() => true)
  //   } else {
  //     setIsAscending(() => false)
  //   }
  // }

  // if (currentPage === 0 || paginationRange?.length < 2) {
  //   return null
  // }

  // return (
  //   <div className={styles.paginationWrapper}>
  //     <div className={styles.pagination} role="navigation">
  //       <button
  //         aria-label="Previous Page"
  //         className={clsx(styles.paginationItem, {
  //           [styles['disabled']]: currentPage === 1,
  //         })}
  //         onClick={prevPage}
  //         onMouseEnter={() => prefetchPage(currentPage - 1)}
  //         onMouseDown={() => prefetchPage(currentPage - 1)}
  //       >
  //         <span className={styles.arrow}>&#10094;</span>
  //       </button>
  //       {paginationRange?.map((pageNumber: number, idx) => {
  //         if (pageNumber === DOTS) {
  //           return (
  //             <span
  //               aria-hidden
  //               key={`pagination-${idx}`}
  //               className={clsx(styles.paginationItem, styles.dots)}
  //             >
  //               ...
  //             </span>
  //           )
  //         }

  //         return (
  //           <button
  //             aria-label={`Page ${pageNumber}`}
  //             key={`pagination-${idx}`}
  //             className={clsx(styles.paginationItem, {
  //               [styles['paginationForward']]:
  //                 pageNumber > 1 && pageNumber < totalPages && isAscending,
  //               [styles['paginationBackward']]:
  //                 pageNumber > 1 && pageNumber < totalPages && !isAscending,
  //               [styles['selected']]: pageNumber === currentPage,
  //             })}
  //             onClick={() => concretePage(pageNumber)}
  //             onMouseEnter={() => prefetchPage(pageNumber)}
  //           >
  //             <Text tag="span">{pageNumber}</Text>
  //           </button>
  //         )
  //       })}
  //       <button
  //         aria-label="Next Page"
  //         className={clsx(styles.paginationItem, {
  //           [styles['disabled']]: currentPage === totalPages,
  //         })}
  //         onClick={nextPage}
  //         onMouseEnter={() => prefetchPage(currentPage + 1)}
  //         onMouseDown={() => prefetchPage(currentPage + 1)}
  //       >
  //         <span className={styles.arrow}>&#10095;</span>
  //       </button>
  //     </div>
  //   </div>
  // )
  return <div>1</div>
}

export { Pagination }
