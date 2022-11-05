import { Header } from '@/components/header';
import { Exo } from '@next/font/google';
import '@/styles/main.scss'

interface Props {
  children: React.ReactNode;
}

const exoFont = Exo({
  weight: ['300', '400', '500', '900'],
  subsets: ['latin']
});

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={exoFont.className}>
      <head>
      </head>
      <body>
        <Header />
        <section>{children}</section>
      </body>
    </html>
  );
}
