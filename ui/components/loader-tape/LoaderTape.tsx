import cx from 'clsx';
import styles from './LoaderTape.module.scss';

const loaderStyle = {
  backgroundImage: `url(/images/icons/tape.svg)`,
};

export const LoaderTape = ({ className = '' }) => (
  <div className={cx(styles.loadingTape, className)}>
    <div className={styles.loadingTapeMover} style={loaderStyle} />
  </div>
);
