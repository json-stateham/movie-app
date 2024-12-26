import { useMatchMediaQuery } from '@/lib/hooks/useMatchMediaQuery';
import { useSetAtom } from 'jotai';
import { useCallback, useEffect, useReducer, useRef } from 'react';
import { currentSlideAtom, isSlideAnimationPausedAtom } from './store';
import useEmblaCarousel from 'embla-carousel-react';
import { pausableTimeout } from '@/lib/helpers/pausibleTimeout';
import { TrailerAction } from './types';

const SLIDE_ANIMATION_DURATION = 5000;

export const useHeroSlider = () => {
  const setCurrentSlide = useSetAtom(currentSlideAtom);
  const setIsSlideAnimationPaused = useSetAtom(isSlideAnimationPausedAtom);
  const isSliderInit = useRef(false);
  const isFullBleed = useMatchMediaQuery('(max-width: 1324px)');
  const [isTrailerOpened, toggleIsTrailerOpened] = useReducer(
    prev => !prev,
    false,
  );

  const timeout = useRef<ReturnType<typeof pausableTimeout>>(null);

  const [sliderRef, sliderApi] = useEmblaCarousel({ loop: true });

  const handleChangeSlide = useCallback(
    (direction: 'prev' | 'next') => {
      if (direction === 'next') {
        sliderApi?.scrollNext();
      } else {
        sliderApi?.scrollPrev();
      }
    },
    [sliderApi],
  );

  const scrollToSlide = useCallback(
    (index: number) => {
      sliderApi?.scrollTo(index);
    },
    [sliderApi],
  );

  const handleTrailer = useCallback(
    (action: TrailerAction) => {
      const isOpen = action === 'open';
      setIsSlideAnimationPaused(isOpen);

      if (isOpen) {
        timeout.current?.pause();
      } else {
        timeout.current?.resume();
      }

      toggleIsTrailerOpened();
    },
    [setIsSlideAnimationPaused],
  );

  useEffect(() => {
    if (!sliderApi) return;

    if (!timeout.current) {
      timeout.current = pausableTimeout({
        callback: () => sliderApi.scrollNext(),
        delay: SLIDE_ANIMATION_DURATION,
      });
    }

    const { start, pause, resume, clear } = timeout.current;

    const onSelect = () => {
      setCurrentSlide(sliderApi.selectedScrollSnap());
      start();
    };

    const onPointerDown = () => {
      pause();
      setIsSlideAnimationPaused(true);
    };

    const onPointerUp = () => {
      resume();
      setIsSlideAnimationPaused(false);
    };

    if (!isSliderInit.current) {
      start();
      isSliderInit.current = true;
    }

    sliderApi.on('select', onSelect);
    sliderApi.on('pointerDown', onPointerDown);
    sliderApi.on('pointerUp', onPointerUp);
    sliderApi.on('destroy', clear);

    return () => {
      sliderApi.off('select', onSelect);
      sliderApi.off('pointerDown', onPointerDown);
      sliderApi.off('pointerUp', onPointerUp);
      sliderApi.off('destroy', clear);
    };
  }, [isTrailerOpened, setCurrentSlide, setIsSlideAnimationPaused, sliderApi]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--hero-slider-animation-duration',
      `${SLIDE_ANIMATION_DURATION}ms`,
    );
  }, []);

  return {
    sliderRef,
    sliderApi,
    handleChangeSlide,
    scrollToSlide,
    isTrailerOpened,
    handleTrailer,
    isFullBleed,
  };
};
