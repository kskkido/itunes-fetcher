import styles from './styles';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Line from './Line';

type DividerVerticalProps = {
  hidden?: boolean;
  margin?: number;
};

const DividerVertical: React.SFC<DividerVerticalProps> = ({
  hidden = false,
  margin = 10,
}) => (
  <View style={StyleSheet.flatten([{ marginLeft: margin, marginRight: margin }, styles.base])}>
    {!hidden && <Line />}
  </View>
);

export default DividerVertical;
