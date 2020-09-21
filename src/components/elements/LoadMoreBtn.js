import React from 'react'
import PropTypes from 'prop-types'

import { StyledLoadMoreBtn } from '../styles/StyledLoadMoreBtn'

export const LoadMoreBtn = ({ text, callback }) => (
  <StyledLoadMoreBtn type='button' onClick={callback}>
    {text}
  </StyledLoadMoreBtn>
)

LoadMoreBtn.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func
}
