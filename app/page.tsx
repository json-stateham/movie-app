import { fetchMainPage } from 'api/fetchMainPage';
import { getMovieDetails } from 'api/movies';
import type { Metadata, Viewport } from 'next';
import type { IMovieDetails, IMoviesItem } from 'types/common';
import HomePage from './home-page';
import { PreloadResources } from './preload-resources';

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
      trendMovies.map(movie => getMovieDetails(movie.id)),
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
  const { topMovies, trendMovies } = await getMovies();

  return (
    <>
      <HomePage topMovies={topMovies} trendMovies={trendMovies} />;
      <PreloadResources />
    </>
  );
}
