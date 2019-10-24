import { createStackNavigator } from 'react-navigation-stack';
import * as navigations from 'routes/navigations';
import Albums from './Albums/Root';
import Applications from './Applications/Root';
import Songs from './Songs/Root';
import Root from './Root';

const Search = createStackNavigator(
  {
    [navigations.NAVIGATION_SEARCH.name]: {
      screen: Root,
      navigationOptions: { title: 'Search' },
    },
    [navigations.NAVIGATION_SEARCH_ALBUMS.name]: {
      screen: Albums,
      navigationOptions: { title: 'Albums' },
    },
    [navigations.NAVIGATION_SEARCH_APPLICATIONS.name]: {
      screen: Applications,
      navigationOptions: { title: 'Applications' },
    },
    [navigations.NAVIGATION_SEARCH_SONGS.name]: {
      screen: Songs,
      navigationOptions: { title: 'Songs' },
    },
  },
  {
    initialRouteName: navigations.NAVIGATION_SEARCH.name,
  }
);

export default Search;
