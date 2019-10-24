import { RequestStatus } from 'types/request';
import { createReducer } from 'states/utils/reducer';
import * as actions from 'states/songs/actions';

export type RequestState = {
  status: RequestStatus;
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
    () => ({ status: 'error'})
  );
