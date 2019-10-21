import styles from './styles';
import React from 'react';
import { SafeAreaView } from 'react-native';

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.SFC<ContainerProps> = ({
  children,
}) => (
  <SafeAreaView style={styles.base}>
    {children}
  </SafeAreaView>
);

export default Container;
