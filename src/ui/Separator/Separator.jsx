import styles from './Separator.module.scss'

const Separator = ({ children }) => {
  return (
    <span className={styles.separator}>{children}</span>
  )
}

export { Separator }
