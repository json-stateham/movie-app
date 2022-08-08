import styles from './LoadingTape.module.scss'

const LoadingTape = () => (
  <div className={styles.loadingTape}>
    <div
      className={styles.loadingTapeMover}
      style={{ backgroundImage: `url(/images/icons/tape.svg)` }}
    />
  </div>
)

export { LoadingTape }
