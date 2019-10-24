import { combineReducers } from 'states/utils/reducer';
import { albumsReducer, AlbumsState } from 'states/albums/reducer';
import { applicationsReducer, ApplicationsState } from 'states/applications/reducer';
import { songsReducer, SongsState } from 'states/songs/reducer';

export type RootState = {
  albums: AlbumsState;
  applications: ApplicationsState;
  songs: SongsState;
};

export const rootReducer = combineReducers<RootState>({
  albums: albumsReducer,
  applications: applicationsReducer,
  songs: songsReducer,
});
