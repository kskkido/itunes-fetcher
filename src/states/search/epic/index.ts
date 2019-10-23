import { combineEpics } from 'redux-observable';
import { recordsEpic } from './records';
import { requestEpic } from './request';

export const searchEpic = combineEpics(
  requestEpic,
  recordsEpic
);
