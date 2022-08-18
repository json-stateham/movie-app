import { CSSProperties, ReactNode } from 'react'
import styles from './HeroBlock.module.scss'

interface IProps {
  children: ReactNode
  backdrop: CSSProperties
}

const HeroBlock = ({ children, backdrop }: IProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero} style={backdrop} />
      {children}
    </div>
  )
}

export { HeroBlock }
