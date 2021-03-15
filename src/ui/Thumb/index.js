import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './style.scss'

export const Thumb = ({ image, movieId, title, alt, clickable, genres }) => {

  const renderPoster = clickable
    ? (
      <Link to={`/${movieId}`}>
        <img src={image} alt={alt} className="thumb-img" />
      </Link>
    ) : (
      <img src={image} alt={alt} className="thumb-img" />
    )

  return (
    <div className="thumb">
      {renderPoster}
      <h3>{title}</h3>
      <div>{genres}</div>
    </div>
  )
}

Thumb.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool
}
