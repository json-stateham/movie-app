import { useEffect, RefObject, useCallback } from 'react';

interface Props {
  ref: RefObject<HTMLElement | null>;
  callback: () => void;
}

export const useClickOutside = ({ ref, callback }: Props) => {
  const handler = useCallback(
    (event: MouseEvent | TouchEvent) => {
      const { target } = event;
      if (!ref.current?.contains(target as Node)) {
        callback();
      }
    },
    [callback, ref],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [ref, callback, handler]);
};
