import { Epic } from 'redux-observable';
import { ActionsOf } from 'types/state';
import { isActionOf } from 'states/utils/action';
import { RootState } from 'states/root/reducer';
import * as actions from 'states/search/actions';

export const recordsEpic: Epic<
  ActionsOf<typeof actions>,
  any,
  RootState
> = action$ => (
  action$
    .filter(isActionOf(actions.searchSuccess))
    .map(({ payload }) => actions.searchResultsReceive(payload))
);
