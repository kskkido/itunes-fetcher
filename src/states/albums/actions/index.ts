import { SearchParams, SearchPayload } from 'api/search/albums/types';
import { createActionCreator } from 'states/utils/action';

export const albumsSearch = createActionCreator<SearchParams>('albumsSearch');
export const albumsSearchLoading = createActionCreator('albumsSearchLoading');
export const albumsSearchSuccess = createActionCreator('albumsSearchSuccess');
export const albumsSearchFailure = createActionCreator('albumsSearchFailure');
export const albumsSearchResultReceive = createActionCreator<SearchPayload>('albumsSearchResultsReceive');
export const albumsSearchResultsClear = createActionCreator('albumsSearchResultsClear');
