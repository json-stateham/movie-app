import { useState } from 'react';
import Image from 'next/image';
import { IMAGE_CONFIG } from 'api/images/config';
import { Shimmer } from './Shimmer';

interface ComponentProps {
  imgSrc: string;
  restProps?: Record<string, number | string | boolean>;
  priority?: boolean;
  className?: string;
  alt?: string;
  imageType?: 'backdrop' | 'poster';
  width?: number;
  height?: number;
  external?: boolean;
}

interface ImageLoaderProps {
  src: string;
}

export const CustomImage = ({
  imgSrc,
  className,
  priority,
  alt = '',
  imageType = 'poster',
  external = true,
  ...restProps
}: ComponentProps) => {
  const [error, setError] = useState<boolean>(false);

  const loader = ({ src }: ImageLoaderProps) => {
    if (!external) return src;

    return error
      ? IMAGE_CONFIG.FALLBACK
      : `/api/imagesProxy${src}?imageType=${imageType}`;
  };

  return (
    <Image
      loader={loader}
      src={imgSrc || IMAGE_CONFIG.FALLBACK}
      alt={alt}
      width={420}
      height={420}
      className={className}
      priority={priority}
      placeholder="blur"
      blurDataURL={Shimmer(420, 420)}
      onError={() => setError(true)}
      {...restProps}
    />
  );
};
