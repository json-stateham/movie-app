import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Grid.module.scss';

interface IProps {
  children: ReactNode;
  className?: string;
  cols?: {
    sm?: number;
    md?: number;
    lg?: number;
  };
  gap?: {
    from?: number;
    to?: number;
  };
}

const Grid: FC<IProps> = ({ children, className: extraClassName, cols, gap }) => {
  return (
    <div
      className={clsx(
        styles.grid,
        extraClassName,
        styles[`cols-sm-${cols?.sm}`],
        styles[`cols-md-${cols?.md}`],
        styles[`cols-lg-${cols?.lg}`],
      )}
      style={{
        gap: `min(${gap?.from}px, ${gap?.to}px)`,
      }}
    >
      {children}
    </div>
  );
};

Grid.defaultProps = {
  cols: {
    sm: 2,
    md: 3,
    lg: 5,
  },
  gap: {
    from: 16,
    to: 32,
  },
};

export { Grid };
