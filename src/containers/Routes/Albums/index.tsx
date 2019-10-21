import { createStackNavigator } from 'react-navigation-stack';
import * as navigations from 'routes/navigations';
import Album from './Album/Root';

const Albums = createStackNavigator(
  {
    [navigations.NAVIGATION_ALBUMS_ALBUM.name]: {
      screen: Album,
    },
  },
  {
    initialRouteName: navigations.NAVIGATION_ALBUMS_ALBUM.name,
    headerMode: 'none',
  }
);

export default Albums;
