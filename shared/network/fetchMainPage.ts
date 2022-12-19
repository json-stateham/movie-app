import { getGenres, getMovies } from 'api/movies';
import { jsonFetch } from "shared/network/fetchClient";
import { IMainPageData } from 'types/common';

export const fetchMainPage = (): Promise<IMainPageData> =>
  Promise.all([
    getGenres(),
    getMovies('top_rated', 1),
    getMovies('popular', 1),
  ]).then(([{ genres }, { results: topMovies }, { results: trendMovies }]) => ({
    topMovies,
    trendMovies,
    genres,
  }));
