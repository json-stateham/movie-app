import Link from 'next/link';
import { Card } from '../card/Card';
import { Text } from '../text/Text';

interface Props {
  image: string;
  className?: string;
  link: string;
  title: string;
  release: string;
  loadImageInPriority?: boolean;
}

export const MovieCard = ({
  image,
  className = '',
  link,
  release,
  title,
  loadImageInPriority,
}: Props) => {
  const releaseYear = release.split('-')[0] || '';
  const linkTitle = `${link}-${title.replace(/\W+/g, '-').toLowerCase()}`;

  return (
    <Card
      className={className}
      image={image}
      loadImageInPriority={loadImageInPriority}
    >
      <Text type="h5">
        <Link href={linkTitle}>{title}</Link>
      </Text>
      {releaseYear && <span>{releaseYear}</span>}
    </Card>
  );
};
