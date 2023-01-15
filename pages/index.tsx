import useTranslation from 'next-translate/useTranslation';
import { Wrapper } from 'ui/components';
import { HeroSlider } from 'ui/widgets';
import { CategoryPreview } from 'ui/pages/main/CategoryPreview';
import { fetchMainPage } from 'shared/network/fetchMainPage';
import { getMovieDetails } from 'api/movies';
import { IMoviesItem, IMovieDetails } from 'types/common';

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
    const movieDetails = await Promise.allSettled(
      trendMovies.map(m => getMovieDetails(String(m.id))),
    );

    trendMovies.forEach((movie: IMoviesItem, i) => {
      if (movieDetails[i].status === 'fulfilled') {
        const { value } = movieDetails[i] as PromiseFulfilledResult<IMovieDetails>

        movie.trailers = value?.videos?.results?.filter(({ type }) => type === 'Trailer');
      }
    });
  }

  return {
    props: {
      topMovies,
      trendMovies,
    },
  };
}

export default Page;
