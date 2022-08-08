import Link from 'next/link';
import Layout from '@/components/layout/layout';
import { Grid, Text, Thumb } from 'lib/ui';
import { fetchMainPage } from 'lib/network/fetchMainPage';
import { IMoviesItem, IMainPageData } from 'types/common';

export const getStaticProps = async () => ({
  props: await fetchMainPage(),
  revalidate: 10,
});

const App = ({ topMovies, trendMovies }: IMainPageData) => {
  const renderCards = (mainData: IMoviesItem[] = [], maxQty = 5) =>
    mainData.slice(0, maxQty).map(({ id, title, poster_path }) => (
      <Link key={id} href={`/movie/${id}`}>
        <a>
          <Thumb alt={title} image={poster_path} />
        </a>
      </Link>
    ));

  return (
    <>
      <Layout>
        {/* <Link href="movies"> */}
        <Text tag="h2">TOP RATED</Text>
        {/* </Link> */}
        <Grid cols={{ sm: 2, md: 3, lg: 5 }}>{renderCards(topMovies)}</Grid>
        {/* <Link href="movies"> */}
        <Text tag="h2">TRENDING</Text>
        {/* </Link> */}
        <Grid cols={{ sm: 2, md: 3, lg: 5 }}>{renderCards(trendMovies)}</Grid>
      </Layout>
    </>
  );
};

export default App;
