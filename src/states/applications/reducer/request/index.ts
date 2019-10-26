import { RequestStatus, FormattedRequestError } from 'types/request';
import { createReducer } from 'states/utils/reducer';
import * as actions from 'states/applications/actions';

export type RequestState = {
  status: RequestStatus;
  error?: FormattedRequestError;
};

export const requestReducer = createReducer<RequestState>({ status: 'unsent' })
  .case(
    actions.fetchLoading,
    () => ({ status: 'loading' })
  )
  .case(
    actions.fetchSuccess,
    () => ({ status: 'success' })
  )
  .case(
    actions.fetchFailure,
    (_, payload) => ({ status: 'error', error: payload })
  );