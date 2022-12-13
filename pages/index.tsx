import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { Wrapper, Card, Grid, Text } from 'components';
import { HeroSlider } from 'widgets';
import { fetchMainPage } from 'shared/network/fetchMainPage';
import { getMovieDetails } from 'api/movies';
import { convertDateFormat } from 'shared/helpers/convertDateFormat';
import { IMoviesItem } from 'types/common';

interface Props {
  topMovies: IMoviesItem[];
  trendMovies: IMoviesItem[];
}

const Page = ({ topMovies, trendMovies }: Props) => {
  const { t } = useTranslation('common');
  
  const renderPosters = (mainData: IMoviesItem[] = [], maxQty = 4) =>
    mainData
      .slice(0, maxQty)
      .map(({ id, title, poster_path, release_date }) => (
        <Card
          key={id}
          title={title}
          releaseDate={convertDateFormat(release_date)}
          link={`/movie/${id}`}
          image={poster_path as string}
        />
      ));

  return (
    <Wrapper>
      <HeroSlider images={trendMovies} />
      <h2>
        <Link href="/trends">{t('trending').toUpperCase()}</Link>
      </h2>
      <Grid cols="2-3-4" gap="16-24-32" className="mb-50">
        {renderPosters(trendMovies)}
      </Grid>
      <h2>
        <Link href="/top-rated">{t('topRated').toUpperCase()}</Link>
      </h2>
      <Grid cols="2-3-4" gap="16-24-32" className="mb-50">
        {renderPosters(topMovies)}
      </Grid>
    </Wrapper>
  );
};

export async function getStaticProps() {
  const { topMovies, trendMovies } = await fetchMainPage();

  for (const movie of trendMovies) {
    const movieDetail = await getMovieDetails(String(movie.id));
    const trailers = movieDetail.videos.results.filter(
      ({ type }) => type === 'Trailer',
    );
    movie.trailers = trailers;
  }

  return {
    props: {
      topMovies,
      trendMovies,
    },
  };
}

export default Page;
