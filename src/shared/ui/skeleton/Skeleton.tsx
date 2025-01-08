import styles from './Skeleton.module.css';

type Props = {
  width: number;
  height: number;
};

export const Skeleton = ({ width, height }: Props) => {
  return (
    <div
      className={styles.skeleton}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
};
