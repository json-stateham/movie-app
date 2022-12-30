import { CustomImage } from 'ui/components';
import { POSTER } from 'api/images/config';
import cx from 'clsx';
import styles from './Thumb.module.scss';

interface Props {
  alt: string;
  image: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export const Thumb = ({
  image,
  alt,
  width = Number(POSTER.L),
  height = 510,
  className,
  priority
}: Props) => (
  <div className={cx(styles.thumbWrapper, className)}>
    <CustomImage
      className={styles.thumbImage}
      imgSrc={image}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
    />
  </div>
);
