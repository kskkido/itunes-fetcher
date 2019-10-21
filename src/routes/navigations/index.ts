import { join } from 'utils/path';

export const NAVIGATION_HOME = {
  name: 'home',
  path: '/',
};

export const NAVIGATION_SEARCH = {
  name: 'search',
  path: join(NAVIGATION_HOME.path, '/search'),
};

export const NAVIGATION_ALBUMS = {
  name: 'albums',
  path: join(NAVIGATION_HOME.path, '/albums'),
};

export const NAVIGATION_ALBUMS_ALBUM = {
  name: 'album',
  path: join(NAVIGATION_ALBUMS.path, '/:identifier'),
};

export const NAVIGATION_ARTISTS = {
  name: 'artists',
  path: '/artists',
};

export const NAVIGATION_ARTISTS_ARTIST = {
  name: 'artist',
  path: join(NAVIGATION_ARTISTS.path, '/:identifier'),
};
