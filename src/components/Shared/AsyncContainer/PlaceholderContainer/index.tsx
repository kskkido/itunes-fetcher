import styles from './styles';
import React from 'react';
import { View } from 'react-native';

type PlaceholderContainerProps = {
  children: React.ReactNode;
};

const PlaceholderContainer: React.SFC<PlaceholderContainerProps> = ({
  children,
}) => (
  <View style={styles.base}>
    {children}
  </View>
);

export default PlaceholderContainer;
