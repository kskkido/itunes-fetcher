import * as Rx from 'rxjs';
import { Epic } from 'redux-observable';
import { ActionsOf } from 'types/state';
import { RequestError } from 'types/request';
import { isActionOf } from 'states/utils/action';
import { RootState } from 'states/root/reducer';
import { RootActions } from 'states/root/actions';
import * as actions from 'states/albums/actions';
import search from 'api/albums';

type Actions = ActionsOf<typeof actions>;

export const fetchEpic: Epic<
  RootActions,
  Actions,
  RootState
> = action$ => (
  action$
    .filter(isActionOf(actions.albumsFetch))
    .mergeMap(({ payload }) => (
      Rx.Observable.concat<Actions>(
        Rx.Observable.of(actions.albumsFetchLoading()),
        Rx.Observable.fromPromise(search.get(payload))
          .mergeMap(response => (
            Rx.Observable.concat<Actions>(
              Rx.Observable.of(actions.albumsReceive(response)),
              Rx.Observable.of(actions.albumsFetchSuccess())
            )
          ))
          .catch((_: RequestError) => (
            Rx.Observable.of(actions.albumsFetchFailure()))
          )
      )
    ))
);

