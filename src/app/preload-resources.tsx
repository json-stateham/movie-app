'use client';

import ReactDOM from 'react-dom';

export function PreloadResources() {
  ReactDOM.preconnect('https://fonts.gstatic.com');
  ReactDOM.preconnect('https://api.themoviedb.org');
  ReactDOM.preconnect('https://image.tmdb.org');

  return null;
}
