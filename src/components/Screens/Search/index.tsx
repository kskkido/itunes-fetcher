import React from 'react';
import AsyncSearchContainer from 'containers/Screens/Search/Parts/AsyncSearchContainer';
import SearchForm from 'containers/Screens/Search/Parts/Forms/SearchForm';
import Albums from 'containers/Screens/Search/Parts/Results/Albums';
import Applications from 'containers/Screens/Search/Parts/Results/Applications';
import Songs from 'containers/Screens/Search/Parts/Results/Songs';
import ScreenContainer from 'components/Shared/Layouts/ScreenContainer';
import Section from 'components/Shared/Section';

const Search: React.SFC = () => (
  <ScreenContainer>
    <Section>
      <SearchForm />
    </Section>
    <AsyncSearchContainer>
      <Songs />
      <Albums />
      <Applications />
    </AsyncSearchContainer>
  </ScreenContainer>
);

export default Search;
