import { Link } from 'react-location'
import { Text } from 'ui'
import { convertDateFormat } from 'shared/lib/convertDateFormat'

import styles from './Thumb.module.scss'

interface IProps {
  image: string
  movieId: number
  title: string
  release: string
  alt: string
  clickable: boolean
  genres?: string
  rating: number
  isLazy: boolean
}

const Thumb = ({
  image,
  movieId,
  title,
  release,
  alt,
  clickable,
  genres,
  rating,
  isLazy,
}: IProps) => {
  const renderPoster = clickable ? (
    <Link to={`movie/${movieId}`}>
      <img src={image} alt={alt} width={342} height={512} />
    </Link>
  ) : (
    <img src={image} alt={alt} width={342} height={512} />
  )

  const renderReleaseDate = release ? convertDateFormat(release) : ''

  return (
    <div className={styles.thumb}>
      <div className={styles.imageWrapper}>
        <div className={styles.image}>{renderPoster}</div>
        <div className={styles.rating}>{rating > 0 ? rating : '-'}</div>
      </div>
      <div className={styles.movieInfo}>
        <Text className={styles.movieTitle} tag="h3">
          <Link to={`movie/${movieId}`}>{title}</Link>
        </Text>
        <Text className={styles.genres} tag="p">
          {genres}
        </Text>
        <time dateTime={release}>
          <Text className={styles.releaseDate} tag="p">
            {renderReleaseDate}
          </Text>
        </time>
      </div>
    </div>
  )
}

export { Thumb }
