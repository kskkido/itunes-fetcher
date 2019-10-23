import { actionCreatorFactory, ActionCreator, Action } from 'typescript-fsa';

export const createPrefixedActionCreator = actionCreatorFactory;
export const createActionCreator = createPrefixedActionCreator();

export const isActionOf = <V>(actionCreator: ActionCreator<V>) => (
  (action: Action<any>): action is Action<V> => (
    actionCreator.type === action.type
  )
);
