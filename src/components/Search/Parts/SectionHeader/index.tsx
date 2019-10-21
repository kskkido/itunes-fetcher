import styles from './styles';
import React from 'react';
import { View, StyleSheet } from 'react-native';

type SectionHeaderProps = {
  children: React.ReactNode;
  style?: Record<string, any>;
};

const SectionHeader: React.SFC<SectionHeaderProps> = ({
  children,
  style,
}) => (
  <View style={StyleSheet.flatten([style, styles.base])}>
    {children}
  </View>
);

export default SectionHeader;
