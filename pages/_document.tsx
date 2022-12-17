import { Html, Head, Main, NextScript } from 'next/document';
import { MetaTags } from 'ui/components/MetaTags';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <MetaTags />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
