import { useMatchMediaQuery } from '@/lib/hooks/useMatchMediaQuery';
import {
  KeenSliderInstance,
  KeenSliderOptions,
  useKeenSlider,
} from 'keen-slider/react';
import { useCallback, useEffect, useReducer, useState } from 'react';

type Props = {
  options?: KeenSliderOptions;
};

const CHANGE_SLIDE_TIMEOUT = 3000;

export const useHeroSlider = ({ options }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTrailerOpened, setIsTrailerOpened] = useReducer(
    prev => !prev,
    false,
  );

  const isFullBleed = useMatchMediaQuery('(max-width: 1324px)');

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
      ...options,
    },
    [
      (slider: KeenSliderInstance) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;

        const clearNextTimeout = () => clearTimeout(timeout);

        const nextTimeout = () => {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => slider.next(), CHANGE_SLIDE_TIMEOUT);
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
        slider.on('animationStopped', onStop);
        slider.on('animationStarted', onStart);
        slider.on('dragStarted', clearNextTimeout);
        slider.on('updated', nextTimeout);
      },
    ],
  );

  const handleChangeSlide = useCallback(
    (direction: 'prev' | 'next') => {
      if (direction === 'next') {
        instanceRef.current?.next();
      } else {
        instanceRef.current?.prev();
      }
    },
    [instanceRef],
  );

  const handleMoveToIdx = useCallback(
    (idx: number) => {
      instanceRef.current?.moveToIdx(idx);
    },
    [instanceRef],
  );

  useEffect(() => {
    const onTrailerOpened = () => {
      if (isTrailerOpened) {
        instanceRef.current?.emit('animationStopped');
      } else {
        instanceRef.current?.emit('animationStarted');
      }
    };
    onTrailerOpened();
  }, [instanceRef, isTrailerOpened]);

  return {
    sliderRef,
    currentSlide,
    handleChangeSlide,
    handleMoveToIdx,
    isTrailerOpened,
    setIsTrailerOpened,
    isFullBleed,
  };
};
