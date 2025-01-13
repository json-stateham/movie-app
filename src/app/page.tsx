import { fetchMainPage } from 'api/fetchMainPage';
import { getMovieDetails } from 'api/movies';
import type { MoviesItem } from 'types/common';
import { HomePage } from 'components/pages/home/home-page';
import { PreloadResources } from './preload-resources';

async function getMovies() {
  const result = await fetchMainPage();

  if (result.trendMovies) {
    const movieDetails = await Promise.allSettled(
      result.trendMovies.map(movie => getMovieDetails(movie.id)),
    );

    result.trendTrailers = result.trendMovies.flatMap(
      (movie: MoviesItem, index: number) => {
        const movieDetailsItem = movieDetails[index];
        if (movieDetailsItem.status !== 'fulfilled') return [];

        movie.trailers = movieDetailsItem?.value?.videos?.results?.filter(
          ({ type }) => type === 'Trailer',
        );

        return movie;
      },
    );
  }

  return result;
}

export default async function Page() {
  const { topMovies, trendMovies, trendTrailers } = await getMovies();

  return (
    <>
      <HomePage
        topMovies={topMovies}
        trendMovies={trendMovies}
        trendTrailers={trendTrailers}
      />
      <PreloadResources />
    </>
  );
}
