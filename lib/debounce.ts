export const debounce = (fn: (...args: any[]) => void, ms: number) => {
  let isCooldown = false;

  return (...args: unknown[]) => {
    if (isCooldown) return;
    fn(...(args as []));
    isCooldown = true;
    queueMicrotask(() => setTimeout(() => (isCooldown = false), ms));
  };
};
