import React from 'react';
import { NAVIGATION_SEARCH_SONGS } from 'routes/navigations';
import Link from 'components/Shared/Link';
import Heading from 'components/Shared/Heading';
import Section from 'components/Shared/Section';
import SectionHeader from 'components/Shared/SectionHeader';
import ListColumn from 'components/Shared/ListColumn';
import SongCard from 'containers/Screens/Search/Parts/Results/SongCard';

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
      <Link to={NAVIGATION_SEARCH_SONGS.name}>
        See All...
      </Link>
    </SectionHeader>
    <ListColumn>
      {ids.map(id => <SongCard key={id} id={id} />)}
    </ListColumn>
  </Section>
);

export default Songs;
