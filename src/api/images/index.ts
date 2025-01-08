import { BACKDROP, IMAGE_CONFIG, POSTER } from './config';
import { ImageUrlProps } from './types';

export const imageUrl = ({
  imagePath,
  size = 'L',
  imageType = 'poster',
}: ImageUrlProps) => {
  const sizesConfig = imageType === 'poster' ? POSTER : BACKDROP;

  return imagePath
    ? `${IMAGE_CONFIG.URL}/w${sizesConfig[size]}${imagePath}`
    : IMAGE_CONFIG.FALLBACK;
};
