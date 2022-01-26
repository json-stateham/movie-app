type TParams = string | string[][] | Record<string, string> | URLSearchParams

export const serialize = (params: TParams) =>
  new URLSearchParams(params).toString()
