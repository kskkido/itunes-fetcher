import React, { useCallback } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';
import { NAVIGATION_ALBUMS } from 'routes/navigations';

type RootProps = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

const Root: React.SFC<RootProps> = ({ navigation }) => (
  <View>
    <Text>Artist</Text>
    <Button
      title="try me"
      onPress={useCallback(
        () => {
          navigation.navigate(NAVIGATION_ALBUMS.name);
        },
        []
      )}
    />
  </View>
);

export default Root;
