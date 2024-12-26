import { GENRES } from 'api/genres';
import styles from '../styles/Genres.module.css';

type Props = {
  genreIds: number[];
};

export const Genres = ({ genreIds }: Props) => {
  return (
    <ul className={styles.genres}>
      {genreIds.slice(0, 3).map(genreId => (
        <li key={genreId}>
          <span>{GENRES[genreId]}</span>
        </li>
      ))}
    </ul>
  );
};
