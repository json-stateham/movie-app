import { ReactNode } from 'react';
import { Thumb } from '../thumb/Thumb';

type Props = {
  image: string;
  children: ReactNode;
  className?: string;
  loadImageInPriority?: boolean;
};

export const Card = ({
  image,
  children,
  className,
  loadImageInPriority,
}: Props) => (
  <figure className={className}>
    <Thumb image={image} alt="" loadImageInPriority={loadImageInPriority} />
    {children && <figcaption>{children}</figcaption>}
  </figure>
);
