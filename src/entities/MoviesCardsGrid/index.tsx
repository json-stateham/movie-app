import { FC } from 'react'
import { useQuery } from 'react-query'
import { useSearch, useNavigate } from 'react-location'
import { Helmet } from 'react-helmet'
import { fetchMoviesList } from './model'
import { Grid, LoadingTape, Thumb } from 'shared/ui'
import { IMAGE_THUMB } from 'shared/config/images'

import type { LocationGenerics } from 'app/Routes'
import type { TListType } from 'shared/api/apiConfig'

import NoImage from 'shared/assets/images/no_image.jpg'

const MoviesCardsGrid: FC = () => {
  const navigate = useNavigate<LocationGenerics>()
  const { list, page } = useSearch<LocationGenerics>()

  if (!page) {
    navigate({
      search: prev => ({
        ...prev,
        page: 1,
      }),
    })
  }

  const { isLoading, data } = useQuery(
    ['moviesList', page],
    () => fetchMoviesList(page, list as TListType),
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

      return <Thumb key={id} alt={title} image={moviePoster} />
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
