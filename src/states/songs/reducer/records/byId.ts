import { Song } from 'api/songs/types';
import { createReducer } from 'states/utils/reducer';
import * as actions from 'states/songs/actions';

export type ByIdState = (
  Record<string, Song>
);

export const byIdReducer = createReducer<ByIdState>({})
  .case(
    actions.receive,
    (_, payload) => (
      payload.results.reduce(
        (acc, result) => (acc[`${result.trackId}`] = result, acc),
        {} as ByIdState
      )
    )
  );
