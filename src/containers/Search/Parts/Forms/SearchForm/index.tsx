import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { search } from 'states/search/actions';
import { FormContextProvider } from 'containers/Misc/Contexts/FormContext';
import SearchFormComponent from 'components/Search/Parts/Forms/SearchForm';

const SearchForm: React.SFC = () => {
  const dispatch = useDispatch();

  return (
    <FormContextProvider>
      <SearchFormComponent
        onSubmit={useCallback(
          (values) => dispatch(search({ term: values.search })),
          [dispatch]
        )}
      />
    </FormContextProvider>
  )
};

export default SearchForm;
