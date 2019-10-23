import React from 'react';
import { NAVIGATION_SEARCH_RESULTS_SONGS } from 'routes/navigations';
import Link from 'components/Shared/Link';
import Heading from 'components/Shared/Heading';
import Section from 'components/Search/Parts/Section';
import SectionHeader from 'components/Search/Parts/SectionHeader';
import ResultList from 'components/Search/Parts/ResultList';

type SongsProps = {
  ids: string[];
};

const Songs: React.SFC<SongsProps> = ({
  ids,
}) => (
  <Section>
    <SectionHeader>
      <Heading level={3}>
        Songs
      </Heading>
      <Link to={NAVIGATION_SEARCH_RESULTS_SONGS.name}>
        See All...
      </Link>
    </SectionHeader>
    <ResultList ids={ids} />
  </Section>
);

export default Songs;
