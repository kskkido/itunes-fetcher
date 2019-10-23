import { RequestStatus } from 'types/request';
import { createReducer } from 'states/utils/reducer';
import * as actions from 'states/search/actions';

export type RequestState = {
  status: RequestStatus;
};

export const requestReducer = createReducer<RequestState>({ status: 'unsent' })
  .case(
    actions.searchLoading,
    () => ({ status: 'loading' })
  )
  .case(
    actions.searchSuccess,
    () => ({ status: 'success' })
  )
  .case(
    actions.searchFailure,
    () => ({ status: 'error'})
  );