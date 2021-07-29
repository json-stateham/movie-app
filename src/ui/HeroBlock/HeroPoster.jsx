import { useIsMounted } from './useIsMounted'
import { CSSTransition } from 'react-transition-group'
import styles from './HeroPoster.module.scss'

const HeroPoster = ({ imageSrc }) => {
  const mounted = useIsMounted()

  return (
    <CSSTransition in={mounted} timeout={2500} classNames="poster">
      <div className={styles.poster}>
        <img src={imageSrc} alt="" />
      </div>
    </CSSTransition>
  )
}

export { HeroPoster }
