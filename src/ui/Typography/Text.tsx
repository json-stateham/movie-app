import { FC, createElement, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Text.module.scss'

type TextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span'

interface IProps {
  children: ReactNode
  className?: string
  tag?: TextTag
  sizes?: any
  mobileFontSize?: number
  desktopFontSize?: number
}

const Text: FC<IProps> = ({
  children,
  className: additionalClassName,
  tag = 'p',
}) => {
  return createElement(
    tag,
    {
      className: clsx(
        {
          [styles[tag]]: tag,
        },
        additionalClassName,
      ),
    },
    [children],
  )
}

export { Text }
