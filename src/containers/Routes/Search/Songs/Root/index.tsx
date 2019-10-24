import React from 'react';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import Songs from 'components/Screens/Songs';

type RootProps = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

const Root: React.SFC<RootProps> = () => (
  <Songs />
);

export default Root;
