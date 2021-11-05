const API_CONFIG = {
  API_URL: 'https://api.themoviedb.org/3/',
  IMAGES_URL: 'http://image.tmdb.org/t/p/',
  // SEARCH_URL: () =>
  //   `${API_CONFIG.API_URL}search/movie?api_key=${API_CONFIG.API_KEY}&language=en-US&query=`,
  // POPULAR_BASE_URL: () =>
  //   `${API_CONFIG.API_URL}movie/popular?api_key=${API_CONFIG.API_KEY}&language=en-US`,
}

enum IMAGE_BACKDROP {
  S = 'w300',
  M = 'w700',
  L = 'w1280',
  ORIGINAL = 'original',
}

enum IMAGE_THUMB {
  XS = 'w92',
  S = 'w154',
  M = 'w185',
  L = 'w342',
  XL = 'w500',
  XXL = 'w700',
  ORIGINAL = 'original',
}

export { API_CONFIG, IMAGE_BACKDROP, IMAGE_THUMB }
