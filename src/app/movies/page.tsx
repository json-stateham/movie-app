import { Wrapper, Grid, MovieCard, Pagination } from 'shared/ui';
import { getMovies } from 'api/movies';
import type { MovieCategory } from 'api/movies/types';

const getMoviesData = async ({
  category,
  page,
}: {
  category: MovieCategory;
  page: number;
}) => {
  if (page < 1) page = 1;
  if (page > 500) page = 500; // third-party API restriction

  const movies = await getMovies({ category, page });
  return movies;
};

export default async function Movies({ searchParams }) {
  const { page, category } = await searchParams;

  const movies = await getMoviesData({ page, category });

  return (
    <Wrapper>
      <h2>Top Rated</h2>
      <Grid cols="2-3-4" gap="16-24-32" className="pb-50">
        {movies.results.map(({ id, title, poster_path, release_date }, i) => (
          <MovieCard
            key={id}
            link={`/movie/${id}`}
            image={poster_path as string}
            title={title}
            release={release_date}
            loadImageInPriority={i < 4}
          />
        ))}
      </Grid>
      <Pagination currentPage={Number(page)} />
    </Wrapper>
  );
}
