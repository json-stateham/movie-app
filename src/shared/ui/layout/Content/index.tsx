import { FC, ReactNode } from 'react'
import styles from './Content.module.scss'

interface IProps {
  children: ReactNode
}

const Content: FC<IProps> = ({ children }) => (
  <main className={styles.content}>{children}</main>
)

export { Content }
