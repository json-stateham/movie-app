import { GENRES_URL, makeMoviesListURL } from 'shared/api/apiConfig'
import { baseFetch } from 'shared/api/baseFetch'
import { IMainPageData } from 'types/common'

export const fetchMainPage = (): Promise<IMainPageData> =>
  Promise.all([
    baseFetch(GENRES_URL),
    baseFetch(makeMoviesListURL('top_rated', 2)),
    baseFetch(makeMoviesListURL('popular', 1)),
  ]).then(([{ genres }, { results: topMovies }, { results: trendMovies }]) => {
    return {
      topMovies,
      trendMovies,
      genres,
    }
  })
