import { baseFetch } from 'shared/api/baseFetch'
import { MOVIE_DETAILS_URL } from 'shared/api/apiConfig'

const fetchMovieDetails = (movieId: number) =>
  baseFetch(MOVIE_DETAILS_URL(movieId))

export { fetchMovieDetails }
