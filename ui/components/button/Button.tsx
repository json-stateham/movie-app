import { ReactElement } from 'react';

import clsx from 'clsx';
import styles from './Button.module.scss';

interface Props {
  children: ReactElement;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'unstyled';
  type?: 'button' | 'submit';
}

export const Button = ({
  children,
  className = '',
  onClick,
  variant = 'unstyled',
  type = 'button',
}: Props) => (
  <button
    type={type}
    className={clsx(styles.button, className, styles?.[variant] || '')}
    onClick={onClick}
  >
    {children}
  </button>
);
