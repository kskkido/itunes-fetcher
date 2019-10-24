import { RequestStatus } from 'types/request';
import { createReducer } from 'states/utils/reducer';
import * as actions from 'states/songs/actions';

export type RequestState = {
  status: RequestStatus;
};

export const requestReducer = createReducer<RequestState>({ status: 'unsent' })
  .case(
    actions.songsSearchLoading,
    () => ({ status: 'loading' })
  )
  .case(
    actions.songsSearchSuccess,
    () => ({ status: 'success' })
  )
  .case(
    actions.songsSearchFailure,
    () => ({ status: 'error'})
  );
