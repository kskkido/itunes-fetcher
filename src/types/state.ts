import { Action, ActionCreator } from 'typescript-fsa';

export type ActionOf<V extends ActionCreator<any>> = (
  V extends ActionCreator<infer P> ? Action<P> : never
);

export type ActionsOf<V extends Record<string, ActionCreator<any>>> ={
  [K in keyof V]: ActionOf<V[K]>
}[keyof V];
