import { jsonFetch } from 'shared/network/fetchClient';
import { UrlBuilder } from 'shared/network/urlBuilder';
import { API_URL } from './config';
import type { MovieCategory, MovieRequestParams } from './types';

const BASE_URL = new UrlBuilder(API_URL).addParams({
  api_key: process.env.API_KEY as string,
  language: 'en-US',
});

export const getMovieDetails = (
  movieId: number,
  params: Partial<MovieRequestParams> = {},
) => {
  const url = BASE_URL.clone()
    .addPath('movie', movieId)
    .addParams({
      append_to_response: 'videos,images,credits,similar,reviews',
      ...params,
    }).href;
  return jsonFetch(url);
};

export const getMovies = ({
  category,
  page,
}: {
  category: MovieCategory;
  page: number;
}) => {
  const url = BASE_URL.clone()
    .addPath('movie', category)
    .addParams({
      page: String(page),
      // with_genres: 12
    }).href;

  return jsonFetch(url);
};

export const getGenres = () => {
  const reqUrl = BASE_URL.clone().addPath('genre', 'movie', 'list');
  return jsonFetch(reqUrl.href);
};

export const discoverMovies = (page: number) =>
  BASE_URL.clone()
    .addPath('discover', 'movie')
    .addParams({ page: String(page), sort_by: 'popularity.desc' }).href;
