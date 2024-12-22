import { Wrapper, CustomImage } from 'ui/components';
import { getFormattedRuntime } from 'shared/helpers/getFormattedRuntime';
import { formatMoney } from 'shared/helpers/formatMoney';
import { getMovieDetails } from 'api/movies';

const Movie = ({ movie }) => {
  const {
    title,
    release_date,
    poster_path,
    runtime,
    overview,
    budget,
    revenue,
  } = movie;
  console.log(getFormattedRuntime);
  console.log(movie);
  return (
    <Wrapper>
      <CustomImage
        imgSrc={poster_path}
        imageSize="XL"
        width={400}
        height={650}
      />
      <h1>{`${title} (${release_date.split('-')[0]})`}</h1>
      <p>{getFormattedRuntime(runtime)}</p>
      <p>{overview}</p>
      <p>Budget: {formatMoney(budget)}</p>
      <p>Revenue: {formatMoney(revenue)}</p>
    </Wrapper>
  );
};

export async function getServerSideProps({ query }) {
  const id = query.id.split('-')[0];

  const movie = await getMovieDetails(id);

  return {
    props: {
      movie,
    },
  };
}

export default Movie;
