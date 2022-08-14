import { useEffect, useRef, useState } from 'react';
import { throttle } from '@/lib/helpers/throttle';

const HEADER_HEIGHT = 60;

const useToggleHeaderOnScroll = () => {
  const [visible, setVisible] = useState(true);
  const prevScrollPos = useRef(0);
  const currScrollPos = useRef(0);

  useEffect(() => {
    prevScrollPos.current = window.pageYOffset;

    const handleScroll = () => {
      currScrollPos.current = window.pageYOffset;

      prevScrollPos.current > currScrollPos.current ||
      prevScrollPos.current < HEADER_HEIGHT
        ? setVisible(true)
        : setVisible(false);

      prevScrollPos.current = currScrollPos.current;
    };

    const throttledHandleScroll = throttle(handleScroll, 200);
    window.addEventListener('scroll', throttledHandleScroll);

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  });

  return visible;
};

export { useToggleHeaderOnScroll };
