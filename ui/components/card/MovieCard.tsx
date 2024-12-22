import Link from 'next/link';
import { BaseCard } from './BaseCard';

interface Props {
  image: string;
  className?: string;
  link: string;
  title: string;
  release: string;
  priority?: boolean;
}

export const MovieCard = ({
  image,
  className = '',
  link,
  release,
  title,
  priority,
}: Props) => {
  const releaseYear = release.split('-')[0] || '';
  const linkTitle = `${link}-${title.replace(/\W+/g, '-').toLowerCase()}`;

  return (
    <BaseCard
      className={className}
      link={linkTitle}
      image={image}
      priority={priority}
    >
      <h5 className="fw-600">
        <Link href={linkTitle}>{title}</Link>
      </h5>
      {releaseYear && <span className="m-0">{releaseYear}</span>}
    </BaseCard>
  );
};
