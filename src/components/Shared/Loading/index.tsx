import styles from './styles';
import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

export type LoadingProps = (
  ActivityIndicator['props']
);

const Loading: React.SFC<LoadingProps> = (props) => (
  <ActivityIndicator
    {...props}
    style={StyleSheet.flatten([props.style, styles.base])}
  />
);

export default Loading;
