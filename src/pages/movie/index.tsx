import { useMatch } from 'react-location'
import { Helmet } from 'react-helmet'
import { YoutubeVideo } from 'entities/YoutubeVideo'
import { Text, LoadingTape, Separator } from 'shared/ui'
import { IMAGE_BACKDROP } from 'shared/config/images'

import { IMovieDetailsVideos, IGenres, IMovieCast } from 'types/common'
import type { LocationGenerics } from 'app/Routes'

import styles from './movie.module.scss'

const Movie = () => {
  const {
    data: { movie },
    isLoading,
  } = useMatch<LocationGenerics>()

  const { results } = movie?.videos as IMovieDetailsVideos

  const HeroImage = `${import.meta.env.APP_IMAGE_URL}/${IMAGE_BACKDROP.L}${
    movie?.backdrop_path
  }`

  console.log(movie)
  const trailer = results?.filter(
    ({ type }: { type: string }) => type === 'Trailer',
  )[0]

  const renderedGenres = movie?.genres.map(
    ({ id, name }: IGenres, idx: number, self: IGenres[]) => {
      return (
        <span className={styles.genreItem} key={id}>
          <Text tag="h3">{name}</Text>
          {idx !== self.length - 1 && <Separator>&#9898;</Separator>}
        </span>
      )
    },
  )

  const renderedCast = movie?.credits?.cast.map((item: IMovieCast) => {})

  const SEO = () => (
    <Helmet
      defaultTitle="Moviez Rules"
      titleTemplate="Moviez Rules - %s"
      title={movie?.title}
      meta={[{ name: 'description', content: `${movie?.overview}` }]}
      link={[
        { rel: 'preconnect', href: 'https://i.ytimg.com' },
        { rel: 'preconnect', href: 'https://www.youtube.com' },
        { rel: 'preload', as: 'image', href: `${HeroImage}` },
      ]}
    />
  )

  return (
    <>
      {SEO()}
      {isLoading ? (
        <LoadingTape />
      ) : (
        <div
          className={styles.wrapper}
          style={{ backgroundImage: `url(${HeroImage})` }}
        >
          <div className={styles.rowHalf}>
            {trailer && (
              <YoutubeVideo embedId={trailer?.key} title={trailer?.name} />
            )}
            <div className={styles.content}>
              <Text tag="h1">{movie?.title}</Text>
              <div className={styles.genres}>{renderedGenres}</div>
              <Text>{movie?.overview}</Text>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Movie
