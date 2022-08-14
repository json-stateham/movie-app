type TParams = Record<string, string> | URLSearchParams;

export const serialUrlParams = (params: TParams) => `${new URLSearchParams(params)}`;
