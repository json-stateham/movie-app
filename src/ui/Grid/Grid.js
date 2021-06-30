import styles from './Grid.module.scss'

const Grid = ({ header, children }) => {

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>{header}</h1>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export { Grid }