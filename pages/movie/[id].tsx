import { GetServerSideProps } from 'next';
import { jsonFetch } from 'lib/network/fetchClient';
import { movieDetailsUrl } from 'lib/network/apiConfig';
import { YoutubeVideo } from 'entities/YoutubeVideo';
import { Text, Separator, Wrapper } from 'lib/ui';
import { IMAGE_BACKDROP } from 'lib/config/images';
import { IMovieDetails } from 'types/common';
import styles from './movie.module.scss';

export const getServerSideProps: GetServerSideProps = async ({ params }) => ({
  props: await jsonFetch(movieDetailsUrl(Number(params?.id))),
});

const Movie = (props: IMovieDetails) => {
  const { backdrop_path, videos, genres, title, overview } = props;
  const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

  console.log('props', props);
  const bgPath = `${IMAGE_URL}/${IMAGE_BACKDROP.L}${backdrop_path}`;
  const trailer = videos.results.filter(({ type }) => type === 'Trailer')[0];

  const renderedGenres = genres.map(({ id, name }, i, selfArr) => (
    <span className={styles.genreItem} key={id}>
      <Text tag="h3">{name}</Text>
      {i !== selfArr.length - 1 && <Separator>&#9898;</Separator>}
    </span>
  ));

  return (
    <>
      <div
        className={styles.bg}
        style={{ backgroundImage: `url(${bgPath})` }}
      />
      <Wrapper>
        <div className={styles.rowHalf}>
          {trailer && (
            <YoutubeVideo embedId={trailer.key} title={trailer.name} />
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
