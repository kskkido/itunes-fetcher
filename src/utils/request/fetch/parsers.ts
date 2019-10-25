import { ErrorWithResponse } from 'types/request';
import * as conditionals from './conditionals';

export type Parser<Result> = (respones: Response) => Promise<Result>;

export const safeParser = <V>(parser: Parser<V>) => (
  (response: Response): Promise<V | null> => (
    conditionals.isEmptyStatus(response)
      ? Promise.resolve(null)
      : parser(response)
  )
);

export const parseValidStatus = (response: Response) => {
  if (conditionals.isSuccessStatus(response)) {
    return response;
  }

  const error = new Error(response.statusText) as ErrorWithResponse;

  error.response = response;
  throw error;
};

export const parseValue = (response: Response) => (
  conditionals.isEmptyStatus(response)
    ? null
    : response
);

export const parseText = (response: Response) => (
  response.text()
);

export const parseJSON = (response: Response) => (
  parseText(response)
    .then(text => (
      text
      ? JSON.parse(text)
      : {}
    ))
);
