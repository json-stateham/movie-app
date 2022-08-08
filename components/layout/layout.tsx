import { ReactNode, FC } from 'react';
import Header from '../header/header';
import styles from './layout.module.scss';
import Meta from '../meta';

const Layout: FC<ReactNode> = ({ children }) => (
  <>
  <Meta />
  <Header />
  <main className={styles.content}>{children}</main>
  </>
)

export default Layout;