import { useMatch, Link } from 'react-location'
import { Helmet } from 'react-helmet'
import { Grid } from 'shared/ui'
import { Thumb } from 'shared/ui'
import { Text } from 'shared/ui'
import { Content } from 'shared/ui/layout/Content'
import { IMAGE_THUMB } from 'shared/config/images'

import type { LocationGenerics } from 'app/Routes'
import type { IMoviesItem } from 'types/common'

const Main = () => {
  const {
    data: { main },
    isLoading,
    error,
  } = useMatch<LocationGenerics>()

  const IMAGE_URL = import.meta.env.APP_IMAGE_URL

  const preloadImages = main?.topMovies.slice(0, 5).map(({ poster_path }) => ({
    href: `${IMAGE_URL}${IMAGE_THUMB.L}${poster_path}`,
    rel: 'preload',
    as: 'image',
  }))

  const renderCards = (data: IMoviesItem[] | undefined) =>
    data?.slice(0, 5).map(({ id, title, poster_path }) => (
      <Link key={id} to={`/movie/${id}`}>
        <Thumb alt={title} image={poster_path} />
      </Link>
    ))

  const topMoviesCards = renderCards(main?.topMovies)
  const trendMoviesCards = renderCards(main?.trendMovies)

  return (
    <>
      <Helmet link={preloadImages} />
      <Content>
        <Link to="movies" search={{ list: 'top_rated', page: 1 }}>
          <Text tag="h2">Top Rated Moviez</Text>
        </Link>
        <Grid cols={{ sm: 2, md: 3, lg: 5 }}>{topMoviesCards}</Grid>
        <Link to="movies" search={{ list: 'popular', page: 1 }}>
          <Text tag="h2">Trending Moviez</Text>
        </Link>
        <Grid cols={{ sm: 2, md: 3, lg: 5 }}>{trendMoviesCards}</Grid>
      </Content>
    </>
  )
}

export { Main }
