import styles from './styles';
import React from 'react';
import { View } from 'react-native';

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.SFC<ContainerProps> = ({
  children,
}) => (
  <View style={styles.base}>
    {children}
  </View>
);

export default Container;
