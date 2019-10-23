import { Reducer } from 'redux';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
export { combineReducers } from 'redux';

export const createReducer = reducerWithInitialState;

export const asClearableReducer= <S>(
  reducer: Reducer<S>,
  type: string
): Reducer<S> => (
  (
    state,
    action
  ) => (
    action.type === type
      ? reducer(undefined, action)
      : reducer(state, action)
  )
);
