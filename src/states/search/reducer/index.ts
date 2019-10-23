import { combineReducers, asClearableReducer } from 'states/utils/reducer';
import { searchResultsClear } from 'states/search/actions';
import { recordsReducer, RecordsState } from './records';
import { requestReducer, RequestState } from './request';

export type SearchState = {
  records: RecordsState;
  request: RequestState;
};

export const searchReducer = asClearableReducer(
  combineReducers<SearchState>({
    records: recordsReducer,
    request: requestReducer,
  }),
  searchResultsClear.type
);
