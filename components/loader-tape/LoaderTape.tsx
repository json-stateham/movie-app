import styles from './LoaderTape.module.scss';

const loaderStyle = {
  backgroundImage: `url(/images/icons/tape.svg)`,
};

export const LoaderTape = () => (
  <div className={styles.loadingTape}>
    <div className={styles.loadingTapeMover} style={loaderStyle} />
  </div>
);
