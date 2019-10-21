import React from 'react';
import { FormContextProvider } from 'containers/Misc/Contexts/FormContext';
import SearchFormComponent from 'components/Search/Parts/Forms/SearchForm';

const SearchForm: React.SFC = () => (
  <FormContextProvider>
    <SearchFormComponent />
  </FormContextProvider>
);

export default SearchForm;
