import { FC, createElement, memo, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Text.module.scss'

type TextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span'

interface IProps {
  children: ReactNode
  className?: string
  tag?: TextTag
}

const Text: FC<IProps> = memo(
  ({ children, className: extraClassName, tag = 'p' }) => {
    return createElement(
      tag,
      {
        className: clsx(
          {
            [styles[tag]]: tag,
          },
          extraClassName,
        ),
      },
      [children],
    )
  },
)

export { Text }
