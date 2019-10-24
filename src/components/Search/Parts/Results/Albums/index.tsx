import React from 'react';
import { NAVIGATION_SEARCH_RESULTS_ALBUMS } from 'routes/navigations';
import Link from 'components/Shared/Link';
import Heading from 'components/Shared/Heading';
import Section from 'components/Search/Parts/Section';
import SectionHeader from 'components/Search/Parts/SectionHeader';
import CardList from 'components/Search/Parts/CardList';
import Album from 'containers/Search/Parts/Results/Album';

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
      <Link to={NAVIGATION_SEARCH_RESULTS_ALBUMS.name}>
        See All...
      </Link>
    </SectionHeader>
    <CardList>
      {ids.map(id => <Album key={id} id={id} />)}
    </CardList>
  </Section>
);

export default Albums;
