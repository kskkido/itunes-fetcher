import React, { useCallback } from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import { NAVIGATION_ARTISTS } from 'routes/navigations';

type RootProps = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

const Root: React.SFC<RootProps> = ({ navigation }) => (
  <View>
    <Text>Home</Text>
    <Button
      title="try me"
      onPress={useCallback(
        () => {
          navigation.navigate(NAVIGATION_ARTISTS.name);
        },
        []
      )}
    />
  </View>
);

export default Root;
