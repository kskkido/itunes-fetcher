import { Action } from 'redux';
import { rootReducer, RootState } from 'states/root/reducer';
import { noop } from './action';

// TODO fix types
export const batchedActionsReducer = (
  state: RootState | {},
  actions: Action[] = [noop]
) => (
  actions.reduce(
    rootReducer,
    state as RootState
  ) as RootState
);
