import { Link } from 'react-router-dom'
import { convertDateFormat } from '../../lib/convertDateFormat'
import styles from './Thumb.module.scss'

export const Thumb = ({
  image,
  movieId,
  title,
  release,
  alt,
  clickable,
  genres,
  rating
}) => {
  const renderPoster = clickable
    ? (
      <Link to={`/${movieId}`}>
        <img src={image} alt={alt} className={styles.thumbImg} />
      </Link>
    ) : (
      <img src={image} alt={alt} className={styles.thumbImg} />
    )

  const renderReleaseDate = release ? convertDateFormat(release) : ''

  return (
    <div className={styles.thumb}>
      <div className={styles.thumbImgWrapper}>
        <div className={styles.imgOverflowHidden}>
          {renderPoster}
        </div>
        <div className={styles.rating}>{rating}</div>
      </div>
      <h3>{title}</h3>
      <div>Genres: {genres}</div>
      <time dateTime={release}>
        Release: {renderReleaseDate || 'N/A'}
      </time>
    </div>
  )
}
