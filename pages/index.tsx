import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Grid, Text, Thumb, Wrapper } from 'lib/ui';
import { fetchMainPage } from 'lib/network/fetchMainPage';
import { IMoviesItem, IMainPageData } from 'types/common';

type TLocale = { locale: string };

export const getStaticProps = async ({ locale }: TLocale) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
    ...await fetchMainPage()
  },
  revalidate: 10,
});


const App = ({ topMovies, trendMovies }: IMainPageData) => {
  const { t } = useTranslation('common');
  
  const renderCards = (mainData: IMoviesItem[] = [], maxQty = 5) =>
    mainData.slice(0, maxQty).map(({ id, title, poster_path }) => (
      <Link key={id} href={`/movie/${id}`}>
        <a>
          <Thumb alt={title} image={poster_path} />
        </a>
      </Link>
    ));

  return (
    <Wrapper>
        {/* <Link href="movies"> */}
        <Text tag="h2">{t('topRated').toUpperCase()}</Text>
        {/* </Link> */}
        <Grid cols={{ sm: 2, md: 3, lg: 5 }}>{renderCards(topMovies)}</Grid>
        {/* <Link href="movies"> */}
        <Text tag="h2">{t('trending').toUpperCase()}</Text>
        {/* </Link> */}
        <Grid cols={{ sm: 2, md: 3, lg: 5 }}>{renderCards(trendMovies)}</Grid>
    </Wrapper>
  );
};

export default App;
