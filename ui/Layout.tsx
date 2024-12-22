import { type ReactNode } from 'react';

import { Header } from 'ui/widgets';

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <section>{children}</section>
    </div>
  );
};
