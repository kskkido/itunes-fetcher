import { RequestStatus, FormattedRequestError } from 'types/request';
import { createReducer } from 'states/utils/reducer';
import * as actions from 'states/songs/actions';

export type RequestState = {
  status: RequestStatus;
  error?: FormattedRequestError;
};

export const requestReducer = createReducer<RequestState>({ status: 'unsent' })
  .case(
    actions.songsFetchLoading,
    () => ({ status: 'loading' })
  )
  .case(
    actions.songsFetchSuccess,
    () => ({ status: 'success' })
  )
  .case(
    actions.songsFetchFailure,
    (_, payload) => ({ status: 'error', error: payload })
  );
