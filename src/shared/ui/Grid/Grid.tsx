import { FC, ReactNode } from 'react'
import styles from './Grid.module.scss'

interface IProps {
  children: ReactNode
}

const Grid: FC<IProps> = ({ children }) => {
  return (
    <div className={styles.grid}>
      <div className={styles.gridContent}>{children}</div>
    </div>
  )
}

export { Grid }
