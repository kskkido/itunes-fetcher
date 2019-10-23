import { SearchParams, SearchPayload } from 'api/search/types';
import { createActionCreator } from 'states/utils/action';

export const search = createActionCreator<SearchParams>('search');
export const searchLoading = createActionCreator('searchLoading');
export const searchSuccess = createActionCreator<SearchPayload>('searchSuccess');
export const searchFailure = createActionCreator('searchFailure');
export const searchResultsReceive = createActionCreator<SearchPayload>('searchResultsReceive');
export const searchResultsClear = createActionCreator('searchResultsClear');
