import { ReactNode, createElement } from 'react';
import cx from 'clsx';
import 'styles/typography.css';

type TextType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
type Size = 'xxxl' | 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs';

type Props = {
  children: ReactNode;
  type: TextType;
  size: Size;
  className?: string;
};

export const Text = ({
  children,
  className,
  type = 'p',
  size = 'm',
}: Props) => {
  const prefix = ['p', 'span'].includes(type) ? 'body' : 'heading';
  const prefixedClassName = `${prefix}-${size}`;

  return createElement(
    type,
    { className: cx(prefixedClassName, className) },
    children,
  );
};
