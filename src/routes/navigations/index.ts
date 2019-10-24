import { join } from 'utils/path';

export const NAVIGATION_HOME = {
  name: 'home',
  path: '/',
};

export const NAVIGATION_SEARCH = {
  name: 'search',
  path: join(NAVIGATION_HOME.path, '/search'),
};

export const NAVIGATION_SEARCH_ALBUMS = {
  name: 'searchAlbums',
  path: join(NAVIGATION_SEARCH.path, '/albums'),
};

export const NAVIGATION_SEARCH_APPLICATIONS = {
  name: 'searchApplications',
  path: join(NAVIGATION_SEARCH.path, '/applications'),
};

export const NAVIGATION_SEARCH_SONGS = {
  name: 'searchSongs',
  path: join(NAVIGATION_SEARCH.path, '/songs'),
};
