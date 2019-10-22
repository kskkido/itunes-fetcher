import { Request } from 'types/request';
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
