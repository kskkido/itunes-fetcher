import * as Rx from 'rxjs';
import { Epic } from 'redux-observable';
import { ActionsOf } from 'types/state';
import { RequestError } from 'types/request';
import { parseRequestError } from 'utils/request/error';
import { isActionOf } from 'states/utils/action';
import { RootState } from 'states/root/reducer';
import * as actions from 'states/albums/actions';
import search from 'api/albums';

type Actions = ActionsOf<typeof actions>;

export const fetchEpic: Epic<
  Actions,
  Actions,
  RootState
> = action$ => (
  action$
    .filter(isActionOf(actions.fetch))
    .mergeMap(({ payload }) => (
      Rx.Observable.concat<Actions>(
        Rx.Observable.of(actions.fetchLoading()),
        Rx.Observable.fromPromise(search.get(payload))
          .mergeMap(response => (
            Rx.Observable.concat<Actions>(
              Rx.Observable.of(actions.receive(response)),
              Rx.Observable.of(actions.fetchSuccess())
            )
          ))
          .catch((requestError: RequestError) => (
            Rx.Observable.fromPromise(parseRequestError(requestError)
              .then(error => actions.fetchFailure(error))
              .catch(error => actions.fetchFailure(error))
            )
          ))
      )
    ))
);

