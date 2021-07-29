import Tape from 'images/tape.svg'
import styles from './LoadingTape.module.scss'

const LoadingTape = () => {
  return (
    <div className={styles.loadingTape}>
      <div className={styles.loadingTapeMover} style={{ backgroundImage: `url(${Tape})`}}></div>
    </div>
  )
}

export { LoadingTape }