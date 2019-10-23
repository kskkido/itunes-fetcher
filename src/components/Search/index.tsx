import React from 'react';
import AsyncSearchContainer from 'containers/Search/Parts/AsyncSearchContainer';
import SearchForm from 'containers/Search/Parts/Forms/SearchForm';
import Albums from 'containers/Search/Parts/Results/Albums';
import Songs from 'containers/Search/Parts/Results/Songs';
import Container from './Parts/Container';
import Section from './Parts/Section';

const Search: React.SFC = () => (
  <Container>
    <Section>
      <SearchForm />
    </Section>
    <AsyncSearchContainer>
      <Songs />
      <Albums />
    </AsyncSearchContainer>
  </Container>
);

export default Search;
