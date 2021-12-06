import { FC, ReactNode } from 'react'

import clsx from 'clsx'
import styles from './Button.module.scss'

type ButtonType = 'primary' | 'secondary'

interface IProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  variant?: ButtonType
}

const Button: FC<IProps> = ({
  children,
  className: additionalClassName,
  onClick,
  variant = 'primary',
}) => {
  return (
    <button
      className={clsx(
        { [styles[variant]]: variant, additionalClassName },
        styles.button,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export { Button }
