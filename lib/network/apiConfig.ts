import { serialUrlParams } from '../serialUrlParams';

export type TMovieCategory = 'popular' | 'top_rated';
type TPath = string[];
type TParamsKeys = 'page' | 'api_key' | 'language' | 'append_to_response';
type TParams = Record<TParamsKeys, string>;

const CONFIG = Object.freeze({
  URL: process.env.NEXT_PUBLIC_BASE_URL,
  OPTIONS: {
    api_key: process.env.API_KEY,
    language: 'en-US',
  },
  APPEND_MOVIE_DETAILS: {
    append_to_response: 'videos,images,credits,similar,reviews',
  },
});

const makePath = (...path: TPath) => path.join('/');

const makeParams = (params: Partial<TParams>) =>
  `?${serialUrlParams({ ...params })}`;

export const movieDetailsUrl = (movieId: number, params?: TParams) =>
  CONFIG.URL +
  makePath('movie', String(movieId)) +
  makeParams({
    ...CONFIG.OPTIONS,
    ...CONFIG.APPEND_MOVIE_DETAILS,
    ...params,
  });

export const makeMoviesListURL = (
  movieCategory: TMovieCategory,
  page: number,
) =>
  CONFIG.URL +
  makePath('movie', movieCategory) +
  makeParams({
    ...CONFIG.OPTIONS,
    page: String(page),
  });

export const GENRES_URL =
  CONFIG.URL +
  makePath('genre', 'movie', 'list') +
  makeParams({ ...CONFIG.OPTIONS });

// export const discoverMovies = () =>
// makePath('discover', 'movie') + makeParams({ page: '500', sort_by: 'release_date.desc' });
