import { GENRES_URL, makeMoviesListURL } from 'shared/config/api'
import { fetchData } from 'shared/api'
import { IMoviesItem, IGenres } from 'types/common'

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
    fetchData(makeMoviesListURL('top_rated', page)),
  ]).then(([{ genres }, { results: movies, total_pages }]) => {
    const preparedData = mapGenresIdsToNames(movies, genres)

    const totalPagesEvent = new CustomEvent('gotTotalPages', {
      detail: total_pages,
    })

    window.dispatchEvent(totalPagesEvent)

    return {
      movies: preparedData,
      totalPages: total_pages,
    }
  })
