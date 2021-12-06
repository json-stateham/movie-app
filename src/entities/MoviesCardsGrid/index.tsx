import { FC } from 'react'
import { useQuery } from 'react-query'
import { Helmet } from 'react-helmet'
import { fetchMoviesList } from './model'
import { Grid, LoadingTape, Thumb } from 'shared/ui'
import { IMAGE_THUMB } from 'shared/config/images'

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

  const IMAGE_URL = import.meta.env.APP_IMAGE_URL

  const imageLinksPreload = data?.movies?.map(({ poster_path }) => ({
    href: `${IMAGE_URL}/${IMAGE_THUMB.L}${poster_path}`,
    rel: 'preload',
    as: 'image',
  }))

  const renderedMoviesCards = data?.movies?.map(
    ({ genre_ids, id, title, poster_path, release_date, vote_average }) => {
      const moviePoster = poster_path
        ? `${IMAGE_URL}/${IMAGE_THUMB.L}${poster_path}`
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

  return isLoading ? (
    <LoadingTape />
  ) : (
    <>
      <Helmet link={imageLinksPreload} />
      <Grid>{renderedMoviesCards}</Grid>
    </>
  )
}

export { MoviesCardsGrid }
