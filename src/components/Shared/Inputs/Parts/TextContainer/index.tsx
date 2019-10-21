import styles from './styles';
import React from 'react';
import { View } from 'react-native';
import DividerVertical from 'components/Shared/DividerVertical';
import { intersperse } from 'utils/vdom';

type TextContainer = {
  children: React.ReactNode;
};

const TextContainer: React.SFC<TextContainer> = ({
  children,
}) => (
  <View style={styles.base}>
    {React.Children.count(children) <= 1
      ? children
      : intersperse(<DividerVertical hidden={true} margin={5} />, React.Children.toArray(children))
    }
  </View>
);

export default TextContainer;
