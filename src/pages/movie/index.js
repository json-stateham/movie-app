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
import { Grid, HeroBlock } from 'ui'
import { config, imagesSize } from 'config'
import NoImage from 'images/no_image.jpg'

export const Movie = () => {
  const { movieId } = useParams()
  useGate(moviesGate, movieId)
  const data = useStore($data)
  const isFetching = useStore($isFetching)

  console.log('data', data)
  console.log('isFetching', isFetching)

  const HeroImage = `${config.IMAGES_URL}${imagesSize.BACKDROP.w1280}${data.movie.backdrop_path}`

  return (
    <>
      <HeroBlock
        backdrop={{ backgroundImage: `url(${HeroImage})` }}
      >
        <p>sdfsdfs</p>
        <p>sdfsdfs</p>
        <p>sdfsdfs</p>
        <p>sdfsdfs</p>
        <p>sdfsdfs</p>
        <p>sdfsdfs</p>
        <p>sdfsdfs</p>
        <p>sdfsdfs</p>
        <p>sdfsdfs</p>
        <p>sdfsdfs</p>
        <p>sdfsdfs</p>
        <p>sdfsdfs</p>
        <p>sdfsdfs</p>
      </HeroBlock>
     
    </>
  )
}
