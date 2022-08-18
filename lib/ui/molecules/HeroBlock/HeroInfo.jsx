import { Text, Separator } from '@/lib/ui'
import { useIsMounted } from './useIsMounted'
import { CSSTransition } from 'react-transition-group'
import styles from './HeroInfo.module.scss'

const HeroInfo = ({ title, release, genres, overview}) => {
  const mounted = useIsMounted()

  return (
    <CSSTransition in={mounted} timeout={1500} classNames="fade">
      <div className={styles.movieInfoWrapper}>
        <Text tag="h1">{title}</Text>
        <Text tag="h3">
          {release}
          <Separator>&#9898;</Separator>
          {genres}
        </Text>
        <Text>{overview}</Text>
      </div>
    </CSSTransition>
  )
}

export { HeroInfo }
