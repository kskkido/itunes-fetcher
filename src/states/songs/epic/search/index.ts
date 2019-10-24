import * as Rx from 'rxjs';
import { Epic } from 'redux-observable';
import { ActionsOf } from 'types/state';
import { RequestError } from 'types/request';
import { isActionOf } from 'states/utils/action';
import { RootState } from 'states/root/reducer';
import { RootActions } from 'states/root/actions';
import * as actions from 'states/songs/actions';
import search from 'api/search/songs';

type Actions = ActionsOf<typeof actions>;

export const searchEpic: Epic<
  RootActions,
  Actions,
  RootState
> = action$ => (
  action$
    .filter(isActionOf(actions.songsSearch))
    .mergeMap(({ payload }) => (
      Rx.Observable.concat<Actions>(
        Rx.Observable.of(actions.songsSearchLoading()),
        Rx.Observable.fromPromise(search.get(payload))
          .mergeMap(response => (
            Rx.Observable.concat<Actions>(
              Rx.Observable.of(actions.songsSearchResultReceive(response)),
              Rx.Observable.of(actions.songsSearchSuccess())
            )
          ))
          .catch((_: RequestError) => (
            Rx.Observable.of(actions.songsSearchFailure()))
          )
      )
    ))
);

