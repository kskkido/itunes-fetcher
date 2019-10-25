import { createSelector } from 'reselect';
import { RootState } from 'states/root/reducer';

const selectState = (rootState: RootState) => (
  rootState.applications
);

const selectRecordsState = (rootState: RootState) => (
  selectState(rootState).records
);

const selectRequestState = (rootState: RootState) => (
  selectState(rootState).request
);

export const makeSelectAllIds = () => createSelector(
  selectRecordsState,
  ({ allIds }) => allIds
);

export const makeSelectById = () => createSelector(
  selectRecordsState,
  (_: RootState, { id }: { id: string }) => id,
  ({ byId }, id) => byId[id]
);

export const makeSelectRequestStatus = () => createSelector(
  selectRequestState,
  ({ status }) => status
);

export const makeSelectRequestError = () => createSelector(
  selectRequestState,
  ({ error }) => error
);

export const makeSelectRequestErrorMessage = () => createSelector(
  makeSelectRequestError(),
  error => error && error.message
);
