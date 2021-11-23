export type TParamsObj =
  | string
  | string[][]
  | Record<string, string>
  | URLSearchParams

export const generateSearchParams = (paramsObj: TParamsObj) =>
  new URLSearchParams(paramsObj).toString()
