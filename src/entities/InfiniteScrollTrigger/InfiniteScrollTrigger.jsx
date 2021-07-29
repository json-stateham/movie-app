import { useRef } from 'react'
import { useIntersectionObserver } from 'hooks/useIntersectionObserver'

const InfiniteScrollTrigger = ({ onIntersect, enabled }) => {
  const loadMoreRef = useRef()

  useIntersectionObserver({
    target: loadMoreRef,
    onIntersect,
    enabled,
    rootMargin: '2000px',
  })

  return (
    <div ref={loadMoreRef} style={{ background: 'transparent', padding: '20px' }} />
  )
}

export { InfiniteScrollTrigger }