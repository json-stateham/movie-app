import { HttpError } from './httpError';

interface CustomOptions {
  timeout?: number;
  retry?: number;
  controller?: AbortController;
}

type Options = RequestInit & CustomOptions;

export const fetchClient = async (
  url: RequestInfo,
  { timeout = 0, controller, ...options }: Options = {},
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

  if (config.body && config.body.constructor.name !== 'FormData') {
    config.body = JSON.stringify(config.body);
  }

  if (!controller) controller = new AbortController();
  const { signal } = controller;

  if (timeout > 0) {
    queueMicrotask(() => setTimeout(() => controller?.abort(), timeout));
  }

  const response = await fetch(url, { ...config, signal });

  if (!response.ok) {
    return Promise.reject(
      new HttpError(`Fiasco to fetch from: ${response.url}`, response),
    );
  }

  return response;
};

export const jsonFetch = (url: RequestInfo, options?: Options) =>
  fetchClient(url, options).then(res => res.json());
