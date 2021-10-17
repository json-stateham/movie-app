import { useRef } from 'react'
import { useIntersectionObserver } from 'hooks/useIntersectionObserver'

interface IProps {
  onIntersect: () => void
  enabled: boolean
}

const InfiniteScrollTrigger = ({ onIntersect, enabled }: IProps) => {
  const loadMore = useRef<HTMLDivElement | null>(null)

  useIntersectionObserver({
    target: loadMore,
    onIntersect,
    enabled,
    rootMargin: '2000px',
  })

  return (
    <div
      ref={loadMore}
      style={{ background: 'transparent', padding: '20px' }}
    />
  )
}

export { InfiniteScrollTrigger }
