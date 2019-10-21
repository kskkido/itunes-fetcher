import styles from './styles';
import React, { useCallback } from 'react';
import { Text, StyleSheet } from 'react-native';
import useNavigation from 'hooks/useNavigation';

type LinkProps = (
  {
    children: React.ReactNode;
    to: string;
    params?: Record<string, any>;
  } &
  Pick<Text['props'], 'style' | 'numberOfLines'>
);

const Link: React.SFC<LinkProps> = ({
  children,
  to,
  params,
  style,
  ...rest
}) => {
  const navigation = useNavigation();

  return (
    <Text
      {...rest}
      style={StyleSheet.flatten([ style, styles.base ])}
      onPress={useCallback(
        () => navigation.navigate({ params, routeName: to }),
        [to, params, navigation]
      )}
    >
      {children}
    </Text>
  );
};

export default Link;
