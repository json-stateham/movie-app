const options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export const convertDateFormat = (dateParam: string, local = 'en-EN') => {
  if (!dateParam) return '';
  
  const [year, month, date] = dateParam.split('-').map(Number);
  const dateUTC = new Date(Date.UTC(year, month, date));

  return new Intl.DateTimeFormat(local, options).format(dateUTC);
};

