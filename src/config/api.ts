import { generateSearchParams } from 'shared/lib/generateSearchParams'

type TListType = 'popular' | 'top_rated'

const BASE_URL = import.meta.env.APP_BASE_URL

const BASE_QUERY_PARAMS = generateSearchParams({
  api_key: import.meta.env.APP_API_KEY,
  language: 'en-US',
})

const GENRES_URL = `${BASE_URL}/genre/movie/list?${BASE_QUERY_PARAMS}`

const getMoviesURL = (listType: TListType, page: number | string) => {
  const moviesSearchParams = `${BASE_QUERY_PARAMS}&${generateSearchParams({
    page: `${page}`,
  })}`

  return `${BASE_URL}/movie/${listType}?${moviesSearchParams}`
}

export { BASE_URL, GENRES_URL, getMoviesURL }
