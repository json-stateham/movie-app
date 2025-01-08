import Link from 'next/link';
import clsx from 'clsx';
import styles from './Header.module.css';
import useTranslation from 'next-translate/useTranslation';
import { CustomImage } from '../custom-image/CustomImage';
import { Wrapper } from '../wrapper/Wrapper';

export const Header = () => {
  const { t } = useTranslation('common');

  return (
    <header className={styles.header}>
      <Wrapper className={clsx(styles.headerContent)}>
        <Link href="/">
          <CustomImage
            imgSrc="/images/tmdb_logo.svg"
            className={styles.logo}
            width={100}
            height={40}
            external={false}
            priority
            alt={t('siteLogo')}
          />
        </Link>
      </Wrapper>
    </header>
  );
};
