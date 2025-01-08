import type { MoviesItem } from 'src/types/common';
import styles from '../styles/Slides.module.css';
import { CustomImage, Text } from 'src/shared/ui';
import { Genres } from './Genres';
import { useHeroSlider } from '../useHeroSlider';
import { TrailerButton } from './TrailerButton';

type Props = {
  items: MoviesItem[];
  handleTrailer: ReturnType<typeof useHeroSlider>['handleTrailer'];
  count?: number;
};

export const Slides = ({ items, handleTrailer, count = 10 }: Props) => {
  return items.slice(0, count).map(item => (
    <figure className={styles.slide} key={item.id}>
      <CustomImage
        imgSrc={item.backdrop_path}
        width={1280}
        height={720}
        alt=""
        priority
        imageType="backdrop"
      />
      <figcaption key={item.id}>
        <Text type="h3" size="xl">
          {item.title}
        </Text>
        <Genres genreIds={item.genre_ids} />
      </figcaption>
      {item.trailers && (
        <TrailerButton handleTrailer={handleTrailer} action="open" />
      )}
    </figure>
  ));
};
