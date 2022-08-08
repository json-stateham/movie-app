import { AppProps } from 'next/app';
import '@/styles/index.scss';

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
