import React from 'react'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

import { StyledNavigation } from '../styles/StyledNavigation'

export const Navigation = ({ movie }) => (
  <StyledNavigation>
    <div className='navigation-content'>
      <Link to='/'>
        <p>Home</p>
      </Link>
      <p aria-hidden='true'>|</p>
      <p>{movie}</p>
    </div>
  </StyledNavigation>
)

Navigation.propTypes = {
  movie: PropTypes.string
}
