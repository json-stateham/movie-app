'use client';

import { useState } from 'react';
import Image from 'next/legacy/image';
import { IMAGE_CONFIG } from 'api/images/config';
import { Shimmer } from './Shimmer';

interface ComponentProps {
  imgSrc: string;
  restProps?: Record<string, number | string | boolean>;
  priority?: boolean;
  className?: string;
  alt?: string;
  imageType?: 'backdrop' | 'poster';
  imageSize?: string;
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
  imageSize = 'L',
  external = true,
  width = 400,
  height = 700,
  ...restProps
}: ComponentProps) => {
  const [error, setError] = useState<boolean>(false);

  const loader = ({ src }: ImageLoaderProps) => {
    if (!external) return src;

    return error
      ? IMAGE_CONFIG.FALLBACK
      : `/api/imagesProxy${src}?imageType=${imageType}&imageSize=${imageSize}`;
  };

  return (
    <Image
      loader={loader}
      src={imgSrc.replace('.jpg', '.webp') || IMAGE_CONFIG.FALLBACK}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      placeholder="blur"
      blurDataURL={Shimmer(width, height)}
      onError={() => setError(true)}
      {...restProps}
    />
  );
};
