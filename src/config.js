const API_CONFIG = {
  API_URL: 'https://api.themoviedb.org/3/',
  IMAGES_URL: 'http://image.tmdb.org/t/p/',
  API_KEY: '844dba0bfd8f3a4f3799f6130ef9e335',
  SEARCH_URL: () => `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`,
  POPULAR_BASE_URL: () => `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`
}

const imagesSize = {
  BACKDROP: {
    w300: 'w300',
    w700: 'w700',
    w1280: 'w1280',
    original: 'original',
  },
  THUMB: {
    w92: 'w92',
    w154: 'w154',
    w185: 'w185',
    w342: 'w342',
    w500: 'w500',
    w700: 'w700',
    original: 'original'
  },
}

export { API_CONFIG, imagesSize }
