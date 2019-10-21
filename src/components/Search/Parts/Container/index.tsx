import styles from './styles';
import React from 'react';
import { ScrollView } from 'react-native';

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.SFC<ContainerProps> = ({
  children,
}) => (
  <ScrollView style={styles.base}>
    {children}
  </ScrollView>
);

export default Container;
