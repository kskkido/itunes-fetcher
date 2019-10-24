import { join } from 'utils/path';

export const NAVIGATION_HOME = {
  name: 'home',
  path: '/',
};

export const NAVIGATION_SEARCH = {
  name: 'search',
  path: join(NAVIGATION_HOME.path, '/search'),
};

export const NAVIGATION_SEARCH_SONGS = {
  name: 'searchResultsSongs',
  path: join(NAVIGATION_SEARCH.path, '/songs'),
};

export const NAVIGATION_SEARCH_ALBUMS = {
  name: 'searchResultsAlbums',
  path: join(NAVIGATION_SEARCH.path, '/albums'),
};
