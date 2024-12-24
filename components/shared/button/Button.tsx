import { ReactNode } from 'react';

import clsx from 'clsx';
import styles from './Button.module.css';

type Props = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
};

export const Button = ({
  children,
  className = '',
  onClick,
  variant = 'primary',
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
