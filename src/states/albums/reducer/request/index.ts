import { RequestStatus, FormattedRequestError } from 'types/request';
import { createReducer } from 'states/utils/reducer';
import * as actions from 'states/albums/actions';

export type RequestState = {
  status: RequestStatus;
  error?: FormattedRequestError;
};

export const requestReducer = createReducer<RequestState>({ status: 'unsent' })
  .case(
    actions.albumsFetchLoading,
    () => ({ status: 'loading' })
  )
  .case(
    actions.albumsFetchSuccess,
    () => ({ status: 'success' })
  )
  .case(
    actions.albumsFetchFailure,
    (_, payload) => ({ status: 'error', error: payload })
  );