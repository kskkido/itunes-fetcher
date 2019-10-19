import { RouteConfigMap } from 'types/routes';
import * as NAVIGATIONS from 'routes/navigations';

const configs: RouteConfigMap = {
  [NAVIGATIONS.NAVIGATION_ROOT.name]: {
    screen: () => null,
    path: NAVIGATIONS.NAVIGATION_ROOT.path,
    navigationOptions: { title: 'Home' },
  },
  [NAVIGATIONS.NAVIGATION_SEARCH.name]: {
    screen: () => null,
    path: NAVIGATIONS.NAVIGATION_SEARCH.path,
    navigationOptions: { title: 'Search' },
  },
  [NAVIGATIONS.NAVIGATION_ALBUMS.name]: {
    screen: () => null,
    path: NAVIGATIONS.NAVIGATION_ALBUMS.path,
  },
  [NAVIGATIONS.NAVIGATION_ARTISTS.name]: {
    screen: () => null,
    path: NAVIGATIONS.NAVIGATION_ARTISTS.path,
  },
};

export default configs;
