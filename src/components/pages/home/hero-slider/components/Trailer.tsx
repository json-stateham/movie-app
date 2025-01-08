import { YoutubeVideo } from 'shared/ui';
import styles from '../styles/Trailer.module.css';

import { MoviesItem } from 'types/common';
import { useHeroSlider } from '../useHeroSlider';
import { useAtomValue } from 'jotai';
import { currentSlideAtom } from '../store';
import { TrailerButton } from './TrailerButton';

type Props = {
  handleTrailer: ReturnType<typeof useHeroSlider>['handleTrailer'];
  items: MoviesItem[];
};

export const Trailer = ({ items, handleTrailer }: Props) => {
  const currentSlide = useAtomValue(currentSlideAtom);

  const { name: trailerTitle, key: trailerKey } =
    items[currentSlide]?.trailers?.[0] || {};

  return (
    <div className={styles.trailer}>
      <YoutubeVideo videoId={trailerKey} title={trailerTitle} />
      <TrailerButton handleTrailer={handleTrailer} action="close" />
    </div>
  );
};
