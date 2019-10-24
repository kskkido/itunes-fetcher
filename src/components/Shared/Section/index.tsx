import styles from './styles';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { intersperse } from 'utils/vdom';
import DividerHorizontal from 'components/Shared/DividerHorizontal';

type SectionProps = {
  children: React.ReactNode;
  style?: Record<string, any>;
};

const Section: React.SFC<SectionProps> = ({
  children,
  style,
}) => (
  <View style={StyleSheet.flatten([style, styles.base])}>
    {React.Children.count(children) <= 1
      ? children
      : intersperse(<DividerHorizontal hidden={true} margin={5} />, React.Children.toArray(children))
    }
  </View>
);

export default Section;
