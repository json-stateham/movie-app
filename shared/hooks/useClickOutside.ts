import { useEffect, RefObject } from 'react';

interface Props {
  ref: RefObject<HTMLElement>;
  callback: () => void;
}

export const useClickOutside = ({ ref, callback }: Props) => {
  const handler = (event: MouseEvent | TouchEvent) => {
    const { target } = event;
    if (ref.current && !ref.current.contains(target as any)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [ref, callback]);
};
