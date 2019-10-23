import React from 'react';
import { Omit } from 'types/utility';
import { FieldValue } from './types';
import useField from 'hooks/useField';
import InputTextSearch, { InputTextSearchProps } from 'components/Shared/Inputs/InputTextSearch';

type TextFieldProps = (
  {
    name: string;
  } &
  Omit<InputTextSearchProps, 'value' | 'onChangeText'>
);

const TextField: React.SFC<TextFieldProps> = ({
  name,
  ...rest
}) => {
  const { value, setValue } = useField<FieldValue>(name);

  return (
    <InputTextSearch
      {...rest}
      value={value}
      onChangeText={setValue}
    />
  );
};

export default TextField;
