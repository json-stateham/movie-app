import Link from 'next/link';
import { Card } from '../card/Card';

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
      <h5 className="fw-600">
        <Link href={linkTitle}>{title}</Link>
      </h5>
      {releaseYear && <span className="m-0">{releaseYear}</span>}
    </Card>
  );
};
