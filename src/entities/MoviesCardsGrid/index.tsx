import { FC, useEffect } from 'react'
import { useQuery } from 'react-query'
import { fetchMoviesList } from './model'
import { Grid, LoadingTape, Thumb } from 'ui'
import { IMAGE_THUMB } from 'config/images'

import NoImage from 'shared/assets/images/no_image.jpg'

interface IProps {
  currentPage: number
}

const MoviesCardsGrid: FC<IProps> = ({ currentPage }) => {
  const { isLoading, error, data } = useQuery(
    ['moviesList', currentPage],
    () => fetchMoviesList(currentPage),
    {
      keepPreviousData: true,
    },
  )

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
