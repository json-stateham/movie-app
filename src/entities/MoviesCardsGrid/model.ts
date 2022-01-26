import { GENRES_URL, makeMoviesListURL, TListType } from 'shared/api/apiConfig'
import { baseFetch } from 'shared/api/baseFetch'
import { IMoviesItem, IGenres } from 'types/common'

const mapGenresIdsToNames = (movies: IMoviesItem[], genres: IGenres[]) =>
  movies?.map((movie: IMoviesItem) => ({
    ...movie,
    genre_ids: movie.genre_ids.map(
      (id: number | string) =>
        genres.find((genre: IGenres) => genre.id === id)?.name,
    ),
  }))

export const fetchMoviesList = (page = 1, listType: TListType = 'top_rated') =>
  Promise.all([
    baseFetch(GENRES_URL),
    baseFetch(makeMoviesListURL(listType, page)),
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
