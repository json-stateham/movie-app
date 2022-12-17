import { useState, useMemo, useReducer, useEffect, useCallback } from 'react';
import { useKeenSlider, KeenSliderOptions } from 'keen-slider/react';
import cx from 'clsx';
import {
  Button,
  CustomImage,
  ArrowIcon,
  CloseIcon,
  PlayIcon,
} from 'ui/components';
import { YoutubeVideo } from 'ui/components';
import { GENRES } from 'api/genres';
import 'keen-slider/keen-slider.min.css';
import styles from './HeroSlider.module.scss';
import type { IMoviesItem } from 'types/common';

interface Props {
  images: IMoviesItem[];
  options?: KeenSliderOptions;
}

export const HeroSlider = ({ images, options }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [trailerOpen, setTrailerOpen] = useReducer(prev => !prev, false);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: { origin: 'auto', perView: 1 },
      defaultAnimation: {
        duration: 400,
        // https://easings.net/#easeOutSine
        easing: x => Math.sin((x * Math.PI) / 2),
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      ...options,
    },
    [
      (slider: any) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;

        const clearNextTimeout = () => clearTimeout(timeout);

        const nextTimeout = () => {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => slider.next(), 2000);
        };

        const onMouseOver = () => {
          mouseOver = true;
          clearNextTimeout();
        };

        const onMouseOut = () => {
          mouseOver = false;
          nextTimeout();
        };

        const onStart = () => {
          slider.container.addEventListener('mouseover', onMouseOver);
          slider.container.addEventListener('mouseout', onMouseOut);
          slider.on('animationEnded', nextTimeout);
          nextTimeout();
        };

        const onStop = () => {
          slider.container.removeEventListener('mouseover', onMouseOver);
          slider.container.removeEventListener('mouseout', onMouseOut);
          slider.on('animationEnded', nextTimeout, true);
          clearNextTimeout();
        };

        slider.on('created', onStart);
        slider.on('destroyed', onStop);
        slider.on('stopped', onStop);
        slider.on('resumed', onStart);
        slider.on('dragStarted', clearNextTimeout);
        slider.on('updated', nextTimeout);
      },
    ],
  );

  useEffect(() => {
    if (trailerOpen) instanceRef.current?.emit('stopped' as any);
    else instanceRef.current?.emit('resumed' as any);
  }, [trailerOpen]);

  const slides = useMemo(
    () =>
      images.slice(0, 10).map((image, index) => (
        <figure
          className={cx('keen-slider__slide', styles.slide)}
          key={image.id}
        >
          <CustomImage
            imgSrc={image.backdrop_path}
            width={1280}
            height={720}
            alt=""
            priority={index === 0}
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
          <Button
            children={<PlayIcon />}
            onClick={setTrailerOpen}
            className={styles.playButton}
          />
        </figure>
      )),
    [],
  );

  const handlePrevSlide = useCallback(() => instanceRef.current?.prev(), []);
  const handleNextSlide = useCallback(() => instanceRef.current?.next(), []);

  const { name: trailerTitle, key: trailerKey } =
    images[currentSlide].trailers[0] || {};

  return (
    <section>
      <div className={styles.slider}>
        <div ref={sliderRef} className="keen-slider">
          {slides}
          {trailerOpen && (
            <div className={styles.trailer}>
              <YoutubeVideo videoId={trailerKey} title={trailerTitle} />
              <Button
                children={<CloseIcon />}
                className={styles.trailerClose}
                onClick={setTrailerOpen}
              />
            </div>
          )}
        </div>

        <Button
          children={<ArrowIcon />}
          className={cx(styles.arrow, styles.arrowLeft)}
          onClick={handlePrevSlide}
        />
        <Button
          children={<ArrowIcon />}
          className={cx(styles.arrow, styles.arrowRight)}
          onClick={handleNextSlide}
        />
      </div>

      {loaded && (
        <div className={styles.dots}>
          {[...Array(slides.length).keys()].map(idx => (
            <button
              key={idx}
              type="button"
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={cx(
                styles.dot,
                currentSlide === idx && styles.dotActive,
              )}
            />
          ))}
        </div>
      )}
    </section>
  );
};
