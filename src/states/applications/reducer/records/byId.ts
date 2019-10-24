import { Application } from 'api/applications/types';
import { createReducer } from 'states/utils/reducer';
import * as actions from 'states/applications/actions';

export type ByIdState = (
  Record<string, Application>
);

export const byIdReducer = createReducer<ByIdState>({})
  .case(
    actions.applicationsReceive,
    (_, payload) => (
      payload.results.reduce(
        (acc, result) => (acc[`${result.trackId}`] = result, acc),
        {} as ByIdState
      )
    )
  );
