import styles from './styles';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Line from './Line';

type DividerHorizontalProps = {
  hidden?: boolean;
  margin?: number;
};

const DividerHorizontal: React.SFC<DividerHorizontalProps> = ({
  hidden = false,
  margin = 10,
}) => (
  <View style={StyleSheet.flatten([{ marginTop: margin, marginBottom: margin }, styles.base])}>
    {!hidden && <Line />}
  </View>
);

export default DividerHorizontal;
