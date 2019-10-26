import * as R from 'ramda';
import { RequestStatus } from 'types/request';

export const composeRequestStatuses: (statuses: RequestStatus[]) => RequestStatus = R.cond([
  [R.any(status => status === 'loading'), R.always('loading')],
  [R.any(status => status === 'error'), R.always('error')],
  [R.any(status => status === 'unsent'), R.always('unsent')],
  [R.T, R.always('success')],
]);
