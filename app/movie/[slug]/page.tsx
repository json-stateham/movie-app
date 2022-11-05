import { getMovieDetails } from 'api/movies';
import { getBackdropImage } from 'api/images';
import { YoutubeVideo } from 'entities/YoutubeVideo';
import { Separator, Wrapper } from 'lib/ui';
import { Text } from 'components/text';
import { IMovieDetails } from 'types/common';
import styles from './styles.module.scss';

interface Props {
  params: {
    slug: string
  }
}

export default async function Page({ params }: Props) {
  const details: IMovieDetails = await getMovieDetails(params.slug)
  const { backdrop_path, videos, genres, title, overview } = details;

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
}
