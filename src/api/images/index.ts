import { BACKDROP, IMAGE_CONFIG, POSTER } from './config';
import { ImageUrlProps } from './types';

export const imageUrl = ({
  imagePath,
  size = 'L',
  imageType = 'poster',
}: ImageUrlProps) => {
  const sizesConfig = imageType === 'poster' ? POSTER : BACKDROP;
  const imageSize = sizesConfig[size as keyof typeof sizesConfig];

  return imagePath
    ? `${IMAGE_CONFIG.URL}/w${imageSize}${imagePath}`
    : IMAGE_CONFIG.FALLBACK;
};
