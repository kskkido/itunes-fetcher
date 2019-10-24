import { SearchResult } from 'api/search/songs/types';
import { createReducer } from 'states/utils/reducer';
import * as actions from 'states/songs/actions';

export type ByIdState = (
  Record<string, SearchResult>
);

export const byIdReducer = createReducer<ByIdState>({})
  .case(
    actions.songsSearchResultReceive,
    (_, payload) => (
      payload.results.reduce(
        (acc, result) => (acc[`${result.trackId}`] = result, acc),
        {} as ByIdState
      )
    )
  );
