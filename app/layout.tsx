import type { ReactNode } from 'react';
import { Layout } from 'ui/Layout';
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

  return (
    <html lang={lang} className={exoFont.className}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
