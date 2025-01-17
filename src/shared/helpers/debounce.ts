export const debounce = (fn: (...args: unknown[]) => void, delay: number) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: unknown[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};
