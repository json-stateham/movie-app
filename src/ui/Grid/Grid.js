import styles from './Grid.module.scss'

const Grid = ({ header, children }) => (
  <div className={styles.wrapper}>
    <h1>{header}</h1>
    <div className={styles.content}>
      {children}
    </div>
  </div>
)

export { Grid }