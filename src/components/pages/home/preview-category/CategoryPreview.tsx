import Link from 'next/link';

import type { MoviesItem } from 'types/common';
import styles from './CategoryPreview.module.css';
import { Grid, MovieCard, Text } from 'shared/ui';
import type { MovieCategory } from 'api/movies/types';

interface Props {
  items: MoviesItem[];
  title: string;
  category: MovieCategory;
}

export const CategoryPreview = ({ items, title, category }: Props) => {
  const renderPosters = (items, maxQty = 4) =>
    items
      .slice(0, maxQty)
      .map(({ id, title, poster_path, release_date }) => (
        <MovieCard
          key={id}
          link={`/movie/${id}`}
          image={poster_path as string}
          title={title}
          release={release_date}
        />
      ));

  return (
    <section className={styles.wrapper}>
      <Text className={styles.title} type="h3" size="m" weight="bold">
        <Link
          href={{
            pathname: 'movies',
            query: { category, page: 1 },
          }}
        >
          {title}
        </Link>
      </Text>
      <Grid cols="2-3-4" gap="16-24-32">
        {renderPosters(items)}
      </Grid>
    </section>
  );
};
