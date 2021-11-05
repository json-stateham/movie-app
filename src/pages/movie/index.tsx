import { useParams } from 'react-router-dom'
import { useStore, useGate } from 'effector-react'
import { moviesGate, $data, $isFetching } from './model'
import { YoutubeVideo } from 'entities/YoutubeVideo'
import { Heading, Paragraph, LoadingTape, Separator } from 'ui'
import { API_CONFIG, IMAGE_BACKDROP, IMAGE_THUMB } from 'config'
import { convertMoney } from 'shared/lib/helpers'
import NoImage from 'images/no_image.jpg'

import { IGenres } from 'types/common'

import styles from './movie.module.scss'

export const Movie = () => {
  const { movieId } = useParams<{ movieId: string }>()
  useGate(moviesGate, movieId)
  const data = useStore($data)
  const { movie, images, videos } = useStore($data)
  const isFetching = useStore($isFetching)

  const HeroImage = `${import.meta.env.APP_IMAGES_URL}${IMAGE_BACKDROP.L}${
    movie.backdrop_path
  }`
  const trailer = videos?.filter(
    ({ type }: { type: string }) => type === 'Trailer',
  )[0]

  // const HeroImage = `${config.IMAGES_URL}${imagesSize.BACKDROP.w1280}${images.posters[6].file_path}`

  const renderedGenres = movie?.genres.map(
    ({ id, name }: IGenres, idx: number, self: IGenres[]) => {
      return (
        <span key={id}>
          <Heading size="h3">{name}</Heading>
          {idx !== self.length - 1 && <Separator>&#9898;</Separator>}
        </span>
      )
    },
  )

  if (isFetching) <LoadingTape />

  return (
    <>
      {isFetching ? (
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
              <Heading size="h1">{movie.title}</Heading>
              <div className={styles.genres}>{renderedGenres}</div>
              <Paragraph>{movie.overview}</Paragraph>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
