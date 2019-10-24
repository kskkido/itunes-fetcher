import React, { useCallback } from 'react';
import { FieldValues, FieldNames } from './types';
import useForm from 'hooks/useForm';
import Form from 'components/Shared/Form';
import SearchField from 'components/Shared/Fields/SearchField';

type SearchFormProps = {
  onSubmit: (values: FieldValues) => void;
};

const SearchForm: React.SFC<SearchFormProps> = ({
  onSubmit,
}) => {
  const { values } = useForm<FieldValues>();

  return (
    <Form>
      <SearchField
        name={FieldNames.search}
        placeholder="Search anything"
        onEndEditing={useCallback(() => onSubmit(values), [values])}
      />
    </Form>
  );
};

export default SearchForm;
