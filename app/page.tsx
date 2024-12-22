import { fetchMainPage } from '@/lib/network/fetchMainPage';
import { getMovieDetails } from 'api/movies';
import type { Metadata, Viewport } from 'next';
import type { IMovieDetails, IMoviesItem } from 'types/common';
import HomePage from './home-page';

export const metadata: Metadata = {
  title: 'Movie App',
  other: {
    charset: 'utf-8',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: 'black',
};

async function getMovies() {
  const { topMovies, trendMovies } = await fetchMainPage();

  if (trendMovies) {
    const movieDetails = await Promise.allSettled(
      trendMovies.map(movie => getMovieDetails(String(movie.id))),
    );

    trendMovies.forEach((movie: IMoviesItem, i) => {
      if (movieDetails[i].status === 'fulfilled') {
        const { value } = movieDetails[
          i
        ] as PromiseFulfilledResult<IMovieDetails>;

        movie.trailers = value?.videos?.results?.filter(
          ({ type }) => type === 'Trailer',
        );
      }
    });
  }
  return {
    topMovies,
    trendMovies,
  };
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const { topMovies, trendMovies } = await getMovies();
  // Forward fetched data to your Client Component
  return <HomePage topMovies={topMovies} trendMovies={trendMovies} />;
}

// <Head>
//   <title></title>
//   <meta charSet="utf-8" />
//   <meta name="theme-color" content="#000000" />
//   <meta name="description" content="Movie Application" />
//   <meta name="format-detection" content="telephone=no" />
//   {/* <meta http-equiv="Content-Security-Policy" content="default-src https://api.themoviedb.org; child-src 'none'; object-src 'none'" /> */}
//   <link rel="preconnect" href="https://fonts.gstatic.com" />
//   <link rel="preconnect" href="https://api.themoviedb.org" />
//   <link rel="preconnect" href="https://image.tmdb.org" />
// </Head>;
