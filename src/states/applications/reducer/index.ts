import { combineReducers, asClearableReducer } from 'states/utils/reducer';
import { applicationsClear } from 'states/applications/actions';
import { recordsReducer, RecordsState } from './records';
import { requestReducer, RequestState } from './request';

export type ApplicationsState = {
  records: RecordsState;
  request: RequestState;
};

export const applicationsReducer = asClearableReducer(
  combineReducers<ApplicationsState>({
    records: recordsReducer,
    request: requestReducer,
  }),
  applicationsClear.type
);
