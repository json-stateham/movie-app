import Image, { ImageProps } from 'next/image'
import { IMAGE_THUMB } from 'lib/config/images'

import styles from './Thumb.module.scss'

interface IProps {
  alt: string
  image: string | null
  width?: number
  height?: number
}

const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL

const myLoader = ({ src, width, quality }: ImageProps) => {
  return `${IMAGE_URL}${src}?w=${width}&q=${quality || 75}`
}

const Thumb = ({ image, alt, width = 340, height = 510 }: IProps) => {
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.image}>
        <Image
          loader={myLoader}
          src={image ? `${IMAGE_THUMB.L}${image}` : '/images/no_image.jpg'}
          alt={alt}
          width={Number(`${IMAGE_THUMB.L}`.substring(1))}
          height={height}
        />
      </div>
    </div>
  )
}

export { Thumb }
