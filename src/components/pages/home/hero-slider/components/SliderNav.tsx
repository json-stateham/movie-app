import { useAtomValue } from 'jotai';
import styles from '../styles/SliderNav.module.css';
import { useHeroSlider } from '../useHeroSlider';
import { ProgressBar } from 'src/components/pages/home/hero-slider/components/ProgressBar';
import { currentSlideAtom } from '../store';

type Props = {
  count: number;
  scrollToSlide: ReturnType<typeof useHeroSlider>['scrollToSlide'];
};

export const SliderNav = ({ count, scrollToSlide }: Props) => {
  const currentSlide = useAtomValue(currentSlideAtom);

  return (
    <div className={styles.container}>
      {[...Array(count).keys()].map(idx => {
        return (
          <ProgressBar
            key={idx}
            isInProgress={idx === currentSlide}
            isAnimationCompleted={idx < currentSlide}
            onClick={() => scrollToSlide(idx)}
          />
        );
      })}
    </div>
  );
};
