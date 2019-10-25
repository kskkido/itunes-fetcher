import styles from './styles';
import React from 'react';
import { ScrollView } from 'react-native';

type ScreenContainerProps = {
  children: React.ReactNode;
};

const ScreenContainer: React.SFC<ScreenContainerProps> = ({
  children,
}) => (
  <ScrollView style={styles.base}>
    {children}
  </ScrollView>
);

export default ScreenContainer;
