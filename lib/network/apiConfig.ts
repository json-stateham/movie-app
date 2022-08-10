import { serialUrlParams } from '../serialUrlParams';

export type TMovieCategory = 'popular' | 'top_rated';
type TPath = Array<string>;
type TParams = Record<string, string>;

const CONFIG = {
  URL: process.env.NEXT_PUBLIC_BASE_URL as string,
  OPTIONS: {
    api_key: process.env.API_KEY as string,
    language: 'en-US',
  },
  APPEND_MOVIE_DETAILS: {
    append_to_response: 'videos,images,credits,similar,reviews',
  },
};

const makePath = (...path: TPath) => `${CONFIG.URL}${path.join('/')}`;

const makeParams = (params: TParams = {}) =>
  `?${serialUrlParams({ ...params, ...CONFIG.OPTIONS })}`;

export const movieDetailsUrl = (movieId: number, params: TParams = {}) =>
  `${makePath('movie', movieId.toString())}${makeParams({
    ...CONFIG.APPEND_MOVIE_DETAILS,
    ...params,
  })}`;

export const makeMoviesListURL = (
  movieCategory: TMovieCategory,
  page: number,
) =>
  `${makePath('movie', movieCategory)}${makeParams({ page: page.toString() })}`;

export const GENRES_URL = `${makePath(
  'genre',
  'movie',
  'list',
)}${makeParams()}`;

// export const discoverMovies = () =>
// makePath('discover', 'movie') + makeParams({ page: '500', sort_by: 'release_date.desc' });
