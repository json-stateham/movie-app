import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import Layout from 'components/layout/layout';
import '@/styles/index.scss';

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default appWithTranslation(App);
