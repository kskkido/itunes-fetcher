import { RequestStatus, FormattedRequestError } from 'types/request';
import { createReducer } from 'states/utils/reducer';
import * as actions from 'states/applications/actions';

export type RequestState = {
  status: RequestStatus;
  error?: FormattedRequestError;
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
    (_, payload) => ({ status: 'error', error: payload })
  );