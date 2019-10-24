import { createBottomTabNavigator } from 'react-navigation-tabs';
import * as navigations from 'routes/navigations';
import Home from './Home';
import Search from './Search';

const Routes = createBottomTabNavigator(
  {
    [navigations.NAVIGATION_HOME.name]: Home,
    [navigations.NAVIGATION_SEARCH.name]: Search,
  },
  {
    initialRouteName: navigations.NAVIGATION_SEARCH.name,
  }
);

export default Routes;
