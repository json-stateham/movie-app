import { Button, CloseIcon, YoutubeVideo } from 'components/shared';
import styles from './styles/HeroSlider.module.css';
import { useHeroSlider } from './useHeroSlider';
import { IMoviesItem } from 'types/common';

type Props = {
  setIsTrailerOpened: ReturnType<typeof useHeroSlider>['setIsTrailerOpened'];
  currentSlide: IMoviesItem;
};

export const Trailer = ({ currentSlide, setIsTrailerOpened }: Props) => {
  const { name: trailerTitle, key: trailerKey } =
    currentSlide?.trailers?.[0] || {};

  return (
    <div className={styles.trailer}>
      <YoutubeVideo videoId={trailerKey} title={trailerTitle} />
      <Button className={styles.trailerClose} onClick={setIsTrailerOpened}>
        <CloseIcon />
      </Button>
    </div>
  );
};
