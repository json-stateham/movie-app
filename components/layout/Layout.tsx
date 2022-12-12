import { ReactElement } from 'react';
import { Exo } from '@next/font/google';
import { Header } from 'components';

interface Props {
  children: ReactElement;
}

const exoFont = Exo({
  weight: ['300', '400', '500', '900'],
  subsets: ['latin'],
});

export const Layout = ({ children }: Props) => {
  return (
    <div className={exoFont.className}>
      <Header />
      <section>{children}</section>
    </div>
  );
}
