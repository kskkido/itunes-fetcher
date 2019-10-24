import React from 'react';
import { Text, View } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';

type RootProps = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

const Root: React.SFC<RootProps> = ({ navigation }) => (
  <View>
    <Text>Working on it</Text>
  </View>
);

export default Root;
