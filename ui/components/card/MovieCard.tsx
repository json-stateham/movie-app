
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
  priority
}: Props) => {
  const releaseYear = release.split('-')[0] || '';

  return (
    <BaseCard className={className} link={link} image={image} priority={priority}>
      <h5 className="fw-600">
        <Link href={link}>{title}</Link>
      </h5>
      {releaseYear && <span className="m-0">{releaseYear}</span>}
    </BaseCard>
  );
};
