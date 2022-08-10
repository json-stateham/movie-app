import { AppProps } from 'next/app';
import Layout from 'components/layout/layout';
import '@/styles/index.scss';

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
