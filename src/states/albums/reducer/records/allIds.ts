import { createReducer } from 'states/utils/reducer';
import * as actions from 'states/albums/actions';

export type AllIdsState = string[];

export const allIdsReducer = createReducer<AllIdsState>([])
  .case(
    actions.albumsReceive,
    (_, payload) => payload.results.map(result => `${result.collectionId}`)
  );
