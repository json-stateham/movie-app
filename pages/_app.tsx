import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import Layout from 'components/layout/layout';
import { ErrorBoundary } from 'entities/ErrorBoundary';
import 'styles/index.scss';

const App = ({ Component, pageProps }: AppProps) => (
  <ErrorBoundary>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ErrorBoundary>
);

export default appWithTranslation(App);
