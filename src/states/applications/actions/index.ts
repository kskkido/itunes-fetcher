import * as applicationsTypes from 'api/applications/types';
import { createActionCreator } from 'states/utils/action';

export const applicationsFetch = createActionCreator<applicationsTypes.GetParams>('applicationsFetch');
export const applicationsFetchLoading = createActionCreator('applicationsFetchLoading');
export const applicationsFetchSuccess = createActionCreator('applicationsFetchSuccess');
export const applicationsFetchFailure = createActionCreator('applicationsFetchFailure');
export const applicationsReceive = createActionCreator<applicationsTypes.GetPayload>('applicationsReceive');
export const applicationsClear = createActionCreator('applicationsResultsClear');
