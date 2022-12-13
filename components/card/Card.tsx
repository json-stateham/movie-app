import { FC } from 'react';
import Link from 'next/link';
import { Thumb } from 'components';

interface IProps {
  image: string;
  title: string;
  releaseDate: string;
  link: string;
  wrapperClassname?: string;
}

export const Card: FC<IProps> = ({
  image,
  title,
  releaseDate,
  link,
  wrapperClassname = 'coolShadowAnimatedHover',
}) => (
  <figure>
    <Link href={link}>
      <Thumb image={image} alt={title} className={wrapperClassname} />
    </Link>
    <figcaption>
      <h5 className="fw-600">
        <Link href={link}>{title}</Link>
      </h5>
      <span className="m-0">{releaseDate}</span>
    </figcaption>
  </figure>
);
