import { createReducer } from 'states/utils/reducer';
import { searchResultsReceive } from 'states/search/actions';

export type AllIdsState = Array<string| number>;

export const allIdsReducer = createReducer<AllIdsState>([])
  .case(
    searchResultsReceive,
    (_, payload) => payload.results.map(result => result.trackId)
  );