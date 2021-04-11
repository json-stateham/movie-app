export const convertDateFormat = x => {
  const date = new Date(Date.UTC(...x.split('-')))
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Intl.DateTimeFormat('en-EN', options).format(date)
}

//convertDateFormat('2021-03-03') ===> April 3, 2021