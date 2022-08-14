import { getGenres, getMoviesList } from '../../api/movie';
import { IMainPageData } from 'types/common';

export const fetchMainPage = (): Promise<IMainPageData> =>
  Promise.all([
    getGenres(),
    getMoviesList('top_rated', 1),
    getMoviesList('popular', 1),
  ]).then(([{ genres }, { results: topMovies }, { results: trendMovies }]) => ({
    topMovies,
    trendMovies,
    genres,
  }));
