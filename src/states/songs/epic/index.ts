import { combineEpics } from 'redux-observable';
import { fetchEpic } from './fetch';

export const songsEpic = combineEpics(
  fetchEpic
);
