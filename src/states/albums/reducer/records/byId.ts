import { SearchResult } from 'api/search/albums/types';
import { createReducer } from 'states/utils/reducer';
import * as actions from 'states/albums/actions';

export type ByIdState = (
  Record<string, SearchResult>
);

export const byIdReducer = createReducer<ByIdState>({})
  .case(
    actions.albumsSearchResultReceive,
    (_, payload) => (
      payload.results.reduce(
        (acc, result) => (acc[`${result.collectionId}`] = result, acc),
        {} as ByIdState
      )
    )
  );
