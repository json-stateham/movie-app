import type { ReactNode } from 'react';
import 'shared/styles/index.css';
import { Exo } from 'next/font/google';
import useTranslation from 'next-translate/useTranslation';

import type { Metadata, Viewport } from 'next';
import { Header } from 'shared/ui/header/Header';

type Props = {
  children: ReactNode;
};

const exoFont = Exo({
  weight: ['400', '500'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Movie App',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: 'black',
};

export default function RootLayout({ children }: Props) {
  const { lang } = useTranslation();

  return (
    <html lang={lang} className={exoFont.className}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
