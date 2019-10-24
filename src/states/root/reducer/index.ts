import { combineReducers } from 'states/utils/reducer';
import { albumsReducer, AlbumsState } from 'states/albums/reducer';
import { songsReducer, SongsState } from 'states/songs/reducer';

export type RootState = {
  albums: AlbumsState;
  songs: SongsState;
};

export const rootReducer = combineReducers<RootState>({
  albums: albumsReducer,
  songs: songsReducer,
});
