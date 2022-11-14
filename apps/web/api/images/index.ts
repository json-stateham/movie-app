import { IMAGE_CONFIG, BACKDROP, THUMB } from './config';

export const getBackdropImage = (backdropPath: string) =>
  `${IMAGE_CONFIG.URL}/w${BACKDROP.ORIGINAL}${backdropPath}`;

export const getImageSrc = (image: string, size = 'L') => 
  image ? `/w${THUMB[size]}${image}` : IMAGE_CONFIG.FALLBACK;