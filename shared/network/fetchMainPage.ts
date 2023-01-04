import { getMovies } from 'api/movies';
import { IMainPageData } from 'types/common';

export const fetchMainPage = (): Promise<IMainPageData> =>
  Promise.allSettled([
    getMovies('top_rated', 1),
    getMovies('popular', 1),
  ]).then(result => result.map(r => r.status === 'fulfilled' ? r.value : { results: null }))
    .then(([{ results: topMovies }, { results: trendMovies }]) => ({
      topMovies,
      trendMovies
    }));
