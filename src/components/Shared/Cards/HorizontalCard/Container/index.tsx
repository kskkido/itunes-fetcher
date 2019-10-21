import styles from './styles';
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { intersperse } from 'utils/vdom';
import DividerVertical from 'components/Shared/DividerVertical';

export type ContainerProps = (
  Pick<
    TouchableOpacity['props'],
    'onPress' | 'children' | 'style'
  >
);

const Container: React.SFC<ContainerProps> = ({
  children,
  style,
  onPress,
}) => (
  <TouchableOpacity
    style={StyleSheet.flatten([style, styles.base])}
    onPress={onPress}
  >
    {React.Children.count(children) <= 1
      ? children
      : intersperse(<DividerVertical hidden={true} margin={5} />, React.Children.toArray(children))
    }
  </TouchableOpacity>
);

export default Container;
