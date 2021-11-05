import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IMoviesList, IMoviesResult, IGenres } from 'types/common'

type TListType = 'popular' | 'top_rated'
type TPage = number

interface IParams {
  listType: TListType
  page: TPage
}

const BASE_PARAMS = {
  api_key: import.meta.env.APP_API_KEY,
  language: 'en-US',
}
const BASE_QUERY_PARAMS = new URLSearchParams(BASE_PARAMS).toString()

const BASE_URL = import.meta.env.APP_BASE_URL

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  endpoints: builder => ({
    getMovies: builder.query<IMoviesList[], IParams>({
      async queryFn(args, _queryApi, _extraOptions, fetchWithBQ) {
        const genresUrl = `/genre/movie/list?${BASE_QUERY_PARAMS}`
        const {
          data: { genres },
          error: genresErr,
        }: Record<string, any> = await fetchWithBQ(genresUrl)
        // const genres = genresResponse.data as IGenres[]
        if (genresErr) throw genresErr

        const {
          data: { results, total_pages },
          error: moviesError,
        }: any = await fetchWithBQ(
          `/movie/${args.listType}?${BASE_QUERY_PARAMS}&page=${args.page}`,
        )

        const moviesWithGenreNames = results.map((item: any) => ({
          ...item,
          genre_ids: item.genre_ids.map(
            (id: number) => genres.find((genre: any) => genre.id === id).name,
          ),
        }))

        return { data: moviesWithGenreNames, total: total_pages }
      },
    }),
  }),
})

export const { useGetMoviesQuery } = moviesApi
