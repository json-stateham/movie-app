type MovieRequestParamsKeys =
  | 'page'
  | 'api_key'
  | 'language'
  | 'append_to_response';

export type MovieCategory = 'popular' | 'top_rated';

export type MovieRequestParams = Record<MovieRequestParamsKeys, string>;
