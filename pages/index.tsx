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
    <Wrapper className="pb-50">
      {trendMovies && <HeroSlider images={trendMovies} />}
      {trendMovies && (
        <CategoryPreview
          link="/movies/popular"
          title={t('trending')}
          items={trendMovies}
        />
      )}
      {topMovies && (
        <CategoryPreview
          link="/movies/top_rated"
          title={t('topRated')}
          items={topMovies}
        />
      )}
    </Wrapper>
  );
};

export async function getStaticProps() {
  const { topMovies, trendMovies } = await fetchMainPage();

  if (trendMovies) {
    for (const movie of trendMovies) {
      const movieDetail = await getMovieDetails(String(movie.id)).catch(
        console.error,
      );      
      if (movieDetail) {
        movie.trailers = movieDetail.videos.results.filter(
          ({ type }) => type === 'Trailer',
        );
      }
    }
  }

  return {
    props: {
      topMovies,
      trendMovies,
    },
  };
}

export default Page;
