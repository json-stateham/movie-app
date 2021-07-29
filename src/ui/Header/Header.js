import clsx from 'clsx'
import { useToggleHeaderOnScroll } from './useToggleHeaderOnScroll'
import Logo from 'images/tmdb_logo.svg'
import styles from './Header.module.scss'

const Header = () => {
  const visible = useToggleHeaderOnScroll()

  return (
    <header className={clsx(styles.header, !visible && styles.headerHidden)}>
      <a href="/">
        <img src={Logo} alt="" className={styles.logoImg} />
      </a>
    </header>
  )
}

export { Header }
