import { combineEpics } from 'redux-observable';
import { albumsEpic } from 'states/albums/epic';
import { applicationsEpic } from 'states/applications/epic';
import { songsEpic } from 'states/songs/epic';

export const rootEpic = combineEpics(
  albumsEpic,
  applicationsEpic,
  songsEpic as any // fix type
);
