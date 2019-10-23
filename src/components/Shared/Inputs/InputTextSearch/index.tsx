import styles from './styles';
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Search from 'components/Shared/Icons/Search';
import TextContainer from '../Parts/TextContainer';

export type InputTextSearchProps = TextInput['props'];

const InputTextSearch: React.SFC<InputTextSearchProps> = props => (
  <TextContainer>
    <Search size={20} />
    <TextInput
      {...props}
      style={StyleSheet.flatten([props.style, styles.base])}
      numberOfLines={1}
    />
  </TextContainer>
);

export default InputTextSearch;
