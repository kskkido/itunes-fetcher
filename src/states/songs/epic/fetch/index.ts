import * as Rx from 'rxjs';
import { Epic } from 'redux-observable';
import { ActionsOf } from 'types/state';
import { RequestError } from 'types/request';
import { parseRequestError } from 'utils/request/error';
import { isActionOf } from 'states/utils/action';
import { RootState } from 'states/root/reducer';
import { RootActions } from 'states/root/actions';
import * as actions from 'states/songs/actions';
import search from 'api/songs';

type Actions = ActionsOf<typeof actions>;

export const fetchEpic: Epic<
  RootActions,
  Actions,
  RootState
> = action$ => (
  action$
    .filter(isActionOf(actions.songsFetch))
    .mergeMap(({ payload }) => (
      Rx.Observable.concat<Actions>(
        Rx.Observable.of(actions.songsFetchLoading()),
        Rx.Observable.fromPromise(search.get(payload))
          .mergeMap(response => (
            Rx.Observable.concat<Actions>(
              Rx.Observable.of(actions.songsReceive(response)),
              Rx.Observable.of(actions.songsFetchSuccess())
            )
          ))
          .catch((requestError: RequestError) => (
            Rx.Observable.fromPromise(parseRequestError(requestError)
              .then(error => actions.songsFetchFailure(error))
              .catch(error => actions.songsFetchFailure(error))
            )
          ))
      )
    ))
);

