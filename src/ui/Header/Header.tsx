import clsx from 'clsx'
import { useToggleHeaderOnScroll } from './useToggleHeaderOnScroll'
import Logo from 'shared/assets/images/tmdb_logo.svg'
import styles from './Header.module.scss'

const Header = () => {
  const visible = useToggleHeaderOnScroll()

  return (
    <header className={clsx(styles.header, !visible && styles.headerHidden)}>
      <a href="/">
        <img
          src={Logo}
          alt=""
          className={styles.logoImg}
          width={101}
          height={40}
        />
      </a>
    </header>
  )
}

export { Header }
