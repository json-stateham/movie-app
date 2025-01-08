import { ArrowIcon, Button } from 'src/shared/ui';
import cx from 'clsx';
import styles from '../styles/Arrows.module.css';
import { useHeroSlider } from '../useHeroSlider';
import { memo } from 'react';

type ArrowsProps = {
  handleChangeSlide: ReturnType<typeof useHeroSlider>['handleChangeSlide'];
};

export const Arrows = memo(({ handleChangeSlide }: ArrowsProps) => {
  return (
    <>
      <Button
        className={cx(styles.arrow, styles.arrowLeft)}
        onClick={() => handleChangeSlide('prev')}
      >
        <ArrowIcon />
      </Button>
      <Button
        className={cx(styles.arrow, styles.arrowRight)}
        onClick={() => handleChangeSlide('next')}
      >
        <ArrowIcon />
      </Button>
    </>
  );
});

Arrows.displayName = 'Arrows';
