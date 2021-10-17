import { createElement, FC, ReactElement, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Heading.module.scss'

type TSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

interface IProps {
  children: ReactNode
  size: TSize
  space?: Record<string, string>
  upperCase?: boolean
}

const Heading: FC<IProps> = ({
  children,
  size = 'h3',
  space = {},
  upperCase,
}): any =>
  ['h1', 'h2', 'h3', 'h4', 'h5'].map((heading, i) => {
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
          key: i,
        },
        [children]
      )
    )
  })

export { Heading }
