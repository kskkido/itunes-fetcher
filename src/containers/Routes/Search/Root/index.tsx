import React from 'react';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import Search from 'components/Search';

type RootProps = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

const Root: React.SFC<RootProps> = () => (
  <Search />
);

export default Root;
