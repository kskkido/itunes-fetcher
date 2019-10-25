import * as Rx from 'rxjs';
import { Epic } from 'redux-observable';
import { ActionsOf } from 'types/state';
import { RequestError } from 'types/request';
import { parseRequestError } from 'utils/request/error';
import { isActionOf } from 'states/utils/action';
import { RootState } from 'states/root/reducer';
import { RootActions } from 'states/root/actions';
import * as actions from 'states/applications/actions';
import search from 'api/applications';

type Actions = ActionsOf<typeof actions>;

export const fetchEpic: Epic<
  RootActions,
  Actions,
  RootState
> = action$ => (
  action$
    .filter(isActionOf(actions.applicationsFetch))
    .mergeMap(({ payload }) => (
      Rx.Observable.concat<Actions>(
        Rx.Observable.of(actions.applicationsFetchLoading()),
        Rx.Observable.fromPromise(search.get(payload))
          .mergeMap(response => (
            Rx.Observable.concat<Actions>(
              Rx.Observable.of(actions.applicationsReceive(response)),
              Rx.Observable.of(actions.applicationsFetchSuccess())
            )
          ))
          .catch((requestError: RequestError) => (
            Rx.Observable.fromPromise(parseRequestError(requestError)
              .then(error => actions.applicationsFetchFailure(error))
              .catch(error => actions.applicationsFetchFailure(error))
            )
          ))
      )
    ))
);

