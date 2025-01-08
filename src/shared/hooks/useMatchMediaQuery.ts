import { useCallback, useEffect, useState } from 'react';

const getMatches = (query: string): boolean => {
  return globalThis.matchMedia(query).matches;
};

export function useMatchMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  const handleChange = useCallback(() => {
    setMatches(getMatches(query));
  }, [query]);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();
    matchMedia.addEventListener('change', handleChange);
    return () => matchMedia.removeEventListener('change', handleChange);
  }, [handleChange, query]);

  return matches;
}
