import useTranslation from 'next-translate/useTranslation';
import { Wrapper } from 'ui/components';
import { HeroSlider } from 'ui/widgets';
import { CategoryPreview } from 'ui/pages/main/CategoryPreview';
import { fetchMainPage } from 'shared/network/fetchMainPage';
import { getMovieDetails } from 'api/movies';
import { IMoviesItem } from 'types/common';

interface Props {
  topMovies: IMoviesItem[];
  trendMovies: IMoviesItem[];
}

const Page = ({ topMovies, trendMovies }: Props) => {
  const { t } = useTranslation('common');

  return (
    <Wrapper>
      <HeroSlider images={trendMovies} />
      <CategoryPreview
        link="/trends"
        title={t('trending')}
        items={trendMovies}
      />
      <CategoryPreview
        link="/top-rated"
        title={t('topRated')}
        items={topMovies}
      />
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
