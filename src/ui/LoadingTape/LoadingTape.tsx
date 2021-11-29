import Tape from 'shared/assets/images/tape.svg'
import styles from './LoadingTape.module.scss'

const LoadingTape = () => (
  <div className={styles.loadingTape}>
    <div
      className={styles.loadingTapeMover}
      style={{ backgroundImage: `url(${Tape})` }}
    />
  </div>
)

export { LoadingTape }
