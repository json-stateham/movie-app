import { ReactNode } from 'react';
import Link from 'next/link';
import { BaseCard } from './BaseCard';
import { convertDateFormat } from 'shared/helpers/convertDateFormat';

interface Props {
  image: string;
  className?: string;
  link: string;
  title: string;
  release: string;
}

export const MovieCard = ({ image, className = '', link, release, title }: Props) => {
  return (
    <BaseCard className={className} link={link} image={image}>
      <h5 className="fw-600">
        <Link href={link}>{title}</Link>
      </h5>
      <span className="m-0">{convertDateFormat(release)}</span>
    </BaseCard>
  );
};
