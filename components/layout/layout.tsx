import { ReactNode, FC } from 'react';
import Header from '../header/header';
import Meta from '../meta';

const Layout: FC<ReactNode> = ({ children }) => (
  <>
  <Meta />
  <Header />
  <main>{children}</main>
  </>
)

export default Layout;