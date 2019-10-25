import { HttpMethod, FetchApiConfig } from 'types/request';
import { createQueryString } from 'utils/queryString';
import { requestJSON } from 'utils/request/fetch';
import { createInit } from './init';

export default {
  get: <V = any>({ url, params }: FetchApiConfig): Promise<V> => (
    requestJSON(
      `${url}${createQueryString(params)}`,
      createInit({
        method: HttpMethod.get,
      })
    )
  ),
  post: <V = any>({ url, params }: FetchApiConfig): Promise<V> => (
    requestJSON(
        url,
        createInit({
          method: HttpMethod.post,
          body: JSON.stringify(params),
        })
    )
  ),
  put: <V = any>({ url, params }: FetchApiConfig): Promise<V> => (
    requestJSON(
        url,
        createInit({
          method: HttpMethod.put,
          body: JSON.stringify(params),
        })
    )
  ),
  patch: <V = any>({ url, params }: FetchApiConfig): Promise<V> => (
    requestJSON(
        url,
        createInit({
          method: HttpMethod.patch,
          body: JSON.stringify(params),
        })
    )
  ),
  delete: <V = any>({ url, params }: FetchApiConfig): Promise<V> => (
    requestJSON(
        url,
        createInit({
          method: HttpMethod.delete,
          body: JSON.stringify(params),
        })
    )
  ),
};
