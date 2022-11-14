import { getMovieDetails } from 'api/movies';
import { IMovieDetails } from 'types/common';

interface Props {
    params: {
      slug: string
    }
  }

export default async function Head({ params }: Props) {
  const movieDetails: IMovieDetails = await getMovieDetails(params.slug);

  return (
    <>
      <title>{movieDetails.title}</title>
    </>
  );
}
