import { GENRES_URL, makeMoviesListURL, TMovieCategory } from 'lib/network/apiConfig'
import { jsonFetch } from 'lib/network/fetchClient'
import { IMoviesItem, IGenres } from 'types/common'

const mapGenresIdsToNames = (movies: IMoviesItem[], genres: IGenres[]) =>
  movies?.map((movie: IMoviesItem) => ({
    ...movie,
    genre_ids: movie.genre_ids.map(
      (id: number | string) =>
        genres.find((genre: IGenres) => genre.id === id)?.name,
    ),
  }))

export const fetchMoviesList = (page = 1, listType: TMovieCategory = 'top_rated') =>
  Promise.all([
    jsonFetch(GENRES_URL),
    jsonFetch(makeMoviesListURL(listType, page)),
  ]).then(([{ genres }, { results: movies, total_pages }]) => {
    const preparedData = mapGenresIdsToNames(movies, genres)

    const totalPagesEvent = new CustomEvent('gotTotalPages', {
      detail: total_pages > 500 ? 500 : total_pages,
    })

    window.dispatchEvent(totalPagesEvent)

    return {
      movies: preparedData,
      totalPages: total_pages,
    }
  })
