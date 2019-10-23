import { combineReducers } from 'states/utils/reducer';
import { searchReducer, SearchState } from 'states/search/reducer';

export type RootState = {
  search: SearchState;
};

export const rootReducer = combineReducers<RootState>({
  search: searchReducer,
});
