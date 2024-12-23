export class HttpError extends Error {
  statusText: string;
  statusCode: number;

  constructor(message: string, response: Response) {
    super(message);
    this.statusText = response.statusText;
    this.statusCode = response.status;
    this.name = 'HttpError';
  }
}
