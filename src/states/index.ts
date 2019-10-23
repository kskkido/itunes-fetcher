import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer, RootState } from 'states/root/reducer';
import { rootEpic } from 'states/root/epic';

export const configurestore = (initialState: Partial<RootState> = {}) => (
  createStore(
    rootReducer,
    initialState,
    applyMiddleware(...[
      createEpicMiddleware(rootEpic),
    ])
  )
);
