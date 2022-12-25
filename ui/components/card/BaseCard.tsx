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
