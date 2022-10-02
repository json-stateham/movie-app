import styles from './YoutubeVideo.module.scss';

interface IYoutubeVideo {
  videoId: string;
  title: string;
}

export const YoutubeVideo = ({
  videoId,
  title = 'Youtube video',
}: IYoutubeVideo) => (
  <div className={styles.video}>
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    />
  </div>
);
