import { RequestStatus } from 'types/request';
import { createReducer } from 'states/utils/reducer';
import * as actions from 'states/applications/actions';

export type RequestState = {
  status: RequestStatus;
};

export const requestReducer = createReducer<RequestState>({ status: 'unsent' })
  .case(
    actions.applicationsFetchLoading,
    () => ({ status: 'loading' })
  )
  .case(
    actions.applicationsFetchSuccess,
    () => ({ status: 'success' })
  )
  .case(
    actions.applicationsFetchFailure,
    () => ({ status: 'error'})
  );