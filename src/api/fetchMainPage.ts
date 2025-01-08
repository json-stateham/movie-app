import { getMovies } from 'api/movies';
import { IMainPageData } from 'types/common';

export const fetchMainPage = (): Promise<IMainPageData> =>
  Promise.allSettled([
    getMovies({ category: 'top_rated', page: 1 }),
    getMovies({ category: 'popular', page: 1 }),
  ])
    .then(result =>
      result.map(r => (r.status === 'fulfilled' ? r.value : { results: null })),
    )
    .then(([{ results: topMovies }, { results: trendMovies }]) => ({
      topMovies,
      trendMovies,
    }));
