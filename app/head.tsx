export default async function Head() {
  return (
    <>
      <title>The Movie App</title>
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
    </>
  );
}
