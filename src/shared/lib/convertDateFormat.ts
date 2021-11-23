export const convertDateFormat = (dateParam: string, local = 'en-EN') => {
  const [year, month, date] = dateParam.split('-').map(num => +num)
  const dateUTC = new Date(Date.UTC(year, month, date))
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return new Intl.DateTimeFormat(local, options).format(dateUTC)
}

// convertDateFormat('2021-03-03') ===> April 3, 2021
