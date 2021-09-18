import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useStore, useGate } from 'effector-react'
import { moviesGate, $data, $isFetching } from './model'
import {
  API_URL,
  API_KEY,
  POPULAR_BASE_URL,
  MOVIE_THUMB_SIZE,
  MOVIE_HERO_THUMB_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL
} from 'config'
import { YoutubeVideo } from 'entities/YoutubeVideo'
import { Grid, HeroBlock, Heading, Paragraph, LoadingTape, Separator } from 'ui'
import { config, imagesSize } from 'config'
import { convertMoney } from 'lib/helpers'
import NoImage from 'images/no_image.jpg'

import styles from './movie.module.scss'
import React from 'react'

export const Movie = () => {
  const { movieId } = useParams()
  useGate(moviesGate, movieId)
  const data = useStore($data)
  const { movie, images, videos } = useStore($data)
  const isFetching = useStore($isFetching)
  const ref = useRef()

  console.log('data', data)
  console.log('movie', movie)
  console.log(ref.current);


  const HeroImage = `${config.IMAGES_URL}${imagesSize.BACKDROP.w1280}${movie.backdrop_path}`
  const trailer = videos?.filter(el => el.type === 'Trailer')[0]

  // const HeroImage = `${config.IMAGES_URL}${imagesSize.BACKDROP.w1280}${images.posters[6].file_path}`

  const renderedGenres = movie?.genres?.map(({ id, name }, idx, self) => {
    return (
      <React.Fragment key={id}>
        <Heading variant="h3">{name}</Heading>
        {idx !== self.length - 1 && <Separator>&#9898;</Separator>}
      </React.Fragment>
    )
  })

  if (isFetching) <LoadingTape />

  return (
    <>
      {isFetching ?
        <LoadingTape /> :
        <div className={styles.wrapper} style={{ backgroundImage: `url(${HeroImage})` }}>
          <div className={styles.rowHalf}>
            {trailer && <YoutubeVideo refObj={ref} embedId={trailer?.key} title={trailer?.name} />}
            <div className={styles.content}>
              <Heading size="h1">{movie.title}</Heading>
              <div className={styles.genres}>{renderedGenres}</div>
              <Paragraph>{movie.overview}</Paragraph>
            </div>
          </div>
        </div>
      }
    </>
  )
}
