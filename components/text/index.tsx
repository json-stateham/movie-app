import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Text.module.scss';

type TextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';

interface IProps {
  children: ReactNode;
  className?: string;
  tag?: TextTag;
}

const Text = ({ children, className: extraClassName, tag = 'p' }: IProps) => {
  const Component = tag;

  return (
    <Component className={clsx(styles[tag], extraClassName)}>
      {children}
    </Component>
  );
};

export { Text };
