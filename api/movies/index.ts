import { jsonFetch } from 'shared/network/fetchClient';
import { UrlBuilder } from 'shared/network/urlBuilder';
import { API_CONFIG } from './config';
import type { TMovieCategory, TParams } from './types';

const BASE_MOVIE_URL = new UrlBuilder(API_CONFIG.URL).addParams({
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

export const getMovies = (movieCategory: TMovieCategory, page: number) => {
  const url = BASE_MOVIE_URL.clone()
    .addPath('movie', movieCategory)
    .addParams({
      page: String(page),
      // with_genres: 12
    }).href;

  return jsonFetch(url);
};

export const getGenres = () => {
  const reqUrl =
    BASE_MOVIE_URL
      .clone()
      .addPath('genre', 'movie', 'list');

  return jsonFetch(reqUrl.href);
};

export const discoverMovies = (page: number) =>
  BASE_MOVIE_URL.clone()
    .addPath('discover', 'movie')
    .addParams({ page: String(page), sort_by: 'popularity.desc' }).href;
