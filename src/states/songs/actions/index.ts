import { SearchParams, SearchPayload } from 'api/search/songs/types';
import { createActionCreator } from 'states/utils/action';

export const songsSearch = createActionCreator<SearchParams>('songsSearch');
export const songsSearchLoading = createActionCreator('songsSearchLoading');
export const songsSearchSuccess = createActionCreator('songsSearchSuccess');
export const songsSearchFailure = createActionCreator('songsSearchFailure');
export const songsSearchResultReceive = createActionCreator<SearchPayload>('songsSearchResultsReceiveSongs');
export const songsSearchResultsClear = createActionCreator('songsSearchResultsClear');
