import { RequestError, FormattedRequestError } from 'types/request';
import { formatRequestError } from './format';
import { isErrorWithResponse } from './match';

export const parseRequestError = (error: RequestError): Promise<FormattedRequestError> => (
  (isErrorWithResponse(error)
    ? error.response.json().then(data => ({ ...formatRequestError(error), data }))
    : Promise.reject()
  ).catch(() => formatRequestError(error))
);
