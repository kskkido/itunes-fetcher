import React, { useCallback } from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import { NAVIGATION_ALBUMS } from 'routes/navigations';
import Heading from 'components/Shared/Heading';

type RootProps = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

const Root: React.SFC<RootProps> = ({ navigation }) => (
  <View>
    <Heading level={2}>Search</Heading>
    <Heading level={2}>Search</Heading>
    <Button
      title="try me"
      onPress={useCallback(() => {
        navigation.navigate(NAVIGATION_ALBUMS.name);
      }, [])}
    />
  </View>
);

export default Root;
