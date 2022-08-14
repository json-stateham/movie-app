export const API_CONFIG = {
  URL: process.env.NEXT_PUBLIC_BASE_URL as string,
  PARAMS: {
    api_key: process.env.API_KEY as string,
    language: 'en-US',
  },
  APPEND_MOVIE_DETAILS: {
    append_to_response: 'videos,images,credits,similar,reviews',
  },
};
