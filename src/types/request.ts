export type Request<Result> = (
  (url: string, options?: RequestInit) => Promise<Result>
);

export enum HttpMethod {
  put = 'PUT',
  post = 'POST',
  get = 'GET',
  delete = 'DELETE',
  patch = 'PATCH',
}

export type RequestError = (
  Error |
  ErrorWithResponse
);

export type ErrorWithResponse = (
  Error &
  {
    response: Response;
  }
);

export type FetchApiConfig = {
  url: string;
  params?: Record<string, any>;
};
