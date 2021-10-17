import { ReactNode } from 'react'
import styles from './Grid.module.scss'

const Grid = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export { Grid }
