import { combineReducers, asClearableReducer } from 'states/utils/reducer';
import { clear } from 'states/albums/actions';
import { recordsReducer, RecordsState } from './records';
import { requestReducer, RequestState } from './request';

export type AlbumsState = {
  records: RecordsState;
  request: RequestState;
};

export const albumsReducer = asClearableReducer(
  combineReducers<AlbumsState>({
    records: recordsReducer,
    request: requestReducer,
  }),
  clear.type
);
