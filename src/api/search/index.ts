import apiFetch from 'api/utils/apiFetch';
import { ITUNES_SEARCH_API } from 'constants/urls';
import { GetParams, GetPayload } from './types';

export default {
  get: <V>(
    {
      country = 'US',
      ...rest
    }: GetParams
  ): Promise<
    GetPayload<V>
  > => (
    apiFetch.get({
      params: {
        country,
        ...rest,
      },
      url: ITUNES_SEARCH_API,
    })
  ),
};
