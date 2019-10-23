import { createSelector } from 'reselect';
import { RootState } from 'states/root/reducer';

const selectState = (rootState: RootState) => (
  rootState.search
);

const selectRecordsState = (rootState: RootState) => (
  selectState(rootState).records
);

export const makeSelectSongIds = () => createSelector(
  selectRecordsState,
  state => state.allIds.filter(id => state.byId[id].kind === 'songs')
);

export const makeSelectAlbumIds = () => createSelector(
  selectRecordsState,
  state => state.allIds.filter(id => state.byId[id].kind === 'albums')
);
