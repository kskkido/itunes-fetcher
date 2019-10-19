import { RouteConfigMap } from 'types/routes';
import * as NAVIGATIONS from 'routes/navigations';

const configs: RouteConfigMap = {
  [NAVIGATIONS.NAVIGATION_ARTISTS_ARTIST.name]: {
    screen: () => null,
    path: NAVIGATIONS.NAVIGATION_ARTISTS_ARTIST.path,
    navigationOptions: { title: 'Album' },
  },
};

export default configs;
