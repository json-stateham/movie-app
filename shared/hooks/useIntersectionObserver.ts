import { RefObject, useEffect } from 'react';

interface IProps {
  root?: Element | Document | null;
  target: RefObject<HTMLElement>;
  onIntersect: () => void;
  threshold?: number;
  rootMargin?: string;
  enabled: boolean;
}

export const useIntersectionObserver = ({
  root = null,
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = '900px',
  enabled = false,
}: IProps) => {
  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => entry.isIntersecting && onIntersect()),
      {
        root,
        rootMargin,
        threshold,
      },
    );
    const el = target?.current;

    if (!el) {
      return;
    }

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [target.current, enabled]);
};
