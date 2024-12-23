import { useEffect } from 'react';

interface Props {
  callback: () => void;
}

export const useEscapeKey = ({ callback }: Props) => {
  useEffect(() => {
    const onEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') callback();
    };

    document.body.addEventListener('keydown', onEscapeKey);
    return () => document.body.removeEventListener('keydown', onEscapeKey);
  }, [callback]);
};
