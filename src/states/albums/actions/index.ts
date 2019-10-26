import { GetParams, GetPayload } from 'api/albums/types';
import { FormattedRequestError } from 'types/request';
import { createPrefixedActionCreator } from 'states/utils/action';

const createActionCreator = createPrefixedActionCreator('albums');

export const fetch = createActionCreator<GetParams>('fetch');
export const fetchLoading = createActionCreator('fetchLoading');
export const fetchSuccess = createActionCreator('fetchSuccess');
export const fetchFailure = createActionCreator<FormattedRequestError>('fetchFailure');
export const receive = createActionCreator<GetPayload>('receive');
export const clear = createActionCreator('clear');
