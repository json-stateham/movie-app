import type { ReactNode } from 'react';
import { Layout } from 'ui/Layout';
import 'styles/index.scss';
import { Exo } from 'next/font/google';

type Props = {
  children: ReactNode;
};

const exoFont = Exo({
  weight: ['400', '500'],
  subsets: ['latin'],
});

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={exoFont.className}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
