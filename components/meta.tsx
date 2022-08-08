import Head from 'next/head';

const Meta = () => (
  <Head>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Movie Application" />
    {/*</Head> <meta http-equiv="Content-Security-Policy" content="default-src https://api.themoviedb.org; child-src 'none'; object-src 'none'" /> */}
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link rel="preconnect" href="https://api.themoviedb.org" />
    <link rel="preconnect" href="https://image.tmdb.org" />
    <link
      href="https://fonts.googleapis.com/css2?family=Exo:wght@200;300;400;500;700&display=swap"
      rel="preload"
      as="style"
      /*eslint-disable */
      // @ts-ignore
      onLoad="this.rel='stylesheet'"
    />
  </Head>
);

export default Meta;
