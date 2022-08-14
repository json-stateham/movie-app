import { FC } from 'react'
// import { useQuery } from 'react-query'
// import { useSearch, useNavigate } from 'react-location'
// import { Helmet } from 'react-helmet'
import { fetchMoviesList } from './model'
import { Grid, LoadingTape, Thumb } from 'lib/ui'
import { THUMB } from 'api/images/config'

// import type { TMovieCategory } from 'shared/api/apiConfig'

import NoImage from 'images/no_image.jpg'

const IMAGE_URL = process.env.NEXT_PUBLIC_BASE_URL

const MoviesCardsGrid: FC = () => {
  // const navigate = useNavigate<LocationGenerics>()
  // const { list, page } = useSearch<LocationGenerics>()

  // if (!page) {
  //   navigate({
  //     search: prev => ({
  //       ...prev,
  //       page: 1,
  //     }),
  //   })
  // }

  // const { isLoading, data } = useQuery(
  //   ['moviesList', page],
  //   () => fetchMoviesList(page, list as TListType),
  //   {
  //     keepPreviousData: true,
  //   },
  // )


  // const imageLinksPreload = data?.movies?.map(({ poster_path }) => ({
  //   href: `${IMAGE_URL}/${IMAGE_THUMB.L}${poster_path}`,
  //   rel: 'preload',
  //   as: 'image',
  // }))

  // const renderedMoviesCards = data?.movies?.map(
  //   ({ genre_ids, id, title, poster_path, release_date, vote_average }) => {
  //     const moviePoster = poster_path
  //       ? `${IMAGE_URL}/${IMAGE_THUMB.L}${poster_path}`
  //       : NoImage

  //     return <Thumb key={id} alt={title} image={moviePoster} />
  //   },
  // )

  // return isLoading ? (
  //   <LoadingTape />
  // ) : (
  //   <>
  //     <Grid>{renderedMoviesCards}</Grid>
  //   </>
  // )
  return <div>1</div>
}

export { MoviesCardsGrid }
