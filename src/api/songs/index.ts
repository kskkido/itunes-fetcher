import search from 'api/search';
import { GetParams, GetPayload } from './types';

export default {
  get: (
    params: GetParams
  ): Promise<
    GetPayload
  > => (
    search.get({
      ...params,
      entity: 'song',
    })
  ),
};
