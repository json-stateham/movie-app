import React from 'react';
import PropTypes from 'prop-types';
// Styles
import './grid.scss'

const Grid = ({ header, children }) => (
  <div className="wrapper">
    <h1>{header}</h1>
    <div className="content">{children}</div>
  </div>
);

Grid.propTypes = {
  header: PropTypes.string
};

export default Grid;
