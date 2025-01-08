import { ReactNode, createElement } from 'react';
import cx from 'clsx';
import 'shared/styles/typography.css';

type TextType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
type Size = 'xxxl' | 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs';
type Weight = 'light' | 'normal' | 'bold';

type Props = {
  children: ReactNode;
  type?: TextType;
  size?: Size;
  weight?: Weight;
  className?: string;
};

export const Text = ({
  children,
  className,
  type = 'p',
  size = 'm',
  weight = 'normal',
}: Props) => {
  const prefix = ['p', 'span'].includes(type) ? 'body' : 'heading';
  const prefixedClassName = `${prefix}-${size}`;
  const weightClassName = `weight-${weight}`;

  return createElement(
    type,
    { className: cx(prefixedClassName, weightClassName, className) },
    children,
  );
};
