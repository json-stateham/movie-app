import { serialUrlParams } from '../serialUrlParams';

export type TMovieCategory = 'popular' | 'top_rated';
type TPath = Array<string>;
type TParams = Record<string, string>;

const CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL as string,
  BASE_PARAMS: {
    api_key: process.env.API_KEY as string,
    language: 'en-US',
  },
  APPEND_MOVIE_DETAILS: {
    append_to_response: 'videos,images,credits,similar,reviews',
  },
};

const makePath = (...path: TPath) => `${CONFIG.BASE_URL}${path.join('/')}`;

const makeParams = (params: TParams = {}) =>
  `?${serialUrlParams({ ...params, ...CONFIG.BASE_PARAMS })}`;

export const movieDetailsUrl = (movieId: number) =>
  `${makePath('movie', movieId.toString())}${makeParams(CONFIG.APPEND_MOVIE_DETAILS)}`;

export const makeMoviesListURL = (movieCategory: TMovieCategory, page: number) =>
  `${makePath('movie', movieCategory)}${makeParams({ page: page.toString() })}`;

export const GENRES_URL = `${makePath('genre', 'movie', 'list')}${makeParams()}`;

// export const discoverMovies = () => 
// makePath('discover', 'movie') + makeParams({ page: '500', sort_by: 'release_date.desc' });
