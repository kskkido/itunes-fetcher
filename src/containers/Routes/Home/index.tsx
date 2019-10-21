import { createStackNavigator } from 'react-navigation-stack';
import Albums from 'containers/Routes/Albums';
import Artists from 'containers/Routes/Artists';
import * as navigations from 'routes/navigations';

import Root from './Root';

const Home = createStackNavigator(
  {
    [navigations.NAVIGATION_HOME.name]: {
      screen: Root,
    },
    [navigations.NAVIGATION_ALBUMS.name]: {
      screen: Albums,
    },
    [navigations.NAVIGATION_ARTISTS.name]: {
      screen: Artists,
    },
  },
  {
    initialRouteName: navigations.NAVIGATION_HOME.name,
  }
);

export default Home;
