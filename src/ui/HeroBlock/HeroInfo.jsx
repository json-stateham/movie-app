import { Heading, Paragraph, Separator } from 'ui'
import { useIsMounted } from './useIsMounted'
import { CSSTransition } from 'react-transition-group'
import styles from './HeroInfo.module.scss'

const HeroInfo = ({ title, release, genres, overview}) => {
  const mounted = useIsMounted()

  return (
    <CSSTransition in={mounted} timeout={1500} classNames="fade">
      <div className={styles.movieInfoWrapper}>
        <Heading variant={'h1'} upperCase>
          {title}
        </Heading>
        <Heading variant={'h3'} spacing={{ marginTop: 8 }}>
          {release}
          <Separator>&#9898;</Separator>
          {genres}
        </Heading>
        <Paragraph spacing={{ marginTop: 8 }}>{overview}</Paragraph>
      </div>
    </CSSTransition>
  )
}

export { HeroInfo }
