import { RequestError, ErrorWithResponse, FormattedRequestError } from 'types/request';
import { isErrorWithResponse } from './match';

export const formatErrorWithResponse = ({ response }: ErrorWithResponse): FormattedRequestError => ({
  status: response.status,
  message: `Error code: ${response.status}`,
});

export const formatError = (data: Error): FormattedRequestError => ({
  data,
  message: 'Network error',
});

export const formatRequestError = (error: RequestError): FormattedRequestError => (
  isErrorWithResponse(error)
    ? formatErrorWithResponse(error)
    : formatError(error)
);
