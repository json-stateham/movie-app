import { config } from './config';

const API = {
  fetchMovie: param => fetch(`${config.API_URL}movie/${param}?api_key=${config.API_KEY}`),
  fetchReviews: param => fetch(`${config.API_URL}movie/${param}/reviews?api_key=${config.API_KEY}`),
  fetchImages: param => fetch(`${config.API_URL}movie/${param}/images?language=en&api_key=${config.API_KEY}`),
  fetchCredits: param => fetch(`${config.API_URL}movie/${param}/credits?api_key=${config.API_KEY}`),
  fetchVideos: param => fetch(`${config.API_URL}movie/${param}/videos?api_key=${config.API_KEY}`),
  fetchSimilar: param => fetch(`${config.API_URL}movie/${param}/similar?api_key=${config.API_KEY}`),
}

export { API }