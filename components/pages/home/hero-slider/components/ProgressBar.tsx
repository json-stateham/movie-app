import { useAtomValue } from 'jotai';
import styles from '../styles/ProgressBar.module.css';
import cx from 'clsx';
import { isSlideAnimationPausedAtom } from '../store';

type Props = {
  isInProgress: boolean;
  isAnimationCompleted: boolean;
  onClick: () => void;
};

export const ProgressBar = ({
  isInProgress,
  isAnimationCompleted,
  onClick,
}: Props) => {
  const isSlideAnimationPaused = useAtomValue(isSlideAnimationPausedAtom);
  return (
    <button className={styles.progressBar} onClick={onClick}>
      <div
        className={cx(
          styles.bar,
          isInProgress ? styles.barAnimation : '',
          isAnimationCompleted && styles.animationCompleted,
          isSlideAnimationPaused && styles.animationPaused,
        )}
      />
    </button>
  );
};
