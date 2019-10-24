import { createStackNavigator } from 'react-navigation-stack';
import * as navigations from 'routes/navigations';

import Root from './Root';

const Home = createStackNavigator(
  {
    [navigations.NAVIGATION_HOME.name]: {
      screen: Root,
      navigationOptions: { title: 'Home' },
    },
  },
  {
    initialRouteName: navigations.NAVIGATION_HOME.name,
  }
);

export default Home;
