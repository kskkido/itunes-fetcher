import { createStackNavigator } from 'react-navigation-stack';
import * as navigations from 'routes/navigations';
import Albums from 'containers/Routes/Albums';
import Artists from 'containers/Routes/Artists';
import Root from './Root';
import Results from './Results';

const Search = createStackNavigator(
  {
    [navigations.NAVIGATION_SEARCH.name]: {
      screen: Root,
      navigationOptions: { title: 'Search' },
    },
    [navigations.NAVIGATION_SEARCH_RESULTS.name]: {
      screen: Results,
      navigationOptions: { title: 'Results' },
    },
    [navigations.NAVIGATION_ALBUMS.name]: {
      screen: Albums,
    },
    [navigations.NAVIGATION_ARTISTS.name]: {
      screen: Artists,
    },
  },
  {
    initialRouteName: navigations.NAVIGATION_SEARCH.name,
  }
);

export default Search;
