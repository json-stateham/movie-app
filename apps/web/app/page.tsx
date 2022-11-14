import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Wrapper, Card } from '@/lib/ui';
import { Grid } from '@/components/grid'
import { Text } from '@/components/text'
import { fetchMainPage } from '@/lib/network/fetchMainPage';
import { convertDateFormat } from '@/lib/helpers/convertDateFormat';
import { IMoviesItem, IMainPageData } from 'types/common';
import { getImageSrc } from 'api/images';
import { jsonFetch } from '@/lib/network/fetchClient';


export default async function Page() {
  //   const { t } = useTranslation('common');

  const { topMovies, trendMovies } = await fetchMainPage();

  const renderPosters = (mainData: IMoviesItem[] = [], maxQty = 5) =>
    mainData
      // .slice(0, maxQty)
      .map(({ id, title, poster_path, release_date }) => (
        <Card
          key={id}
          title={title}
          releaseDate={convertDateFormat(release_date)}
          link={`/movie/${id}`}
          image={getImageSrc(poster_path as string)}
        />
      ));

  return (
    <Wrapper>
      <Text tag="h2" className="mb-12">
        {/* <Link href="/top-rated"> */}
          {/* {t('topRated').toUpperCase()} */}
          TOP RATED
        {/* </Link> */}
      </Text>
      <Grid cols="2-3-5" gap="16-24-32" className="mb-50">
        {renderPosters(topMovies)}
      </Grid>
      <Text tag="h2" className="mb-12">
        {/* <Link href="/trends"> */}
          {/* {t('trending').toUpperCase()} */}
          TRENDING
        {/* </Link> */}
      </Text>
      <Grid cols="2-3-5" gap="16-24-32" className="mb-50">
        {renderPosters(trendMovies)}
      </Grid>
    </Wrapper>
  );
}
