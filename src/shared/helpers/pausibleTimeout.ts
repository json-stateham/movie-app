type Props = {
  callback: CallableFunction;
  delay: number;
};

export const pausableTimeout = ({ callback, delay }: Props) => {
  let timeoutId: number = 0;
  let startTime: number = 0;
  let remaining = delay;

  const resetRemaining = () => {
    remaining = delay;
  };

  const pause = () => {
    clearTimeout(timeoutId);
    remaining -= Date.now() - startTime;
  };

  const start = () => {
    clearTimeout(timeoutId);
    resetRemaining();
    startTime = Date.now();
    timeoutId = setTimeout(callback, remaining);
  };

  const resume = () => {
    clearTimeout(timeoutId);
    if (remaining <= 0) resetRemaining();
    startTime = Date.now();
    timeoutId = setTimeout(callback, remaining);
  };

  const clear = () => {
    clearTimeout(timeoutId);
    resetRemaining();
  };

  return { start, pause, resume, clear };
};
