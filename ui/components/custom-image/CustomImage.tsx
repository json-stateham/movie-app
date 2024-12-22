'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IMAGE_CONFIG } from 'api/images/config';
import { Shimmer } from './Shimmer';
import { imageUrl } from 'api/images';
import type { ImageSize } from 'api/images/types';

interface ComponentProps {
  imgSrc: string;
  restProps?: Record<string, number | string | boolean>;
  priority?: boolean;
  className?: string;
  alt?: string;
  imageType?: 'backdrop' | 'poster';
  imageSize?: ImageSize;
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
      : imageUrl({ imagePath: imgSrc, size: imageSize, imageType });
  };

  return (
    <Image
      loader={loader}
      src={imgSrc || IMAGE_CONFIG.FALLBACK}
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
