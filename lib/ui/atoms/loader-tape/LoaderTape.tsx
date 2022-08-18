import styles from './LoaderTape.module.scss'

export const LoaderTape = () => (
  <div className={styles.loadingTape}>
    <div
      className={styles.loadingTapeMover}
      style={{ backgroundImage: `url(/images/icons/tape.svg)` }}
    />
  </div>
)
