import { RequestError, ErrorWithResponse } from 'types/request';

export const isErrorWithResponse = (error: RequestError): error is ErrorWithResponse => (
  'response' in error
);
