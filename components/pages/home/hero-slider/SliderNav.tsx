import cx from 'clsx';
import styles from './styles/SliderNav.module.css';
import { useHeroSlider } from './useHeroSlider';

type Props = {
  count: number;
  currentSlide: number;
  handleMoveToIdx: ReturnType<typeof useHeroSlider>['handleMoveToIdx'];
};

export const SliderNav = ({ count, currentSlide, handleMoveToIdx }: Props) => {
  return (
    <div className={styles.container}>
      {[...Array(count).keys()].map(idx => (
        <button
          key={idx}
          onClick={() => handleMoveToIdx(idx)}
          className={cx(
            styles.navItem,
            currentSlide === idx && styles.navItemActive,
          )}
        />
      ))}
    </div>
  );
};
