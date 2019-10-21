import React from 'react';
import { FieldValue } from './types';
import useField from 'hooks/useField';
import InputText from 'components/Shared/Inputs/InputText';

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
    <InputText
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
    />
  );
};

export default TextField;
