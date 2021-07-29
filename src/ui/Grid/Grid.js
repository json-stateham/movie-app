import styles from './Grid.module.scss'

const Grid = ({ children }) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export { Grid }