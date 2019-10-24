import { createStackNavigator } from 'react-navigation-stack';
import * as navigations from 'routes/navigations';
import Albums from './Albums/Root';
import Songs from './Songs/Root';

const Results = createStackNavigator(
  {
    [navigations.NAVIGATION_SEARCH_RESULTS_ALBUMS.name]: {
      screen: Albums,
      navigationOptions: { title: 'Albums' },
    },
    [navigations.NAVIGATION_SEARCH_RESULTS_SONGS.name]: {
      screen: Songs,
    },
  },
  {
    initialRouteName: navigations.NAVIGATION_SEARCH_RESULTS_ALBUMS.name,
    headerMode: 'none',
  }
);

export default Results;
