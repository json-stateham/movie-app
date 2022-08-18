import { ReactNode, FC } from 'react';

interface IProps {
  children: ReactNode;
  className?: string;
}

export const Box: FC<IProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);
