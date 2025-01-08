'use client';

import styles from './styles/HeroSlider.module.css';
import type { MoviesItem } from 'src/types/common';

import { useHeroSlider } from './useHeroSlider';
import { Arrows } from './components/Arrows';
import { SliderNav } from './components/SliderNav';
import { Trailer } from './components/Trailer';
import { Slides } from './components/Slides';

type Props = {
  items: MoviesItem[];
};

const SLIDES_COUNT = 10;

export const HeroSlider = ({ items }: Props) => {
  const {
    sliderRef,
    handleChangeSlide,
    scrollToSlide,
    isTrailerOpened,
    handleTrailer,
    isFullBleed,
  } = useHeroSlider();

  return (
    <section className={isFullBleed ? 'full-bleed-container' : ''}>
      <div className={styles.slider}>
        <div className={styles.viewport} ref={sliderRef}>
          <div className={styles.container}>
            <Slides
              items={items}
              handleTrailer={handleTrailer}
              count={SLIDES_COUNT}
            />
          </div>
        </div>
        <Arrows handleChangeSlide={handleChangeSlide} />
        {isTrailerOpened && (
          <Trailer handleTrailer={handleTrailer} items={items} />
        )}
      </div>
      <SliderNav count={SLIDES_COUNT} scrollToSlide={scrollToSlide} />
    </section>
  );
};
