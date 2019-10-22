import queryString from 'query-string';
import { isEmpty } from 'ramda';

export const createQueryString = (obj?: Record<string, any>): string => (
  isEmpty(obj) || obj === undefined
    ? ''
    : `?${queryString.stringify(obj)}`
);

export const parseQueryString = <O extends {}>(query: string): O => (
  queryString.parse(query) as O
);
