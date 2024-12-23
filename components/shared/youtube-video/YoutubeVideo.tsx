import cx from 'clsx';
import styles from './YoutubeVideo.module.css';

type YoutubeVideo = {
  videoId: string;
  title: string;
  className?: string;
};

export const YoutubeVideo = ({
  videoId,
  title = 'Youtube video',
  className,
}: YoutubeVideo) => (
  <div className={cx(styles.video, className)}>
    <iframe
      src={`https://www.youtube.com/embed/${videoId} `}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    />
  </div>
);
