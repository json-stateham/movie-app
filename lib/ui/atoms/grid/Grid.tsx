import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Grid.module.scss';

interface IProps {
  children: ReactNode;
  className?: string;
  cols: [number, number, number]; // mobile -> tablet -> laptop
  gap: [number, number, number];
}

const Grid: FC<IProps> = ({
  children,
  className: extraClassName,
  cols,
  gap,
}) => {
  return (
    <div
      className={clsx(styles.grid, extraClassName)}
      style={
        {
          '--cols-sm': cols[0],
          '--cols-md': cols[1],
          '--cols-lg': cols[2],
          '--gap-sm': `${gap[0]}px`,
          '--gap-md': `${gap[1]}px`,
          '--gap-lg': `${gap[2]}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

Grid.defaultProps = {
  cols: [2, 3, 5],
  gap: [16, 24, 32],
};

export { Grid };
