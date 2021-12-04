import { fetchData } from 'shared/api'
import { MOVIE_DETAILS_URL } from 'config/api'

const fetchMovieDetails = (movieId: number) =>
  fetchData(MOVIE_DETAILS_URL(movieId))

export { fetchMovieDetails }
