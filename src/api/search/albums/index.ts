import apiFetch from 'api/utils/apiFetch';
import { ITUNES_SEARCH_API } from 'constants/urls';
import { SearchParams, SearchPayload } from './types';

export default {
  get: (
    params: SearchParams
  ): Promise<
    SearchPayload
  > => (
    apiFetch.get({
      params: {
        ...params,
        entity: 'album',
        country: 'US',
      },
      url: ITUNES_SEARCH_API,
    })
  ),
};
