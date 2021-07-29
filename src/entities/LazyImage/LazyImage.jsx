import { useRef, useState } from 'react'
import { useIntersectionObserver } from 'hooks/useIntersectionObserver'

export const LazyImage = ({ imageUrl, alt, width, height }) => {
  const imgRef = useRef()
  const [isLoaded, setLoaded] = useState(false)

  const setSrc = () => {
    imgRef.current.src = imgRef.current.dataset.src
    imgRef.current.removeAttribute('data-src')
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
