import { combineReducers, asClearableReducer } from 'states/utils/reducer';
import { albumsSearchResultsClear } from 'states/albums/actions';
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
  albumsSearchResultsClear.type
);
