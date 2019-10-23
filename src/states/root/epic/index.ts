import { combineEpics } from 'redux-observable';
import { searchEpic } from 'states/search/epic';

export const rootEpic = combineEpics(
  searchEpic
);
