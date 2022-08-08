import clsx from 'clsx';
import styles from './Header.module.scss';
import { useToggleHeaderOnScroll } from './useHeaderToggleOnScroll';

const Header = () => {
  const visible = useToggleHeaderOnScroll();

  return (
    <header className={clsx(styles.header, !visible && styles.headerHidden)}>
      <a href="/">
        <img
          src="/images/tmdb_logo.svg"
          alt=""
          className={styles.logo}
          width={100}
          height={40}
        />
      </a>
    </header>
  );
};

export default Header;
