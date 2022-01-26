import { serialize } from 'shared/lib/serialize'

export type TListType = 'popular' | 'top_rated'

const config = {
  base: import.meta.env.APP_BASE_URL,
  params: {
    api_key: import.meta.env.APP_API_KEY,
    language: 'en-US',
  },
}

const makeURL =
  (...path: Array<string | number>) =>
  (params = {}) => {
    return `${config.base}${path.join('/')}?${serialize({
      ...config.params,
      ...params,
    })}`
  }

const GENRES_URL = makeURL('genre', 'movie', 'list')()

const MOVIE_DETAILS_URL = (movieId: number) =>
  makeURL(
    'movie',
    movieId,
  )({ append_to_response: 'videos,images,credits,similar,reviews' })

const makeMoviesListURL = (listType: TListType, page: number | string) => {
  return makeURL(
    'movie',
    listType,
  )({
    page: `${page}`,
  })
}

export { GENRES_URL, MOVIE_DETAILS_URL, makeMoviesListURL }
