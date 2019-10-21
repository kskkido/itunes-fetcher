import React from 'react';
import { NAVIGATION_ALBUMS_ALBUM } from 'routes/navigations';
import Heading from 'components/Shared/Heading';
import Link from 'components/Shared/Link';
import SearchForm from 'containers/Search/Parts/Forms/SearchForm';
import Container from './Parts/Container';
import Section from './Parts/Section';
import SectionHeader from './Parts/SectionHeader';
import ResultCard from './Parts/ResultCard';

const Search: React.SFC = () => (
  <Container>
    <Section>
      <SearchForm />
    </Section>
    <Section>
      <SectionHeader>
        <Heading level={3}>
          Songs
        </Heading>
        <Link to={NAVIGATION_ALBUMS_ALBUM.name}>
          See All...
        </Link>
      </SectionHeader>
      <ResultCard
        title="Song A"
        subtitle="What is this"
      />
      <ResultCard
        title="Song B"
        subtitle="What is this"
      />
      <ResultCard
        title="Song C"
        subtitle="What is this"
      />
      <ResultCard
        title="Song D"
        subtitle="What is this"
      />
    </Section>
    <Section>
      <SectionHeader>
        <Heading level={3}>
          Albums
        </Heading>
        <Link to={NAVIGATION_ALBUMS_ALBUM.name}>
          See All...
        </Link>
      </SectionHeader>
      <ResultCard
        title="Album A"
        subtitle="What is this"
      />
      <ResultCard
        title="Album B"
        subtitle="What is this"
      />
      <ResultCard
        title="Album C"
        subtitle="What is this"
      />
      <ResultCard
        title="Album D"
        subtitle="What is this"
      />
    </Section>
  </Container>
);

export default Search;
