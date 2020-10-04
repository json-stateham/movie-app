import React from 'react'
import PropTypes from 'prop-types'
import { StyledHeroImage } from '../styles/StyledHeroImage'

export const HeroImage = ({ image, title, text }) => (
  <StyledHeroImage image={image}>
    <div className='heroimage-content'>
      <div className='heroimage-text'>
        <h1 className='movie-title'>{title}</h1>
        <p className='movie-descr'>{text}</p>
      </div>
    </div>
  </StyledHeroImage>
)

HeroImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
}
