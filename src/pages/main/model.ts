import { GENRES_URL, getMoviesURL } from 'config/api'
import { IMoviesItem, IMoviesResponse, IGenres } from 'types/common'

const fetchData = (url: string, extractDataKey: string) =>
  fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error('fff')
      }
      return res.json()
    })
    .then(data => data[extractDataKey])
// .catch(error => {
//   // https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default
//   throw new Error(error)
// })

const mapGenresIdsToNames = (movies: IMoviesItem[], genres: IGenres[]) =>
  movies?.map((movie: IMoviesItem) => ({
    ...movie,
    genre_ids: movie.genre_ids.map(
      (id: number | string) =>
        genres.find((genre: IGenres) => genre.id === id)?.name,
    ),
  }))

export const fetchMoviesList = () =>
  Promise.all([
    fetchData(GENRES_URL, 'genres'),
    fetchData(getMoviesURL('top_rated', 1), 'results'),
  ]).then(([genres, movies]) => mapGenresIdsToNames(movies, genres))
