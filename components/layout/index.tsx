import { ReactNode } from 'react';
import Header from '../header';
import Meta from '../meta';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <Meta />
    <Header />
    <main>{children}</main>
  </>
);

export default Layout;
