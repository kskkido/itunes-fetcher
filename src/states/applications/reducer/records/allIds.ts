import { createReducer } from 'states/utils/reducer';
import * as actions from 'states/applications/actions';

export type AllIdsState = string[];

export const allIdsReducer = createReducer<AllIdsState>([])
  .case(
    actions.applicationsReceive,
    (_, payload) => payload.results.map(result => `${result.trackId}`)
  );
