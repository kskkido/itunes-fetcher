import styles from './styles';
import React from 'react';
import { View } from 'react-native';

type FormProps = {
  children: React.ReactNode;
};

const Form: React.SFC<FormProps> = ({
  children,
}) => (
  <View style={styles.base}>
    {children}
  </View>
);

export default Form;
