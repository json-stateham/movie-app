import clsx from 'clsx';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={clsx(styles.headerContent, "wrapper")}>
        <a href="/">
          <img
            src="/images/tmdb_logo.svg"
            alt=""
            className={styles.logo}
            width={100}
            height={40}
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
