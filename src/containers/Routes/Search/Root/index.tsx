import React, { useCallback } from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import { NAVIGATION_ALBUMS } from 'routes/navigations';

type RootProps = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

const Root: React.SFC<RootProps> = ({ navigation }) => (
  <View>
    <Text>Search</Text>
    <Button
      title="try me"
      onPress={useCallback(() => {
        navigation.navigate(NAVIGATION_ALBUMS.name);
      }, [])}
    />
  </View>
);

export default Root;
