import styles from './styles';
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import TextContainer from '../Parts/TextContainer';

type InputTextProps = TextInput['props'];

const InputText: React.SFC<InputTextProps> = props => (
  <TextContainer>
    <TextInput
      {...props}
      style={StyleSheet.flatten([props.style, styles.base])}
      numberOfLines={1}
    />
  </TextContainer>
);

export default InputText;
