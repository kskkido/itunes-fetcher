import { SearchResult } from 'api/search/types';
import { createReducer } from 'states/utils/reducer';
import { searchResultsReceive } from 'states/search/actions';

export type ByIdState = Record<string, SearchResult>;

export const byIdReducer = createReducer<ByIdState>({})
  .case(
    searchResultsReceive,
    (_, payload) => (
      payload.results.reduce(
        (acc, result) => (acc[`${result.trackId}`] = result, acc),
        {} as ByIdState
      )
    )
  );
