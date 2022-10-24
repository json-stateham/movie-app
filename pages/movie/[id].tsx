import { GetServerSideProps } from 'next';
import { getMovieDetails } from 'api/movies';
import { getBackdropImage } from 'api/images';
import { YoutubeVideo } from 'entities/YoutubeVideo';
import { Text, Separator, Wrapper } from 'lib/ui';
import { IMovieDetails } from 'types/common';
import styles from './movie.module.scss';

export const getServerSideProps: GetServerSideProps = async ({ params }) => ({
  props: await getMovieDetails(params?.id as string),
});

const Movie = (props: IMovieDetails) => {
  const { backdrop_path, videos, genres, title, overview } = props;

  console.log(props)

  const trailer = videos.results.filter(({ type }) => type === 'Trailer')[0];

  const renderedGenres = genres.map(({ id, name }, i, selfArr) => (
    <span className={styles.genreItem} key={id}>
      <Text tag="h3">{name}</Text>
      {i !== selfArr.length - 1 && <Separator>&#9898;</Separator>}
    </span>
  ));

  const backdropStyle = backdrop_path
    ? { backgroundImage: `url(${getBackdropImage(backdrop_path)})` }
    : {};

  return (
    <>
      <div className={styles.bg} style={backdropStyle} />
      <Wrapper>
        <div className={styles.rowHalf}>
          {trailer && (
            <YoutubeVideo videoId={trailer.key} title={trailer.name} />
          )}
          <div className={styles.content}>
            <Text tag="h1">{title}</Text>
            <div className={styles.genres}>{renderedGenres}</div>
            <Text>{overview}</Text>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Movie;
