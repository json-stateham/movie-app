import { ReactNode } from 'react';
import Link from 'next/link';
import { Thumb } from 'ui/components';

interface IProps {
  image: string;
  children: ReactNode;
  className?: string;
  link?: string;
}

export const BaseCard = ({ image, children, link, className }: IProps) => (
  <figure className={className}>
    {link ? (
      <Link href={link}>
        <Thumb image={image} alt="" />
      </Link>
    ) : (
      <Thumb image={image} alt="" />
    )}
    {children && <figcaption>{children}</figcaption>}
  </figure>
);

// <figure>
// <Link href={link}>
//   <Thumb image={image} alt="" />
// </Link>
// <figcaption>
//   <h5 className="fw-600">
//     <Link href={link}>{title}</Link>
//   </h5>
//   <span className="m-0">{releaseDate}</span>
// </figcaption>
// </figure>

// border: 1px solid;
// border-image-slice: 1;
// border-image-source: linear-gradient(to top, #ffffff30, #00000000);
