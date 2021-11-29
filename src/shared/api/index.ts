const fetchData = (url: string) =>
  fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error('Fiasco when trying to fetch data')
        // https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default
      }
      return res.json()
    })
    .catch(console.error)

export { fetchData }
