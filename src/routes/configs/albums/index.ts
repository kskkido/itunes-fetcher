import { RouteConfigMap } from 'types/routes';
import * as NAVIGATIONS from 'routes/navigations';

const configs: RouteConfigMap = {
  [NAVIGATIONS.NAVIGATION_ALBUMS_ALBUM.name]: {
    screen: () => null,
    path: NAVIGATIONS.NAVIGATION_ALBUMS_ALBUM.path,
    navigationOptions: { title: 'Album' },
  },
};

export default configs;
