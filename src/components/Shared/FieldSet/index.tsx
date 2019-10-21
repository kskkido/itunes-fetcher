import styles from './styles';
import React from 'react';
import { View } from 'react-native';

type FieldSetProps = {
  children: React.ReactNode;
};

const FieldSet: React.SFC<FieldSetProps> = ({ children }) => (
  <View style={styles.base}>
    {children}
  </View>
);

export default FieldSet;
