import { Wrapper, CustomImage } from 'src/shared/ui';
import { getFormattedRuntime } from 'src/shared/helpers/getFormattedRuntime';
import { formatMoney } from 'src/shared/helpers/formatMoney';
import { getMovieDetails } from 'src/api/movies';

const getMovie = async (id: number) => {
  try {
    return await getMovieDetails(id);
  } catch (error) {
    return { message: error };
  }
};

export default async function Movie({ params }) {
  const id = (await params).id.split('-')[0];

  const {
    title,
    release_date,
    poster_path,
    runtime,
    overview,
    budget,
    revenue,
  } = await getMovie(id);

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
}
