import { Link } from 'react-router-dom'
import { LazyImage } from 'entities/LazyImage/LazyImage'
import { convertDateFormat } from 'lib/convertDateFormat'
import styles from './Thumb.module.scss'

interface IProps {
  image: string
  movieId: number
  title: string
  release: string
  alt: string
  clickable: boolean
  genres: string[]
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
    <Link to={`/${movieId}`}>
      <div className={styles.thumbImg}>
        <img
          src={image}
          alt={alt}
          width={280}
          height={326}
          loading={isLazy ? 'lazy' : 'eager'}
        />
      </div>
    </Link>
  ) : (
    <div className={styles.thumbImg}>
      <img
        src={image}
        alt={alt}
        width={280}
        height={326}
        loading={isLazy ? 'lazy' : 'eager'}
      />
    </div>
  )

  const renderReleaseDate = release ? convertDateFormat(release) : ''

  return (
    <div className={styles.thumb}>
      <div className={styles.thumbImgWrapper}>
        <div className={styles.imgOverflowHidden}>{renderPoster}</div>
        <div className={styles.rating}>{rating > 0 ? rating : 'N/A'}</div>
      </div>
      <h3>{title}</h3>
      <div>{genres}</div>
      <time dateTime={release}>{renderReleaseDate || 'N/A'}</time>
    </div>
  )
}

export { Thumb }
