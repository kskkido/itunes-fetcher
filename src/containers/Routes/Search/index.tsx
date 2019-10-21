import { createStackNavigator } from 'react-navigation-stack';
import * as navigations from 'routes/navigations';
import Albums from 'containers/Routes/Albums';
import Artists from 'containers/Routes/Artists';
import Root from './Root';

const Search = createStackNavigator(
  {
    [navigations.NAVIGATION_SEARCH.name]: {
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
    initialRouteName: navigations.NAVIGATION_SEARCH.name,
  }
);

export default Search;
