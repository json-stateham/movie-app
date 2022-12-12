type TParams = Record<string, string> | URLSearchParams;

export const serialUrlParams = (params: TParams) =>
  String(new URLSearchParams(params));
