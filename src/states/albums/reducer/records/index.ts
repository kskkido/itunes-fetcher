import { combineReducers } from 'states/utils/reducer';
import { allIdsReducer, AllIdsState } from './allIds';
import { byIdReducer, ByIdState } from './byId';

export type RecordsState = {
  allIds: AllIdsState;
  byId: ByIdState;
};

export const recordsReducer = combineReducers<RecordsState>({
  allIds: allIdsReducer,
  byId: byIdReducer,
});
