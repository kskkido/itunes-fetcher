import * as Rx from 'rxjs';
import { Epic } from 'redux-observable';
import { ActionsOf } from 'types/state';
import { RequestError } from 'types/request';
import { RootState } from 'states/root/reducer';
import { isActionOf } from 'states/utils/action';
import * as actions from 'states/search/actions';
import search from 'api/search';

export const requestEpic: Epic<
  ActionsOf<typeof actions>,
  any,
  RootState
> = action$ => (
  action$
    .filter(isActionOf(actions.search))
    .mergeMap(({ payload }) => (
      Rx.Observable.concat<ActionsOf<typeof actions>>(
        Rx.Observable.of(actions.searchLoading()),
        Rx.Observable.fromPromise(search.get(payload))
          .mergeMap(response => (
            Rx.Observable.of(actions.searchSuccess(response))
          ))
          .catch((error: RequestError) => (
            Rx.Observable.of())
          )
      )
    ))
);

