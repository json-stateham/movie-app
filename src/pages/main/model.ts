import { GENRES_URL, getMoviesURL } from 'config/api'
import { IMoviesItem, IMoviesResponse, IGenres } from 'types/common'

const fetchData = (url: string) =>
  fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error('FFF from fetchData')
        // https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default
      }
      return res.json()
    })
    .catch(console.error)

const mapGenresIdsToNames = (movies: IMoviesItem[], genres: IGenres[]) =>
  movies?.map((movie: IMoviesItem) => ({
    ...movie,
    genre_ids: movie.genre_ids.map(
      (id: number | string) =>
        genres.find((genre: IGenres) => genre.id === id)?.name,
    ),
  }))

export const fetchMoviesList = (page = 1) =>
  Promise.all([
    fetchData(GENRES_URL),
    fetchData(getMoviesURL('top_rated', page)),
  ]).then(([{ genres }, { results: movies, total_pages }]) => {
    const preparedData = mapGenresIdsToNames(movies, genres)

    return {
      movies: preparedData,
      totalPages: total_pages,
    }
  })
