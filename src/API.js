import { API_CONFIG } from './config';

const { API_URL, API_KEY } = API_CONFIG

const API = {
  fetchMovie: param => fetch(`${API_URL}movie/${param}?api_key=${API_KEY}`),
  fetchReviews: param => fetch(`${API_URL}movie/${param}/reviews?api_key=${API_KEY}`),
  fetchImages: param => fetch(`${API_URL}movie/${param}/images?language=en&api_key=${API_KEY}`),
  fetchCredits: param => fetch(`${API_URL}movie/${param}/credits?api_key=${API_KEY}`),
  fetchVideos: param => fetch(`${API_URL}movie/${param}/videos?api_key=${API_KEY}`),
  fetchSimilar: param => fetch(`${API_URL}movie/${param}/similar?api_key=${API_KEY}`),
}

export { API }
