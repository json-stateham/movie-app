import Logo from 'images/tmdb_logo.svg'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/">
        <img src={Logo} alt="" className={styles.logoImg} />
      </a>
    </header>
  )
}

export { Header }