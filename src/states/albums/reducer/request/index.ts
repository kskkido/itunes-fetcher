import { RequestStatus } from 'types/request';
import { createReducer } from 'states/utils/reducer';
import * as actions from 'states/albums/actions';

export type RequestState = {
  status: RequestStatus;
};

export const requestReducer = createReducer<RequestState>({ status: 'unsent' })
  .case(
    actions.albumsSearchLoading,
    () => ({ status: 'loading' })
  )
  .case(
    actions.albumsSearchSuccess,
    () => ({ status: 'success' })
  )
  .case(
    actions.albumsSearchFailure,
    () => ({ status: 'error'})
  );