import { combineEpics } from 'redux-observable';
import { albumsEpic } from 'states/albums/epic';
import { songsEpic } from 'states/songs/epic';

export const rootEpic = combineEpics(
  albumsEpic,
  songsEpic as any // fix type
);
