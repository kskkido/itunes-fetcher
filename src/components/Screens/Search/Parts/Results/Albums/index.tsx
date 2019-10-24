import React from 'react';
import { NAVIGATION_SEARCH_ALBUMS } from 'routes/navigations';
import Link from 'components/Shared/Link';
import Heading from 'components/Shared/Heading';
import Section from 'components/Shared/Section';
import SectionHeader from 'components/Shared/SectionHeader';
import ListColumn from 'components/Shared/ListColumn';
import Album from 'containers/Screens/Search/Parts/Results/Album';

type AlbumsProps = {
  ids: string[];
};

const Albums: React.SFC<AlbumsProps> = ({
  ids,
}) => (
  <Section>
    <SectionHeader>
      <Heading level={3}>
        Albums
      </Heading>
      <Link to={NAVIGATION_SEARCH_ALBUMS.name}>
        See All...
      </Link>
    </SectionHeader>
    <ListColumn>
      {ids.map(id => <Album key={id} id={id} />)}
    </ListColumn>
  </Section>
);

export default Albums;
