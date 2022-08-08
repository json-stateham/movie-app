import { useRef } from 'react'
import { useIntersectionObserver } from 'lib/hooks/useIntersectionObserver'

import styles from 'styles.module.scss'

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

  return <div className={styles.refStyle} ref={loadMore} />
}

export { InfiniteScrollTrigger }
