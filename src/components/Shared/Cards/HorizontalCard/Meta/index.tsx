import styles from './styles';
import React from 'react';
import { View } from 'react-native';

type MetaProps = {
  children: React.ReactNode;
};

const Meta: React.SFC<MetaProps> = ({
  children,
}) => (
  <View style={styles.base}>
    {children}
  </View>
);

export default Meta;
