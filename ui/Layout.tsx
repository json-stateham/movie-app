import { ReactElement } from 'react';
import { Exo } from '@next/font/google';
import { Header } from 'ui/widgets';

interface Props {
  children: ReactElement;
}

const exoFont = Exo({
  weight: ['400', '500'],
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
