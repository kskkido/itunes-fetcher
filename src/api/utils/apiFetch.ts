import { HttpMethod, FetchApiConfig } from 'types/request';
import { createQueryString } from 'utils/queryString';
import { requestJSON } from 'utils/request/fetch';

export default {
  get: <V = any>({ url, params }: FetchApiConfig): Promise<V> => (
    requestJSON(
      `${url}${createQueryString(params)}`,
      {
        method: HttpMethod.get,
      }
    )
  ),
  post: <V = any>({ url, params }: FetchApiConfig): Promise<V> => (
    requestJSON(
      url,
      {
        method: HttpMethod.post,
        body: JSON.stringify(params),
      }
    )
  ),
  put: <V = any>({ url, params }: FetchApiConfig): Promise<V> => (
    requestJSON(
      url,
      {
        method: HttpMethod.put,
        body: JSON.stringify(params),
      }
    )
  ),
  patch: <V = any>({ url, params }: FetchApiConfig): Promise<V> => (
    requestJSON(
      url,
      {
        method: HttpMethod.patch,
        body: JSON.stringify(params),
      }
    )
  ),
  delete: <V = any>({ url, params }: FetchApiConfig): Promise<V> => (
    requestJSON(
      url,
      {
        method: HttpMethod.delete,
        body: JSON.stringify(params),
      }
    )
  ),
};
