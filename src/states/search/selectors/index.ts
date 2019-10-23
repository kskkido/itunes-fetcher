import { createSelector } from 'reselect';
import { RootState } from 'states/root/reducer';

const selectState = (rootState: RootState) => (
  rootState.search
);

const selectRecordsState = (rootState: RootState) => (
  selectState(rootState).records
);

const selectRequestState = (rootState: RootState) => (
  selectState(rootState).request
);

export const makeSelectResultIds = () => createSelector(
  selectRecordsState,
  state => state.allIds
);

export const makeSelectSongIds = () => createSelector(
  selectRecordsState,
  state => state.allIds.filter(id => state.byId[id].kind === 'song')
);

export const makeSelectAlbumIds = () => createSelector(
  selectRecordsState,
  state => state.allIds.filter(id => state.byId[id].kind === 'album')
);

export const makeSelectResultById = () => createSelector(
  selectRecordsState,
  (_: RootState, { id }: { id: string }) => id,
  ({ byId }, id) => byId[id]
);

export const makeSelectSearchStatus = () => createSelector(
  selectRequestState,
  ({ status }) => status
);