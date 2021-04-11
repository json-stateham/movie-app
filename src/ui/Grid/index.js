import PropTypes from 'prop-types'
import './style.scss'

export const Grid = ({ header, children }) => (
  <div className="wrapper">
    <h1>{header}</h1>
    <div className="content">
      {children}
    </div>
  </div>
)

Grid.propTypes = {
  header: PropTypes.string
}
