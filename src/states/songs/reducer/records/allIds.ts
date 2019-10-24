import { createReducer } from 'states/utils/reducer';
import * as actions from 'states/songs/actions';

export type AllIdsState = string[];

export const allIdsReducer = createReducer<AllIdsState>([])
  .case(
    actions.songsReceive,
    (_, payload) => payload.results.map(result => `${result.trackId}`)
  );
