// https://developers.themoviedb.org/3/movies/get-top-rated-movies
export interface IMoviesItem {
  poster_path: string | null
  adult: boolean
  overview: string
  release_date: string
  genre_ids: number[] | string[]
  id: number
  original_title: string
  original_language: string
  title: string
  backdrop_path: string | null
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
}

export interface IMoviesResponse {
  page: number
  results: IMoviesItem[]
  total_results: number
  total_pages: number
}

export interface IGenres {
  id: number
  name: string
}
