import { ReactNode } from 'react'
import styles from './Grid.module.scss'

const Grid = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.grid}>
      <div className={styles.gridContent}>{children}</div>
    </div>
  )
}

export { Grid }
