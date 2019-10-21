import { createStackNavigator } from 'react-navigation-stack';
import * as navigations from 'routes/navigations';
import Artist from './Artist/Root';

const Artists = createStackNavigator(
  {
    [navigations.NAVIGATION_ARTISTS_ARTIST.name]: {
      screen: Artist,
    },
  },
  {
    initialRouteName: navigations.NAVIGATION_ARTISTS_ARTIST.name,
    headerMode: 'none',
  }
);

export default Artists;
