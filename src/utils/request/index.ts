import * as R from 'ramda';
import { Request, RequestStatus } from 'types/request';
import * as parsers from './parsers';

const createRequest = <Result>(parser: parsers.Parser<Result>): Request<Result | null> => (
  (url: string, options?: RequestInit) => (
    fetch(url, options)
      .then(parsers.parseValidStatus)
      .then(parsers.safeParser(parser))
  )
);

export const requestText = createRequest(parsers.parseText);
export const requestJSON = createRequest(parsers.parseJSON);

export const composeRequestStatuses: (statuses: RequestStatus[]) => RequestStatus = R.cond([
  [R.any(status => status === 'unsent'), R.always('unsent')],
  [R.any(status => status === 'loading'), R.always('loading')],
  [R.any(status => status === 'error'), R.always('error')],
  [R.T, R.always('success')],
]);
