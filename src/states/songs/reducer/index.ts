import { combineReducers, asClearableReducer } from 'states/utils/reducer';
import { clear } from 'states/songs/actions';
import { recordsReducer, RecordsState } from './records';
import { requestReducer, RequestState } from './request';

export type SongsState = {
  records: RecordsState;
  request: RequestState;
};

export const songsReducer = asClearableReducer(
  combineReducers<SongsState>({
    records: recordsReducer,
    request: requestReducer,
  }),
  clear.type
);
