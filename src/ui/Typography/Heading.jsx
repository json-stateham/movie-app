import { createElement } from 'react'
import clsx from 'clsx'
import styles from './Heading.module.scss'

const Heading = ({ children, size = 'h3', space = {}, upperCase }) =>
  ['h1', 'h2', 'h3', 'h4', 'h5'].map((heading) => {
    return (
      heading === size &&
      createElement(
        heading,
        {
          className: `${clsx({
            [styles[size]]: size,
            [styles.upper]: upperCase,
          })}`,
          style: { ...space },
        },
        [children]
      )
    )
  })

export { Heading }
