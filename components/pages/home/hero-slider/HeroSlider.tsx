'use client';

import { useMemo } from 'react';
import { KeenSliderOptions } from 'keen-slider/react';
import cx from 'clsx';

import { GENRES } from 'api/genres';
import 'keen-slider/keen-slider.min.css';
import styles from './styles/HeroSlider.module.css';
import type { IMoviesItem } from 'types/common';

import { PlayIcon } from 'components/shared/icons';

import { Button, CustomImage } from 'components/shared';
import { useHeroSlider } from './useHeroSlider';
import { Arrows } from './Arrows';
import { SliderNav } from './SliderNav';
import { Trailer } from './Trailer';

type Props = {
  items: IMoviesItem[];
  options?: KeenSliderOptions;
};

export const HeroSlider = ({ items, options }: Props) => {
  const {
    sliderRef,
    currentSlide,
    handleChangeSlide,
    handleMoveToIdx,
    isTrailerOpened,
    setIsTrailerOpened,
    isFullBleed,
  } = useHeroSlider({
    options,
  });

  const slides = useMemo(
    () =>
      items.slice(0, 10).map(image => (
        <figure
          className={cx('keen-slider__slide', styles.slide)}
          key={image.id}
        >
          <CustomImage
            imgSrc={image.backdrop_path}
            width={1280}
            height={720}
            alt=""
            priority
            imageType="backdrop"
          />
          <figcaption>
            <h2>{image.title}</h2>
            <ul className={styles.tags}>
              {image.genre_ids.slice(0, 3).map((genreId, index) => (
                <li key={index}>
                  <span>{GENRES[genreId]}</span>
                </li>
              ))}
            </ul>
            <p>{image.overview}</p>
          </figcaption>
          {image.trailers && (
            <Button onClick={setIsTrailerOpened} className={styles.playButton}>
              <PlayIcon />
            </Button>
          )}
        </figure>
      )),
    [items, setIsTrailerOpened],
  );

  return (
    <section className={isFullBleed ? 'full-bleed-container' : ''}>
      <div className={styles.slider}>
        <div ref={sliderRef} className="keen-slider" key={String(isFullBleed)}>
          {slides}
          {isTrailerOpened && (
            <Trailer
              setIsTrailerOpened={setIsTrailerOpened}
              currentSlide={items[currentSlide]}
            />
          )}
        </div>
        <Arrows handleChangeSlide={handleChangeSlide} />
      </div>
      <SliderNav
        count={slides.length}
        currentSlide={currentSlide}
        handleMoveToIdx={handleMoveToIdx}
      />
    </section>
  );
};
