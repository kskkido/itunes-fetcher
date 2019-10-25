import * as songsTypes from 'api/songs/types';
import { FormattedRequestError } from 'types/request';
import { createActionCreator } from 'states/utils/action';

export const songsFetch = createActionCreator<songsTypes.GetParams>('songsFetch');
export const songsFetchLoading = createActionCreator('songsFetchLoading');
export const songsFetchSuccess = createActionCreator('songsFetchSuccess');
export const songsFetchFailure = createActionCreator<FormattedRequestError>('songsFetchFailure');
export const songsReceive = createActionCreator<songsTypes.GetPayload>('songsReceive');
export const songsClear = createActionCreator('songsClear');
