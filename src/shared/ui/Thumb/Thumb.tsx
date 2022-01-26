import { IMAGE_THUMB } from 'shared/config/images'
import NoImage from 'shared/assets/images/no_image.jpg'

import styles from './Thumb.module.scss'

interface IProps {
  alt: string
  image: string | null
  width?: number
  height?: number
}

const Thumb = ({ image, alt, width = 340, height = 510 }: IProps) => {
  const IMAGE_URL = import.meta.env.APP_IMAGE_URL

  return (
    <div className={styles.imageWrapper}>
      <div className={styles.image}>
        <img
          src={image ? `${IMAGE_URL}${IMAGE_THUMB.L}${image}` : NoImage}
          alt={alt}
          width={width}
          height={height}
        />
      </div>
    </div>
  )
}

export { Thumb }
