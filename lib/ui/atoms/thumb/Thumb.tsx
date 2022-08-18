import Image, { ImageProps } from 'next/image';
import { IMAGE_CONFIG, THUMB } from 'api/images/config';

import styles from './Thumb.module.scss';

interface IProps {
  alt: string;
  image: string;
  width?: number;
  height?: number;
}

const myLoader = ({ src, width, quality }: ImageProps) => {
  return `${IMAGE_CONFIG.URL}${src}?w=${width}&q=${quality || 75}`;
};

const Thumb = ({
  image,
  alt,
  width = Number(THUMB.L),
  height = 510,
}: IProps) => {
  return (
    <div className={styles.thumbWrapper}>
      <div className={styles.thumbImage}>
        <Image
          loader={myLoader}
          src={image}
          alt={alt}
          width={width}
          height={height}
        />
      </div>
    </div>
  );
};

export { Thumb };
