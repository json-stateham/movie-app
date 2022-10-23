import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Grid, Text, Wrapper, Card } from 'lib/ui';
import { fetchMainPage } from 'lib/network/fetchMainPage';
import { convertDateFormat } from 'lib/helpers/convertDateFormat';
import { IMoviesItem, IMainPageData } from 'types/common';
import { getImageSrc } from 'api/images';

type TLocale = { locale: string };

export const getStaticProps = async ({ locale }: TLocale) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
    ...(await fetchMainPage()),
  },
  revalidate: 10,
});

const App = ({ topMovies, trendMovies }: IMainPageData) => {
  const { t } = useTranslation('common');

  const renderPosters = (mainData: IMoviesItem[] = [], maxQty = 5) =>
    mainData
      .slice(0, maxQty)
      .map(({ id, title, poster_path, release_date }) => (
        <Card
          key={id}
          info={{
            title,
            releaseDate: convertDateFormat(release_date),
            link: `/movie/${id}`,
          }}
          image={getImageSrc(poster_path as string)}
        />
      ));

  return (
    <Wrapper>
      <Text tag="h2" className="mb-12">
        <Link href="/top-rated">
          <a>{t('topRated').toUpperCase()}</a>
        </Link>
      </Text>
      <Grid cols={[2, 3, 5]} gap={[16, 24, 32]} className="mb-50">
        {renderPosters(topMovies)}
      </Grid>
      <Text tag="h2" className="mb-12">
        <Link href="/trends">
          <a>{t('trending').toUpperCase()}</a>
        </Link>
      </Text>
      <Grid cols={[2, 3, 5]} gap={[16, 24, 32]} className="mb-50">
        {renderPosters(trendMovies)}
      </Grid>
    </Wrapper>
  );
};

export default App;
