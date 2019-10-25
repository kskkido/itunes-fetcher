import * as albumsTypes from 'api/albums/types';
import { FormattedRequestError } from 'types/request';
import { createActionCreator } from 'states/utils/action';

export const albumsFetch = createActionCreator<albumsTypes.GetParams>('albumsFetch');
export const albumsFetchLoading = createActionCreator('albumsFetchLoading');
export const albumsFetchSuccess = createActionCreator('albumsFetchSuccess');
export const albumsFetchFailure = createActionCreator<FormattedRequestError>('albumsFetchFailure');
export const albumsReceive = createActionCreator<albumsTypes.GetPayload>('albumsReceive');
export const albumsClear = createActionCreator('albumsResultsClear');
