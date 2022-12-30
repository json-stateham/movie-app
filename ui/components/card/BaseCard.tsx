import { ReactNode } from 'react';
import Link from 'next/link';
import { Thumb } from 'ui/components';

interface IProps {
  image: string;
  children: ReactNode;
  className?: string;
  link?: string;
  priority?: boolean;
}

export const BaseCard = ({ image, children, link, className, priority }: IProps) => (
  <figure className={className}>
    {link ? (
      <Link href={link}>
        <Thumb image={image} alt="" priority={priority} />
      </Link>
    ) : (
      <Thumb image={image} alt="" priority={priority} />
    )}
    {children && <figcaption>{children}</figcaption>}
  </figure>
);
