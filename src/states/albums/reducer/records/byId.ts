import { Album } from 'api/albums/types';
import { createReducer } from 'states/utils/reducer';
import * as actions from 'states/albums/actions';

export type ByIdState = (
  Record<string, Album>
);

export const byIdReducer = createReducer<ByIdState>({})
  .case(
    actions.receive,
    (_, payload) => (
      payload.results.reduce(
        (acc, result) => (acc[`${result.collectionId}`] = result, acc),
        {} as ByIdState
      )
    )
  );
