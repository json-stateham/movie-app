import { Grid, MovieCard, Wrapper, Pagination } from 'ui/components';
import { getMovies } from 'api/movies';

const Page = props => {
  const { movies } = props;

  return (
    <Wrapper>
      <Grid cols="2-3-4" gap="16-24-32">
        {movies.results.map(({ id, title, poster_path, release_date }) => (
          <MovieCard
            key={id}
            link={`/movie/${id}`}
            image={poster_path as string}
            title={title}
            release={release_date}
          />
        ))}
      </Grid>
      <Pagination currentPage={movies.page} />
    </Wrapper>
  );
};

export async function getServerSideProps({ query }) {
  let { page, category } = query;

  if (page < 1) page = 1;
  if (page > 500) page = 500; // third-party API restriction

  const movies = await getMovies(category, page);

  return {
    props: {
      movies,
    },
  };
}

export default Page;
