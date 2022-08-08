import { HttpError } from './httpError';

interface CustomOptions {
  timeout?: number;
  retry?: number;
  controller?: AbortController;
}

type Options = RequestInit & CustomOptions;

const baseFetch = (
  url: RequestInfo,
  { timeout = 0, retry = 0, controller, ...options }: Options = {},
): Promise<Response> => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  const config: RequestInit = {
    method: options.body ? 'POST' : 'GET',
    redirect: 'error',
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
  };

  if (config.body) {
    config.body =
      config.body.constructor.name === 'FormData'
        ? config.body
        : JSON.stringify(config.body);
  }

  if (!controller) controller = new AbortController();
  const { signal } = controller;

  if (timeout > 0) {
    queueMicrotask(() => setTimeout(() => controller?.abort(), timeout));
  }

  return fetch(url, { ...config, signal })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(
          new HttpError(`Fiasco to fetch from: ${res.url}`, res),
        );
      }
      return res;
    })
    .catch(error => {
      console.error(error);

      if (retry > 0) {
        console.log(`Retrying to fetch: ${url} \n Retry: ${retry}`);
        return baseFetch(url, { ...options, retry: retry - 1 });
      }

      return Promise.reject(error);
    });
};

export const jsonFetch = (url: RequestInfo, options?: Options) =>
  baseFetch(url, options).then(res => res.json());
