import { useRef, useState } from 'react'
import { useIntersectionObserver } from 'lib/hooks/useIntersectionObserver'

interface IProps {
  imageUrl: string
  alt: string
  width: string
  height: string
}

export const LazyImage = ({ imageUrl, alt, width, height }: IProps) => {
  const imgRef = useRef<HTMLImageElement | null>(null)
  const [isLoaded, setLoaded] = useState<boolean>(false)

  const setSrc = () => {
    let srcRef = imgRef?.current?.src
    srcRef = imgRef?.current?.dataset?.src
    imgRef?.current?.removeAttribute('data-src')
    setLoaded(true)
  }

  useIntersectionObserver({
    target: imgRef,
    onIntersect: setSrc,
    rootMargin: '1200px',
    enabled: !isLoaded,
  })

  return (
    <img
      ref={imgRef}
      data-src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
    />
  )
}
