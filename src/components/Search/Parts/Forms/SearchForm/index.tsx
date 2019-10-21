import React from 'react';
import { FieldNames } from './types';
import Form from 'components/Shared/Form';
import SearchField from 'components/Shared/Fields/SearchField';

const SearchForm: React.SFC = () => (
  <Form>
    <SearchField
      name={FieldNames.search}
      placeholder="Search anything"
    />
  </Form>
);

export default SearchForm;
