// https://developers.themoviedb.org/3/movies/get-top-rated-movies
export interface MoviesItem {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  imgPlaceholder?: string;
  imgSrc?: string;
  trailers: IMovieDetailsVideosResults[];
}

export interface IMoviesResponse {
  page: number;
  results: MoviesItem[];
  total_results: number;
  total_pages: number;
}

export interface IMovieDetails {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: Record<string, unknown> | null;
  budget: number;
  credits?: IMovieCredits;
  genres: IGenres[];
  homepage: string;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: {
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  videos: IMovieDetailsVideos;
  vote_average: number;
  vote_count: number;
}

export interface IMovieDetailsVideos {
  id: number;
  results: IMovieDetailsVideosResults[];
}
export interface IMovieDetailsVideosResults {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: 'Trailer' | 'Clip' | 'Behind the Scenes';
  official: boolean;
  published_at: string;
  id: string;
}

export interface IGenres {
  id: number;
  name: string;
}

export interface IMovieCast {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}
export interface IMovieCrew {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
}

export interface IMovieCredits {
  id: number;
  cast: IMovieCast[];
  crew: IMovieCrew[];
}

export interface IMainPageData {
  topMovies: MoviesItem[];
  trendMovies: MoviesItem[];
  trendTrailers?: MoviesItem[];
}
