import { GENRES_URL, makeMoviesListURL } from './apiConfig';
import { jsonFetch } from './fetchClient';
import { IMainPageData } from 'types/common';

export const fetchMainPage = (): Promise<IMainPageData> =>
  Promise.all([
    jsonFetch(GENRES_URL),
    jsonFetch(makeMoviesListURL('top_rated', 1)),
    jsonFetch(makeMoviesListURL('popular', 1)),
  ]).then(([{ genres }, { results: topMovies }, { results: trendMovies }]) => ({
    topMovies,
    trendMovies,
    genres,
  }));
