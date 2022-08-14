import { jsonFetch } from 'lib/network/fetchClient';
import { UrlBuilder } from 'lib/network/urlBuilder';
import { API_CONFIG } from './config';
import type { TMovieCategory, TParams } from './types';

const BASE_MOVIE_URL = new UrlBuilder(API_CONFIG.URL);

BASE_MOVIE_URL.addParams({
  ...API_CONFIG.PARAMS,
});

export const getMovieDetails = (
  movieId: string,
  params: Partial<TParams> = {},
) => {
  const reqUrl = BASE_MOVIE_URL.clone()
    .addPath('movie', movieId)
    .addParams({ ...API_CONFIG.APPEND_MOVIE_DETAILS, ...params });
  return jsonFetch(reqUrl.href);
};

export const getMoviesList = (movieCategory: TMovieCategory, page: number) => {
  const reqUrl = BASE_MOVIE_URL.clone()
    .addPath('movie', movieCategory)
    .addParams({ page: String(page) });
  return jsonFetch(reqUrl.href);
};

export const getGenres = () => {
  const reqUrl = BASE_MOVIE_URL.clone()
    .addPath('genre', 'movie', 'list');
  return jsonFetch(reqUrl.href);
};

// export const discoverMovies = () =>
// makePath('discover', 'movie') + makeParams({ page: '500', sort_by: 'release_date.desc' });
