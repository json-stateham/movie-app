import { ReactNode, FC } from 'react';
import styles from './wrapper.module.scss';

export const Wrapper: FC<ReactNode> = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
)
