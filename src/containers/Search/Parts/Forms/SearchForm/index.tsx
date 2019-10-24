import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as albumsActions from 'states/albums/actions';
import * as songsActions from 'states/songs/actions';
import { FormContextProvider } from 'containers/Misc/Contexts/FormContext';
import SearchFormComponent from 'components/Search/Parts/Forms/SearchForm';

const SearchForm: React.SFC = () => {
  const dispatch = useDispatch();

  return (
    <FormContextProvider>
      <SearchFormComponent
        onSubmit={useCallback(
          ({ search: term }) => {
            dispatch(albumsActions.albumsSearch({ term }));
            dispatch(songsActions.songsSearch({ term }));
          },
          [dispatch]
        )}
      />
    </FormContextProvider>
  );
};

export default SearchForm;
