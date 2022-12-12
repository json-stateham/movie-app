import { useEffect, useState } from 'react';

const useCustomEventDetail = (eventName: string) => {
  const [eventState, setEventState] = useState(1);

  const handleDetail = ({ detail }: CustomEventInit) => setEventState(detail);

  useEffect(() => {
    window.addEventListener(eventName, handleDetail, false)
    return () => window.removeEventListener(eventName, handleDetail, false);
  }, [eventName]);

  return eventState;
};

export { useCustomEventDetail };
