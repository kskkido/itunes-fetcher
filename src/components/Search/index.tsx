import React from 'react';
import AsyncSearchContainer from 'containers/Search/Parts/AsyncSearchContainer';
import SearchForm from 'containers/Search/Parts/Forms/SearchForm';
import Albums from 'containers/Search/Parts/Results/Albums';
import Songs from 'containers/Search/Parts/Results/Songs';
import PageContainer from 'components/Shared/Layouts/PageContainer';
import Section from 'components/Shared/Section';

const Search: React.SFC = () => (
  <PageContainer>
    <Section>
      <SearchForm />
    </Section>
    <AsyncSearchContainer>
      <Songs />
      <Albums />
    </AsyncSearchContainer>
  </PageContainer>
);

export default Search;
