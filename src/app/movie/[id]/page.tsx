import { Wrapper, CustomImage } from 'shared/ui';
import { getFormattedRuntime } from 'shared/helpers/getFormattedRuntime';
import { formatMoney } from 'shared/helpers/formatMoney';
import { getMovieDetails } from 'api/movies';

const getMovie = async (id: number) => {
  try {
    return await getMovieDetails(id);
  } catch (error) {
    return { message: error };
  }
};

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Movie({ params }: Props) {
  const id = (await params).id.split('-')[0];

  const {
    title,
    release_date,
    poster_path,
    runtime,
    overview,
    budget,
    revenue,
  } = await getMovie(Number(id));

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
