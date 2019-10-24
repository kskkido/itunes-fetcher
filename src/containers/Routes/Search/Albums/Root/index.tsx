import React from 'react';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import Albums from 'components/Screens/Albums';

type RootProps = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

const Root: React.SFC<RootProps> = () => (
  <Albums />
);

export default Root;
