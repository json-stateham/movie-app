import { type ReactNode } from 'react';
import { Header } from './shared/header/Header';

interface Props {
  children: ReactNode;
}

export const AppShell = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <section>{children}</section>
    </div>
  );
};
