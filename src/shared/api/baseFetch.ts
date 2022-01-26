const baseFetch = (
  url: RequestInfo,
  { body, ...customConfig }: Partial<RequestInit> = {},
) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  })

  const config: RequestInit = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  }
  if (body) {
    config.body =
      body.constructor.name === 'FormData' ? body : JSON.stringify(body)
  }

  return fetch(url, config)
    .then(res => {
      if (!res.ok) {
        throw new Error('Fiasco when trying to fetch data')
      }
      return res.json()
    })
    .catch(err => {
      console.error(err)
      return Promise.reject(err)
    })
}

export { baseFetch }
