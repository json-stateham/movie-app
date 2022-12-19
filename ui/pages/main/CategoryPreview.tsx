import Link from 'next/link';
import { Grid, MovieCard } from 'ui/components';
import type { IMoviesItem } from 'types/common';
import styles from './CategoryPreview.module.scss';

interface Props {
  items: IMoviesItem[];
  title: string;
  link: string;
}

export const CategoryPreview = ({ items, title, link }: Props) => {
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
      <h2 className={styles.title}>
        <Link
          href={{
            pathname: link,
            query: { page: 1 },
          }}
        >
          {title}
        </Link>
      </h2>
      <Grid cols="2-3-4" gap="16-24-32">
        {renderPosters(items)}
      </Grid>
    </section>
  );
};
