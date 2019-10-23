import styles from './styles';
import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

export type IndicatorProps = (
  ActivityIndicator['props']
);

const Indicator: React.SFC<IndicatorProps> = (props) => (
  <ActivityIndicator
    {...props}
    style={StyleSheet.flatten([props.style, styles.base])}
  />
);

export default Indicator;
