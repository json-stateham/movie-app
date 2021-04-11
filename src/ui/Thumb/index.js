import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { convertDateFormat } from '../../lib/convertDateFormat'
import './style.scss'

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

        <img src={image} alt={alt} className="thumb-img" />

      </Link>
    ) : (
      <img src={image} alt={alt} className="thumb-img" />
    )
  
  const renderReleaseDate = release ? convertDateFormat(release) : ''

  return (
    <div className="thumb">
      <div className="thumb-img-wrapper">
        {renderPoster}
        <div className="rating">{rating}</div>
      </div>
      <h3>{title}</h3>
      <div>{genres}</div>
      <time dateTime={release}>
        {renderReleaseDate}
      </time>
    </div>
  )
}

Thumb.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  movieId: PropTypes.number,
  release: PropTypes.string,
  clickable: PropTypes.bool,
  rating: PropTypes.number
}
