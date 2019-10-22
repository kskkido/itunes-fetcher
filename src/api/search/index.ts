import apiFetch from 'api/utils/apiFetch';
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
        country: 'US',
      },
      url: 'https://itunes.apple.com/search',
    })
  ),
};