import { POSTER } from 'src/api/images/config';
import cx from 'clsx';
import styles from './Thumb.module.css';
import { CustomImage } from '../custom-image/CustomImage';

interface Props {
  alt: string;
  image: string;
  width?: number;
  height?: number;
  className?: string;
  loadImageInPriority?: boolean;
}

export const Thumb = ({
  image,
  alt,
  width = Number(POSTER.L),
  height = 513,
  className,
  loadImageInPriority,
}: Props) => (
  <div className={cx(styles.thumbWrapper, className)}>
    <CustomImage
      className={styles.thumbImage}
      imgSrc={image}
      alt={alt}
      width={width}
      height={height}
      priority={loadImageInPriority}
    />
  </div>
);
