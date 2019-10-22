import { HttpMethod } from 'types/request';

export const createInit = (
  {
    method,
    ...rest
  }: RequestInit & { method: HttpMethod }
): RequestInit => ({
  ...rest,
  method,
});
