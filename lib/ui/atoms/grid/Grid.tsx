import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Grid.module.scss';

interface IProps {
  children: ReactNode;
  className?: string;
  cols: string;
  gap: string;
}

const Grid = ({ children, className: extraClassName, cols, gap }: IProps) => {
  const [colsSm, colsMd, colsLg] = cols.split('-');
  const [gapSm, gapMd, gapLg] = gap.split('-');

  return (
    <div
      className={clsx(styles.grid, extraClassName)}
      style={
        {
          '--cols-sm': colsSm,
          '--cols-md': colsMd,
          '--cols-lg': colsLg,
          '--gap-sm': `${gapSm}px`,
          '--gap-md': `${gapMd}px`,
          '--gap-lg': `${gapLg}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

Grid.defaultProps = {
  cols: '2-3-5', // mobile -> tablet -> laptop
  gap: '16-24-32',
};

export { Grid };
