import { ReactNode, createElement } from 'react';
import cx from 'clsx';

type TextType =
  | 'heading-primary'
  | 'heading-secondary'
  | 'heading-tertiary'
  | 'text-label'
  | 'text-body';

const TextTypeTags = {
  'heading-primary': 'h1',
  'heading-secondary': 'h2',
  'heading-tertiary': 'h3',
  'text-label': 'span',
  'text-body': 'p',
};

interface Props {
  children: ReactNode;
  className?: string;
  type: TextType;
}

export const Text = ({ children, className, type }: Props) => {  
  const Component = TextTypeTags[type];

  return createElement(Component, { className: cx(type, className) }, children);
};
