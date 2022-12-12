import { IMAGE_CONFIG, BACKDROP, POSTER } from './config';

type BackdropSize = keyof typeof BACKDROP;
type PosterSize = keyof typeof POSTER;

export interface ImageUrlProps {
  imagePath: string;
  size?: BackdropSize | PosterSize;
  imageType: 'backdrop' | 'poster';
}

export const imageUrl = ({
  imagePath,
  size = 'L',
  imageType = 'poster',
}: ImageUrlProps) => {
  const sizesConfig = imageType === 'poster' ? POSTER : BACKDROP;

  return imagePath
    ? `${IMAGE_CONFIG.URL}/w${sizesConfig[size]}/${imagePath}`
    : IMAGE_CONFIG.FALLBACK;
};
