import { BACKDROP, POSTER } from './config';

type BackdropSize = keyof typeof BACKDROP;
type PosterSize = keyof typeof POSTER;

export type ImageSize = BackdropSize | PosterSize;
type ImageType = 'backdrop' | 'poster';

export type ImageUrlProps = {
  imagePath: string;
  size?: ImageSize;
  imageType: ImageType;
};
