import { CustomImage } from '@/components/index';
import { POSTER } from 'api/images/config';
import styles from './Thumb.module.scss';

interface Props {
  alt: string;
  image: string;
  width?: number;
  height?: number;
}

export const Thumb = ({
  image,
  alt,
  width = Number(POSTER.L),
  height = 510,
}: Props) => (
  <figure className={styles.thumbWrapper}>
    <CustomImage
      className={styles.thumbImage}
      imgSrc={image}
      alt={alt}
      width={width}
      height={height}
    />
  </figure>
);
