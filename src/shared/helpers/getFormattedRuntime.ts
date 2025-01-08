export const getFormattedRuntime = minutes => {
  if (!minutes) return '';
  const d = new Date(0, 0, 0, 0, minutes);
  const hours = d.getHours();
  const mins = d.getMinutes();
  const hoursStr = hours ? `${hours}h ` : '';
  const minsStr = mins ? `${mins}m` : '';
  return `${hoursStr}${minsStr}`.trim();
};
