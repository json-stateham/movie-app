import { FC, useEffect } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useStore } from 'effector-react'
import { $isAscending } from 'feature/pagination/model'
import { fetchMoviesList } from './model'
import { useCustomEventDetail } from 'shared/hooks/useCustomEventDetail'
import { Grid, LoadingTape, Thumb } from 'ui'
import { IMAGE_THUMB } from 'config/images'

import NoImage from 'shared/assets/images/no_image.jpg'

interface IProps {
  currentPage: number
}

const MoviesCardsGrid: FC<IProps> = ({ currentPage }) => {
  const isAscendingPage = useStore($isAscending)
  const totalPages = useCustomEventDetail('gotTotalPages')
  const prefetchCondition = isAscendingPage ? currentPage + 1 : currentPage - 1

  const queryClient = useQueryClient()

  const { isLoading, data } = useQuery(
    ['moviesList', currentPage],
    () => fetchMoviesList(currentPage),
    { keepPreviousData: true },
  )

  useEffect(() => {
    const prefetchSiblingPage = async () => {
      await queryClient.prefetchQuery(['moviesList', prefetchCondition], () =>
        fetchMoviesList(prefetchCondition),
      )
    }
    if (currentPage < totalPages && currentPage > 1) prefetchSiblingPage()
  }, [currentPage, totalPages])

  const renderedMoviesCards = data?.movies?.map(
    ({ genre_ids, id, title, poster_path, release_date, vote_average }) => {
      const moviePoster = poster_path
        ? `${import.meta.env.APP_IMAGE_URL}/${IMAGE_THUMB.L}${poster_path}`
        : NoImage

      return (
        <Thumb
          clickable
          key={id}
          alt={title}
          movieId={id}
          title={title}
          release={release_date}
          genres={genre_ids.join(', ')}
          rating={vote_average}
          image={moviePoster}
          isLazy
        />
      )
    },
  )

  return isLoading ? <LoadingTape /> : <Grid>{renderedMoviesCards}</Grid>
}

export { MoviesCardsGrid }
