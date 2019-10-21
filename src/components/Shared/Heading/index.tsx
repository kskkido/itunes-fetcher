import styles from './styles';
import React from 'react';
import { Text, StyleSheet } from 'react-native';

type HeadingProps = (
  {
    children: React.ReactNode;
    level: 1 | 2 | 3 | 4 | 5;
    align?: 'left' | 'right' | 'center';
  } &
  Pick<Text['props'], 'style' | 'numberOfLines'>
);

const Heading: React.SFC<HeadingProps> = ({
  children,
  level,
  align = 'left',
  style,
  ...rest
}) => (
  <Text
    {...rest}
    style={StyleSheet.flatten([
      style,
      styles.base,
      styles[align],
      styles[level],
    ])}
  >
    {children}
  </Text>
);

export default Heading;
