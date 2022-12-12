import { Wrapper, CustomImage } from 'components';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <Wrapper className={clsx(styles.headerContent)}>
      <Link href="/">
        <CustomImage
          imgSrc="/images/tmdb_logo.svg"
          className={styles.logo}
          width={100}
          height={40}
          external={false}
        />
      </Link>
    </Wrapper>
  </header>
);
