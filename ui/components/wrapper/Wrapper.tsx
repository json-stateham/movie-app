import { ReactNode } from 'react';
import cx from 'clsx';
import styles from './Wrapper.module.css';

interface Props {
  children: ReactNode;
  className?: string;
}

export const Wrapper = ({ children, className }: Props) => (
  <div className={cx(styles.wrapper, className)}>{children}</div>
);
