import type { ReactNode } from 'react';
import { AppShell } from 'components/AppShell';
import 'styles/index.css';
import { Exo } from 'next/font/google';
import useTranslation from 'next-translate/useTranslation';

type Props = {
  children: ReactNode;
};

const exoFont = Exo({
  weight: ['400', '500'],
  subsets: ['latin'],
});

export default function RootLayout({ children }: Props) {
  const { lang } = useTranslation();

  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang={lang} className={exoFont.className}>
      {isDev && (
        <script src="https://unpkg.com/react-scan/dist/auto.global.js" async />
      )}
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
