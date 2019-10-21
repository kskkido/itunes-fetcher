import React from 'react';
import { FieldValue } from './types';
import useField from 'hooks/useField';
import InputTextSearch from 'components/Shared/Inputs/InputTextSearch';

type TextFieldProps = {
  name: string;
  placeholder?: string;
};

const TextField: React.SFC<TextFieldProps> = ({
  name,
  placeholder,
}) => {
  const { value, setValue } = useField<FieldValue>(name);

  return (
    <InputTextSearch
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
    />
  );
};

export default TextField;
