import { FC, ReactNode } from 'react';

import clsx from 'clsx';
import styles from './Button.module.scss';

type TVariant = 'primary' | 'secondary';

interface IProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: TVariant;
}

const Button: FC<IProps> = ({
  children,
  className,
  onClick,
  variant = 'primary',
}) => {
  return (
    <button
      className={clsx({ [styles[variant]]: variant }, styles.button, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
